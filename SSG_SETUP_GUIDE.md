# Static Site Generation (SSG) Setup Guide

## Overview

This project now supports **Static Site Generation (SSG)** using Statamic's built-in SSG package. This allows you to pre-render all pages at build time for maximum performance and SEO benefits.

## ✅ What's Already Configured

- ✅ Statamic SSG package installed
- ✅ SSR (Server-Side Rendering) configured
- ✅ Vite build setup
- ✅ Vercel deployment configuration
- ✅ Multi-worker support via `spatie/fork`

## 📁 Configuration Files

### 1. **`config/statamic/ssg.php`**
Main SSG configuration file that controls:
- Base URL for static site
- Output destination directory
- Files to copy/symlink
- URLs to include/exclude
- Pagination handling
- Glide image generation

### 2. **`package.json`** Scripts
Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "build": "vite build",
    "build:ssr": "vite build && vite build --ssr",
    "build:ssg": "npm run build:ssr && php artisan statamic:ssg:generate",
    "dev": "vite",
    "ssg:generate": "php artisan statamic:ssg:generate",
    "ssg:clear": "php artisan statamic:ssg:clear"
  }
}
```

## 🚀 Usage

### Generate Static Site

#### Basic Generation
```bash
# Generate all pages
php artisan statamic:ssg:generate

# Or use the npm script
npm run ssg:generate
```

#### With Multiple Workers (Faster)
```bash
# Use all available CPU cores
php artisan statamic:ssg:generate --workers=auto

# Or specify number of workers
php artisan statamic:ssg:generate --workers=4
```

#### Clear Static Site
```bash
php artisan statamic:ssg:clear
```

### Full Build Process
```bash
# Complete build with SSR and SSG
npm run build:ssg
```

## 📝 Configuration Options

### 1. Update Base URL
Edit `config/statamic/ssg.php`:

```php
'base_url' => env('APP_URL', 'https://examlock.com'),
```

### 2. Configure Output Destination
```php
'destination' => storage_path('app/static'),
```

### 3. Add Additional URLs to Generate
```php
'urls' => [
    '/download',
    '/extension',
    // Add other custom routes
],
```

### 4. Exclude URLs from Generation
```php
'exclude' => [
    '/dashboard',      // Authenticated pages
    '/api/*',          // API routes
    '/admin/*',        // Admin routes
],
```

### 5. Copy Build Assets
```php
'copy' => [
    public_path('build') => 'build',
    public_path('assets') => 'assets',
    public_path('storage') => 'storage',
    public_path('favicon.ico') => 'favicon.ico',
    public_path('robots.txt') => 'robots.txt',
],
```

## 🔧 Integration with Current Routes

Your project has these pages that can be statically generated:

### Public Pages (SSG Compatible)
- ✅ `/` - Homepage (from Statamic)
- ✅ `/download` - Download page
- ✅ `/extension` - Extension page
- ✅ All Statamic collection entries

### Dynamic Pages (Not SSG Compatible)
- ❌ `/dashboard` - Requires authentication
- ❌ Form submissions - POST routes
- ❌ `/api/*` - API endpoints

## 🎯 Deployment Workflows

### Option 1: Vercel with SSG

Update your `vercel.json` build command:

```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "storage/app/static"
      }
    }
  ]
}
```

Add to `package.json`:
```json
{
  "scripts": {
    "vercel-build": "npm run build:ssg && cp -r storage/app/static public/static"
  }
}
```

### Option 2: Manual Deployment

```bash
# 1. Generate static site
npm run build:ssg

# 2. Static files are in: storage/app/static/
# 3. Deploy this directory to your static host
```

### Option 3: CI/CD Pipeline (GitHub Actions)

Create `.github/workflows/deploy-ssg.yml`:

```yaml
name: Deploy SSG

on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: '8.4'
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install Dependencies
        run: |
          composer install --no-dev --optimize-autoloader
          npm ci
      
      - name: Build Static Site
        run: npm run build:ssg
      
      - name: Deploy to Static Host
        run: |
          # Add your deployment commands here
          # rsync, aws s3 sync, etc.
```

## 🔄 Content Update Workflow

### Development
```bash
# 1. Make content changes in Statamic CP
# 2. Preview changes locally
npm run dev

# 3. Regenerate static site
npm run ssg:generate

# 4. Preview static site
php -S localhost:8000 -t storage/app/static
```

### Production
```bash
# Option 1: Manual
npm run build:ssg
# Deploy storage/app/static/

# Option 2: Webhook
# Set up webhook in Statamic to trigger SSG on content changes
# Settings > Control Panel > Webhooks
```

## ⚡ Performance Tips

### 1. Use Workers for Faster Generation
```bash
php artisan statamic:ssg:generate --workers=auto
```

### 2. Generate Only Changed Content
```bash
# Coming soon - incremental builds
php artisan statamic:ssg:generate --fresh
```

### 3. Optimize Images with Glide
```php
// In config/statamic/ssg.php
'glide' => [
    'directory' => 'img',
    'override' => true,  // Pre-generate all Glide images
],
```

### 4. Cache Busting
Vite automatically handles cache busting for your JS/CSS assets via the manifest.json file.

## 🐛 Troubleshooting

### Issue: Pages Not Generating
**Solution:** Add URLs explicitly to config:
```php
'urls' => [
    '/download',
    '/extension',
],
```

### Issue: Missing Assets
**Solution:** Update copy configuration:
```php
'copy' => [
    public_path('build') => 'build',
    public_path('storage') => 'storage',
],
```

### Issue: Slow Generation
**Solution:** Use multiple workers:
```bash
php artisan statamic:ssg:generate --workers=auto
```

### Issue: Authentication Pages in Static Site
**Solution:** Exclude them:
```php
'exclude' => [
    '/dashboard',
    '/login',
    '/register',
],
```

## 📊 SSG vs SSR vs CSR

| Feature | SSG | SSR | CSR |
|---------|-----|-----|-----|
| Build Time | ✅ Pre-rendered | ❌ On request | ❌ On request |
| Performance | ⚡ Fastest | 🟡 Fast | 🔴 Slowest |
| SEO | ✅ Excellent | ✅ Good | 🟡 Requires work |
| Hosting | 📦 Any CDN | 🖥️ Needs server | 📦 Any CDN |
| Updates | 🔄 Rebuild needed | ⚡ Instant | ⚡ Instant |

**Recommendation:**
- Use **SSG** for public marketing pages (homepage, download, extension)
- Use **SSR** for dynamic content that changes frequently
- Use **CSR** for authenticated dashboards and interactive apps

## 🎯 Next Steps

1. ✅ Configure `config/statamic/ssg.php` with your URLs
2. ✅ Update `package.json` scripts
3. ✅ Generate static site: `npm run ssg:generate`
4. ✅ Preview: `php -S localhost:8000 -t storage/app/static`
5. ✅ Deploy to production

## 📚 Resources

- [Statamic SSG Documentation](https://statamic.dev/static-site-generator)
- [Inertia.js SSR Guide](https://inertiajs.com/server-side-rendering)
- [Vite Build Documentation](https://vitejs.dev/guide/build.html)

## 🆘 Support

If you encounter issues:
1. Check `storage/logs/laravel.log`
2. Run `php artisan statamic:ssg:generate --verbose`
3. Review this guide's troubleshooting section
