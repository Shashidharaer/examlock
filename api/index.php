<?php

// Vercel serverless function for Laravel

// Laravel expects to be run from the public directory
$publicPath = __DIR__ . '/../public';
chdir($publicPath);

// Load the Composer autoloader
$autoloadPath = __DIR__ . '/../vendor/autoload.php';
if (!file_exists($autoloadPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Vendor directory not found. Please run composer install.']);
    exit(1);
}

require $autoloadPath;

// Bootstrap Laravel
$app = require_once __DIR__ . '/../bootstrap/app.php';

// Capture the request
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$request = Illuminate\Http\Request::capture();

// Handle the request
$response = $kernel->handle($request);

// Send the response
$response->send();

// Terminate the kernel
$kernel->terminate($request, $response);
