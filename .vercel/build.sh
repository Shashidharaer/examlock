#!/bin/bash
set -e

# Install Composer dependencies
if [ -f "composer.json" ]; then
    echo "Installing Composer dependencies..."
    composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist
    
    # Cache Laravel configurations
    echo "Caching Laravel configurations..."
    php artisan config:cache || true
    php artisan route:cache || true
    php artisan view:cache || true
fi

echo "Build complete!"

