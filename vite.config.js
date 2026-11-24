import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function cashfreeDevMiddleware() {
  return {
    name: 'cashfree-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/create-order.php', async (req, res) => {
        if (req.method !== 'POST') {
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 405;
          res.end(JSON.stringify({ success: false, message: 'Method not allowed. Use POST.' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => { body += chunk; });
        req.on('end', async () => {
          res.setHeader('Content-Type', 'application/json');
          try {
            const data = JSON.parse(body || '{}');

            // Parse config.php for credentials
            let env = 'TEST';
            let appId = '';
            let secret = '';

            try {
              const localConfigPath = path.resolve(__dirname, 'public/api/config.local.php');
              const configPath = path.resolve(__dirname, 'public/api/config.php');
              const filePath = fs.existsSync(localConfigPath) ? localConfigPath : configPath;
              const configContent = fs.readFileSync(filePath, 'utf-8');
              const envMatch = configContent.match(/define\('CASHFREE_ENV',\s*(?:getenv\('CASHFREE_ENV'\)\s*\?:\s*)?'([^']+)'\)/);
              const appIdMatch = configContent.match(/define\('CASHFREE_APP_ID',\s*(?:getenv\('CASHFREE_APP_ID'\)\s*\?:\s*)?'([^']+)'\)/);
              const secretMatch = configContent.match(/define\('CASHFREE_SECRET_KEY',\s*(?:getenv\('CASHFREE_SECRET_KEY'\)\s*\?:\s*)?'([^']+)'\)/);

              if (envMatch) env = envMatch[1];
              if (appIdMatch) appId = appIdMatch[1];
              if (secretMatch) secret = secretMatch[1];
            } catch (err) {
              console.warn('Could not read public/api config:', err);
            }

            if (!secret || secret === 'YOUR_CASHFREE_SECRET_KEY_HERE') {
              res.statusCode = 400;
              res.end(JSON.stringify({
                success: false,
                message: 'Cashfree Secret Key is not yet configured. Please add your Secret Key to public/api/config.php'
              }));
              return;
            }

            const apiUrl = env === 'PRODUCTION'
              ? 'https://api.cashfree.com/pg/orders'
              : 'https://sandbox.cashfree.com/pg/orders';

            const amount = parseFloat(data.amount) || 100;
            const currency = data.currency || 'INR';
            const donorName = (data.name || 'Generous Donor').trim();
            const donorEmail = (data.email || 'donor@gyutomonastery.org').trim();
            const donorPhone = ((data.phone || '9876543210') + '').replace(/[^0-9]/g, '');

            const orderId = 'GYUTO_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6).toUpperCase();
            const customerId = 'CUST_' + Math.random().toString(36).substring(2, 8).toUpperCase();

            const payload = {
              order_id: orderId,
              order_amount: Math.round(amount * 100) / 100,
              order_currency: currency,
              customer_details: {
                customer_id: customerId,
                customer_name: donorName.substring(0, 50),
                customer_email: donorEmail,
                customer_phone: donorPhone.length >= 10 ? donorPhone.slice(-10) : '9876543210'
              },
              order_meta: {
                return_url: 'https://gyutotantricmonastery.org/support?order_id={order_id}&status=complete'
              },
              order_note: `Donation to Gyuto Tantric Monastery (${donorName})`
            };

            const cfRes = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-api-version': '2023-08-01',
                'x-client-id': appId,
                'x-client-secret': secret
              },
              body: JSON.stringify(payload)
            });

            const cfData = await cfRes.json();

            if (cfRes.ok && cfData.payment_session_id) {
              res.statusCode = 200;
              res.end(JSON.stringify({
                success: true,
                payment_session_id: cfData.payment_session_id,
                order_id: cfData.order_id,
                environment: env
              }));
            } else {
              res.statusCode = cfRes.status || 400;
              res.end(JSON.stringify({
                success: false,
                message: cfData.message || 'Cashfree rejected order creation',
                details: cfData
              }));
            }
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({
              success: false,
              message: 'Local dev proxy error: ' + err.message
            }));
          }
        });
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cashfreeDevMiddleware()],
})
