<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class VercelServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // Force HTTPS on Vercel
        if (env('VERCEL') === '1') {
            URL::forceScheme('https');
            
            // Get the current host from the request
            if (isset($_SERVER['HTTP_HOST'])) {
                $host = $_SERVER['HTTP_HOST'];
                $url = 'https://' . $host;
                
                // Override APP_URL and ASSET_URL dynamically
                config(['app.url' => $url]);
                config(['app.asset_url' => $url]);
                
                // Force the root URL
                URL::forceRootUrl($url);
            }
        }
    }
}
