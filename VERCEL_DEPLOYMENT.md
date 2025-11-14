# Vercel Deployment Guide for Examlock

## 📋 Prerequisites

1. **Vercel Account**: Sign up at https://vercel.com
2. **Vercel CLI**: Install globally
3. **Git Repository**: Connected to GitHub

## 🚀 Quick Deploy (3 Steps)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

### Step 3: Deploy

```bash
# Deploy to production
vercel --prod

# Or deploy to preview first
vercel
```

## 🔧 What's Already Configured

Your project already has:
- ✅ `vercel.json` - Complete Vercel configuration
- ✅ `api/index.php` - Serverless function entry point
- ✅ `package.json` - Build scripts configured
- ✅ `.env` - Environment variables

## 📦 Configuration Breakdown

### vercel.json
- **Builds**: Static assets + PHP serverless functions
- **Routes**: Proper routing for static files and API endpoints
- **Environment**: Production settings for Laravel

### Build Process
1. Runs `npm run build` (Vite builds React/CSS)
2. Copies static assets to `public/`
3. Deploys PHP code as serverless functions
4. Configures routes for proper request handling

## 🌐 Environment Variables

You'll need to set these in Vercel Dashboard:

### Required Variables:
1. `APP_KEY` - Your Laravel app key
2. `APP_URL` - Your Vercel domain (auto-set)
3. `HUBSPOT_API_KEY` - Your HubSpot API key
4. `HUBSPOT_PORTAL_ID` - Your HubSpot portal ID
5. `HUBSPOT_CONTACT_FORM_GUID` - Contact form GUID
6. `HUBSPOT_DEMO_FORM_GUID` - Demo form GUID

### Setting Environment Variables:

**Via Vercel CLI:**
```bash
vercel env add APP_KEY production
# Paste your app key when prompted

vercel env add HUBSPOT_API_KEY production
# Paste your HubSpot API key when prompted

vercel env add HUBSPOT_PORTAL_ID production
# Enter: 244300504

vercel env add HUBSPOT_CONTACT_FORM_GUID production
# Enter: 1dd9adc3-31aa-4fc8-9d4b-b1f722713fe1

vercel env add HUBSPOT_DEMO_FORM_GUID production
# Enter: 27cd8482-5712-4e60-b2d1-92af48f93c19
```

**Via Vercel Dashboard:**
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable for "Production" environment

## 🔄 Deployment Workflow

### First Time Deployment:

```bash
# 1. Make sure all dependencies are installed
composer install --no-dev --optimize-autoloader
npm install

# 2. Build assets
npm run build

# 3. Deploy to preview (optional)
vercel

# 4. Deploy to production
vercel --prod
```

### Subsequent Deployments:

```bash
# Just push to GitHub
git add .
git commit -m "Your changes"
git push origin main

# Vercel will auto-deploy!
```

Or manually deploy:
```bash
vercel --prod
```

## 🔗 Connect to GitHub (Recommended)

For automatic deployments on every push:

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect settings from `vercel.json`
5. Add environment variables
6. Click "Deploy"

Now every push to `main` branch will automatically deploy!

## 📝 Important Notes

### Database
- Current config uses SQLite (`database/database.sqlite`)
- For production, consider using:
  - **Vercel Postgres** (recommended)
  - **PlanetScale** (MySQL)
  - **Supabase** (PostgreSQL)

### Storage
- Files uploaded to `/storage` won't persist on Vercel
- Use external storage:
  - **Vercel Blob Storage**
  - **AWS S3**
  - **Cloudflare R2**

### Caching
- Vercel serverless functions are stateless
- Current config uses `array` cache driver
- For production caching, use:
  - **Redis** (Upstash Redis recommended)
  - **Memcached**

## 🛠️ Troubleshooting

### Build Fails
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### PHP Errors
- Check Vercel function logs in dashboard
- Verify all environment variables are set
- Ensure `composer install` ran successfully

### 404 Errors
- Check `vercel.json` routes configuration
- Verify build output is in `public/` directory
- Check Vercel function logs

### Asset Loading Issues
- Verify `ASSET_URL` environment variable
- Check `public/build/manifest.json` exists
- Ensure Vite build completed successfully

## 🎯 Deployment Checklist

Before deploying to production:

- [ ] Run `composer install --no-dev --optimize-autoloader`
- [ ] Run `npm install && npm run build`
- [ ] Set all environment variables in Vercel
- [ ] Test locally: `php artisan serve`
- [ ] Verify `.env.production` values (if exists)
- [ ] Check that `api/index.php` exists
- [ ] Ensure `vercel.json` is in root directory
- [ ] Add domain (if custom domain needed)

## 📊 After Deployment

Your app will be available at:
- **Preview**: `https://your-project-git-branch.vercel.app`
- **Production**: `https://your-project.vercel.app`

### Next Steps:
1. Add custom domain (Settings → Domains)
2. Configure SSL (automatic)
3. Set up monitoring
4. Configure analytics
5. Set up database (if needed)

## 🆘 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Laravel on Vercel**: https://vercel.com/guides/deploying-laravel-to-vercel
- **Vercel Support**: https://vercel.com/support

## 🔐 Security Notes

- Never commit `.env` to git
- Use Vercel environment variables for secrets
- Enable HTTPS-only (automatic on Vercel)
- Review CORS settings if using API separately
- Set up rate limiting if needed

---

## Quick Commands Reference

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs

# List deployments
vercel ls

# Add environment variable
vercel env add VARIABLE_NAME production

# Pull environment variables locally
vercel env pull

# Remove deployment
vercel rm [deployment-url]
```

---

**Ready to deploy? Run:** `vercel --prod` 🚀
