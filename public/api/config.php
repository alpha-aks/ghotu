<?php
/**
 * Cashfree Payment Gateway Configuration
 * Gyuto Tantric Monastery
 * 
 * Keep this file private and never expose your Secret Key to client-side code.
 */

if (file_exists(__DIR__ . '/config.local.php')) {
    include_once __DIR__ . '/config.local.php';
}

// Choose Environment: 'PRODUCTION' or 'TEST' (Sandbox)
if (!defined('CASHFREE_ENV')) {
    define('CASHFREE_ENV', getenv('CASHFREE_ENV') ?: 'TEST');
}

// Enter your Cashfree Credentials here (or set via server environment variables)
if (!defined('CASHFREE_APP_ID')) {
    define('CASHFREE_APP_ID', getenv('CASHFREE_APP_ID') ?: 'YOUR_CASHFREE_APP_ID');
}
if (!defined('CASHFREE_SECRET_KEY')) {
    define('CASHFREE_SECRET_KEY', getenv('CASHFREE_SECRET_KEY') ?: 'YOUR_CASHFREE_SECRET_KEY');
}

// API Base URLs
if (CASHFREE_ENV === 'PRODUCTION') {
    define('CASHFREE_API_URL', 'https://api.cashfree.com/pg/orders');
} else {
    define('CASHFREE_API_URL', 'https://sandbox.cashfree.com/pg/orders');
}

// Cashfree API Version
define('CASHFREE_API_VERSION', '2023-08-01');
