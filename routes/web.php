<?php

use App\Http\Controllers\StatamicEntryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Homepage - serves from Statamic pages collection
Route::get('/', function () {
    $entry = \Statamic\Facades\Entry::query()
        ->where('collection', 'pages')
        ->where('slug', 'home')
        ->first();
    
    if (!$entry) {
        // Fallback to dashboard page if home entry doesn't exist
        return Inertia::render('dashboard');
    }
    
    return app(StatamicEntryController::class)->transformAndRender($entry);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// Download page - standalone without layout
Route::get('/download', function () {
    return Inertia::render('download');
})->name('download');

// Extension page - standalone without layout
Route::get('/extension', function () {
    return Inertia::render('extension');
})->name('extension');

// Form submission routes
Route::post('/contact', [\App\Http\Controllers\FormController::class, 'submitContactForm'])->name('contact.submit');
Route::post('/request-demo', [\App\Http\Controllers\FormController::class, 'submitRequestDemo'])->name('request-demo.submit');

// Search route
Route::post('/api/search', [\App\Http\Controllers\SearchController::class, 'search'])->name('search');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';


// Statamic Entry Routes
// This route handles all Statamic entries with Inertia
// IMPORTANT: This must be at the END so it doesn't interfere with other routes

// First try: /{collection}/{slug} format
Route::get('/{collection}/{slug}', [StatamicEntryController::class, 'show'])
    ->name('statamic.entry')
    ->where('collection', '(?!cp|api|graphql|!/)[a-z0-9_-]+') // Exclude Statamic routes
    ->where('slug', '[a-z0-9_-]+');

// Second try: /{slug} format - looks for pages at root level
Route::get('/{slug}', function (string $slug) {
    // First, try to find in 'pages' collection
    $entry = \Statamic\Facades\Entry::query()
        ->where('collection', 'pages')
        ->where('slug', $slug)
        ->first();
    
    if ($entry) {
        return app(StatamicEntryController::class)->transformAndRender($entry);
    }
    
    // If not found in pages, try other collections (like resouces)
    $entry = \Statamic\Facades\Entry::query()
        ->where('slug', $slug)
        ->first();
    
    if ($entry) {
        return app(StatamicEntryController::class)->transformAndRender($entry);
    }
    
    // If not found, 404
    abort(404);
})
    ->name('page')
    ->where('slug', '(?!cp|api|graphql|dashboard|login|register|logout|settings|!/)[a-z0-9_-]+'); // Exclude system routes
