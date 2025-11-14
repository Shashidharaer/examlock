# SSG Quick Start Guide

## ✅ Installation Complete!

Static Site Generation (SSG) has been successfully installed and configured for your Examlock project.

## 📦 What Was Installed

1. **Statamic SSG Package** - Core static site generator
2. **Spatie Fork** - Multi-worker support for faster generation
3. **Configuration Files** - Pre-configured for your project
4. **Build Scripts** - Added to `package.json`

## 🚀 Quick Commands

### Generate Static Site
```bash
# Basic generation
npm run ssg:generate

# Fast generation with multiple workers
npm run ssg:generate:fast

# Full build (SSR + SSG)
npm run build:ssg
```

### Clear Generated Files
```bash
npm run ssg:clear
```

### Preview Static Site
```bash
# Using PHP built-in server
php -S localhost:8000 -t storage/app/static

# Or using Node
npx serve storage/app/static
```

## 📁 Output Location

Static files are generated to:
```
storage/app/static/
```

## ⚙️ Configuration

### Main Config File
`config/statamic/ssg.php`

### Current Settings
- ✅ Base URL: From your `.env` APP_URL
- ✅ Output: `storage/app/static/`
- ✅ Additional URLs: `/download`, `/extension`
- ✅ Excluded: Authentication & API routes
- ✅ Assets: All public assets copied

## 🔧 Understanding the Results

Your first generation showed:
- ✅ **2 pages generated successfully** (`/download`, `/extension`)
- ⚠️ **17 Statamic pages need templates** (home, about, products, etc.)

### Why Some Pages Failed

The Statamic content pages need Antlers templates. You have two options:

#### Option 1: Use Inertia for All Pages (Recommended)
Convert Statamic pages to use Inertia components instead of Antlers views.

#### Option 2: Create Antlers Templates
Create view templates in `resources/views/` for Statamic pages.

## 📊 Current Architecture

Your project uses **Hybrid Rendering**:

```
┌─────────────────────────────────────────┐
│  Public Pages (Can use SSG)             │
├─────────────────────────────────────────┤
│  ✅ /download (Inertia)                 │
│  ✅ /extension (Inertia)                │
│  ⚠️  / (Statamic - needs template)      │
│  ⚠️  /about (Statamic - needs template) │
│  ⚠️  /products/* (Statamic)             │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Dynamic Pages (Cannot use SSG)         │
├─────────────────────────────────────────┤
│  ❌ /dashboard (Auth required)          │
│  ❌ /api/* (Dynamic API)                │
│  ❌ Form submissions (POST)             │
└─────────────────────────────────────────┘
```

## 🎯 Next Steps

### 1. Fix Statamic Pages

#### Quick Fix: Use Inertia Controller
Your `StatamicEntryController` already transforms entries to Inertia. Ensure all Statamic entries use it.

#### Check Current Setup
```bash
# View the controller
cat app/Http/Controllers/StatamicEntryController.php
```

### 2. Test Generation
```bash
# Regenerate with verbose output
php artisan statamic:ssg:generate --verbose
```

### 3. Deploy Static Site

#### Option A: Vercel (Current Setup)
Update `vercel.json`:
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

#### Option B: Any Static Host
Deploy the `storage/app/static/` directory to:
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Cloudflare Pages

## 💡 Tips

### 1. Incremental Builds
Only regenerate when content changes:
```bash
# Hook into your CI/CD or use webhooks
npm run ssg:generate:fast
```

### 2. Hybrid Approach
Use SSG for public pages and SSR/CSR for dynamic content:
- **SSG**: Marketing pages, blog, documentation
- **SSR**: Content that changes frequently
- **CSR**: Dashboards, admin panels

### 3. Performance
With workers enabled, generation is much faster:
```bash
php artisan statamic:ssg:generate --workers=4
```

## 🐛 Troubleshooting

### "View not found" Errors
These are Statamic pages without templates. You can:
1. Create Antlers templates in `resources/views/`
2. Or ensure they use your InertiaEntryController

### Missing Assets
Check `config/statamic/ssg.php` copy configuration.

### Slow Generation
Use workers: `npm run ssg:generate:fast`

## 📚 Documentation

For detailed information, see:
- `SSG_SETUP_GUIDE.md` - Comprehensive guide
- `config/statamic/ssg.php` - Configuration reference
- [Statamic SSG Docs](https://statamic.dev/static-site-generator)

## 🎉 You're Ready!

Your SSG is configured and working. The Inertia pages (`/download`, `/extension`) are generating successfully. 

To complete the setup:
1. Decide how to handle Statamic pages (Inertia vs Antlers)
2. Run `npm run ssg:generate:fast` after content changes
3. Deploy `storage/app/static/` to your static host

Need help? Check `SSG_SETUP_GUIDE.md` for detailed instructions!
