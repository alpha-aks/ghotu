<?php
/**
 * Cashfree Order Creation Endpoint
 * Gyuto Tantric Monastery
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed. Use POST.']);
    exit;
}

require_once __DIR__ . '/config.php';

// Validate credentials exist
if (CASHFREE_APP_ID === 'YOUR_CASHFREE_APP_ID_HERE' || empty(CASHFREE_APP_ID)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Cashfree API credentials are not yet configured in /api/config.php'
    ]);
    exit;
}

// Read raw JSON body
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON input.']);
    exit;
}

$amount = isset($data['amount']) ? floatval($data['amount']) : 0;
$currency = isset($data['currency']) && !empty($data['currency']) ? strtoupper(trim($data['currency'])) : 'INR';
$donorName = isset($data['name']) && !empty(trim($data['name'])) ? trim($data['name']) : 'Generous Donor';
$donorEmail = isset($data['email']) && !empty(trim($data['email'])) ? trim($data['email']) : 'donor@gyutomonastery.org';
$donorPhone = isset($data['phone']) && !empty(trim($data['phone'])) ? preg_replace('/[^0-9]/', '', $data['phone']) : '9876543210';

if ($amount <= 0) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Donation amount must be greater than zero.']);
    exit;
}

if (strlen($donorPhone) < 10) {
    $donorPhone = '9876543210';
}

// Generate unique order ID
$orderId = 'GYUTO_' . date('YmdHis') . '_' . bin2hex(random_bytes(3));
$customerId = 'CUST_' . bin2hex(random_bytes(4));

// Construct Cashfree Order Request Payload
$payload = [
    'order_id' => $orderId,
    'order_amount' => round($amount, 2),
    'order_currency' => $currency,
    'customer_details' => [
        'customer_id' => $customerId,
        'customer_name' => substr($donorName, 0, 50),
        'customer_email' => $donorEmail,
        'customer_phone' => substr($donorPhone, -10)
    ],
    'order_meta' => [
        'return_url' => 'https://gyutotantricmonastery.org/support?order_id={order_id}&status=complete',
        'notify_url' => null
    ],
    'order_note' => 'Donation to Gyuto Tantric Monastery (' . $donorName . ')'
];

// Execute cURL request to Cashfree API
$ch = curl_init(CASHFREE_API_URL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'x-api-version: ' . CASHFREE_API_VERSION,
    'x-client-id: ' . CASHFREE_APP_ID,
    'x-client-secret: ' . CASHFREE_SECRET_KEY
]);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError) {
    http_response_code(502);
    echo json_encode([
        'success' => false,
        'message' => 'Connection to Cashfree failed: ' . $curlError
    ]);
    exit;
}

$result = json_decode($response, true);

if ($httpCode >= 200 && $httpCode < 300 && isset($result['payment_session_id'])) {
    echo json_encode([
        'success' => true,
        'payment_session_id' => $result['payment_session_id'],
        'order_id' => $result['order_id'],
        'order_status' => $result['order_status'] ?? 'ACTIVE',
        'environment' => CASHFREE_ENV
    ]);
} else {
    http_response_code($httpCode ?: 400);
    echo json_encode([
        'success' => false,
        'message' => $result['message'] ?? 'Failed to create Cashfree payment order.',
        'details' => $result
    ]);
}
