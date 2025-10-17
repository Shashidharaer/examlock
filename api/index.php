<?php

// Vercel serverless function for Laravel

// Set VERCEL flag FIRST so it's available during bootstrap
$_ENV['VERCEL'] = '1';
putenv('VERCEL=1');

// Create necessary writable directories in /tmp FIRST
$tmpDirs = [
    '/tmp/storage/framework/sessions',
    '/tmp/storage/framework/views',
    '/tmp/storage/framework/cache/data',
    '/tmp/storage/logs',
    '/tmp/bootstrap',
    '/tmp/bootstrap/cache',
];

foreach ($tmpDirs as $dir) {
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
}

// Set environment variables for ALL cache paths to use /tmp
putenv('APP_SERVICES_CACHE=/tmp/bootstrap/cache/services.php');
putenv('APP_PACKAGES_CACHE=/tmp/bootstrap/cache/packages.php');
putenv('APP_CONFIG_CACHE=/tmp/bootstrap/cache/config.php');
putenv('APP_ROUTES_CACHE=/tmp/bootstrap/cache/routes-v7.php');
putenv('APP_EVENTS_CACHE=/tmp/bootstrap/cache/events.php');
putenv('VIEW_COMPILED_PATH=/tmp/storage/framework/views');

$_ENV['APP_SERVICES_CACHE'] = '/tmp/bootstrap/cache/services.php';
$_ENV['APP_PACKAGES_CACHE'] = '/tmp/bootstrap/cache/packages.php';
$_ENV['APP_CONFIG_CACHE'] = '/tmp/bootstrap/cache/config.php';
$_ENV['APP_ROUTES_CACHE'] = '/tmp/bootstrap/cache/routes-v7.php';
$_ENV['APP_EVENTS_CACHE'] = '/tmp/bootstrap/cache/events.php';
$_ENV['VIEW_COMPILED_PATH'] = '/tmp/storage/framework/views';

// Change to public directory
chdir(__DIR__ . '/../public');

// Load Composer autoloader
require __DIR__ . '/../vendor/autoload.php';

// Bootstrap Laravel
$app = require_once __DIR__ . '/../bootstrap/app.php';

// CRITICAL: Override bootstrap path BEFORE any bootstrapping
// Use reflection to change the protected $bootstrapPath property
$reflection = new ReflectionClass($app);
$property = $reflection->getProperty('bootstrapPath');
$property->setAccessible(true);
$property->setValue($app, '/tmp/bootstrap');

// Override storage path
$app->useStoragePath('/tmp/storage');

// Handle the request
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$request = Illuminate\Http\Request::capture();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);
