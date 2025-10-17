<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Handle serverless environment (Vercel) where filesystem is read-only
        if (isset($_ENV['VERCEL']) || isset($_ENV['NOW_REGION'])) {
            // Override bootstrap cache path for serverless
            $this->app->singleton('path.bootstrap.cache', function () {
                return '/tmp/bootstrap/cache';
            });
            
            // Ensure bootstrap cache directory exists
            $bootstrapCache = '/tmp/bootstrap/cache';
            if (!is_dir($bootstrapCache)) {
                @mkdir($bootstrapCache, 0755, true);
            }
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
