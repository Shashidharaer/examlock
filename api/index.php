<?php

// Vercel serverless function for Laravel

// Create necessary writable directories in /tmp for serverless environment FIRST
$tmpDirs = [
    '/tmp/storage/framework/sessions',
    '/tmp/storage/framework/views',
    '/tmp/storage/framework/cache/data',
    '/tmp/storage/logs',
    '/tmp/bootstrap/cache',
];

foreach ($tmpDirs as $dir) {
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
}

// Set environment variables for writable paths
$_ENV['VIEW_COMPILED_PATH'] = '/tmp/storage/framework/views';
$_ENV['APP_SERVICES_CACHE'] = '/tmp/bootstrap/cache/services.php';
$_ENV['APP_PACKAGES_CACHE'] = '/tmp/bootstrap/cache/packages.php';
$_ENV['APP_CONFIG_CACHE'] = '/tmp/bootstrap/cache/config.php';
$_ENV['APP_ROUTES_CACHE'] = '/tmp/bootstrap/cache/routes-v7.php';
$_ENV['APP_EVENTS_CACHE'] = '/tmp/bootstrap/cache/events.php';

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

// CRITICAL: Override paths BEFORE bootstrapping
$app->useStoragePath('/tmp/storage');

// Override bootstrap cache path - this must happen before any bootstrapping
$app->singleton('path.bootstrap.cache', function () {
    return '/tmp/bootstrap/cache';
});

// Also bind the path method to return our tmp path
$app->bind('path.bootstrap', function() {
    return '/tmp/bootstrap';
});

// Capture and handle the request
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$request = Illuminate\Http\Request::capture();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);
