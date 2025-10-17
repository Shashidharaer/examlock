<?php

// Set correct working directory
chdir(__DIR__ . '/../public');

// Require the Composer autoloader
require __DIR__ . '/../vendor/autoload.php';

// Bootstrap the Laravel application
$app = require_once __DIR__ . '/../bootstrap/app.php';

// Handle the incoming request
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);

