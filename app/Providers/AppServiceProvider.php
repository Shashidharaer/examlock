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
        // Override PackageManifest for serverless environment
        if (isset($_ENV['VERCEL'])) {
            $this->app->singleton(\Illuminate\Foundation\PackageManifest::class, function ($app) {
                return new class($app->basePath(), '/tmp/bootstrap/cache') extends \Illuminate\Foundation\PackageManifest {
                    public function __construct($basePath, $manifestPath)
                    {
                        $this->basePath = $basePath;
                        $this->manifestPath = $manifestPath;
                        $this->vendorPath = $basePath.'/vendor';
                    }
                };
            });
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
