# 🚨 CRITICAL FIX: Remove Hardcoded URLs from Vercel

## The Problem

Your preview deployment is still loading assets from production because **Vercel environment variables are overriding our dynamic URL detection**.

Error you're seeing:
```
Access to script at 'https://examlock.vercel.app/build/assets/...' 
from origin 'https://examlock-62wg5y9x3-abhijitkhatuas-projects.vercel.app' 
has been blocked by CORS policy
```

## ⚠️ IMMEDIATE ACTION REQUIRED

### Step 1: Remove Environment Variables from Vercel

Go to your Vercel Dashboard and **DELETE or UPDATE** these variables:

1. **Go to**: https://vercel.com/dashboard
2. **Select**: Your `examlock` project
3. **Navigate to**: Settings → Environment Variables
4. **Remove/Update**:
   - ❌ Delete `APP_URL` (if exists)
   - ❌ Delete `ASSET_URL` (if exists)

### Step 2: Keep Only These Environment Variables

✅ **KEEP** these variables in Vercel:
- `APP_KEY` (your Laravel app key)
- `APP_ENV` = `production`
- `APP_DEBUG` = `false`
- `HUBSPOT_API_KEY`
- `HUBSPOT_PORTAL_ID`
- `HUBSPOT_CONTACT_FORM_GUID`
- `HUBSPOT_DEMO_FORM_GUID`

❌ **REMOVE** these (if they exist):
- `APP_URL`
- `ASSET_URL`

## What I Just Fixed

### 1. Created `VercelServiceProvider`
This provider forces Laravel to use the current deployment URL:

```php
// Forces URL to match current deployment
URL::forceRootUrl('https://' . $_SERVER['HTTP_HOST']);
```

### 2. Registered the Provider
Added to `bootstrap/providers.php`:
```php
App\Providers\VercelServiceProvider::class,
```

### 3. Early URL Detection
Updated `api/index.php` to set URLs before Laravel boots.

## How It Works Now

```
Request → Vercel Deployment
    ↓
api/index.php detects current URL
    ↓
Sets $_ENV['APP_URL'] dynamically
    ↓
VercelServiceProvider enforces it
    ↓
Laravel uses correct URL for assets
    ↓
✅ Assets load from current deployment!
```

## Deploy the Fix

### Option 1: Commit and Push (Auto-deploy)
```bash
git add app/Providers/VercelServiceProvider.php bootstrap/providers.php
git commit -m "Add VercelServiceProvider for dynamic URL handling"
git push origin abhijit
```

### Option 2: Manual Deploy
```bash
npm run deploy
```

## After Deployment

1. **Go to Vercel Dashboard**
2. **Remove `APP_URL` and `ASSET_URL`** environment variables
3. **Redeploy** (Deployments → ... → Redeploy)
4. **Test preview deployment** - assets should load correctly!

## Verification Checklist

After redeploying, check:

- [ ] Preview deployment loads assets from preview URL
- [ ] Production deployment loads assets from production URL  
- [ ] No CORS errors in browser console
- [ ] No 404 errors for CSS/JS files
- [ ] All pages load correctly

## If Still Not Working

### Check Current Environment Variables

Via CLI:
```bash
npx vercel env ls
```

### Pull Current Environment Variables
```bash
npx vercel env pull .env.vercel
cat .env.vercel
```

Look for `APP_URL` or `ASSET_URL` - if they exist, remove them:
```bash
npx vercel env rm APP_URL production
npx vercel env rm ASSET_URL production
```

### Force Clear Vercel Cache
```bash
# In Vercel Dashboard
Deployments → Latest → ... → Redeploy → ✅ Use existing Build Cache = OFF
```

## Expected Result

✅ **Before (Wrong):**
```html
<!-- Preview deployment tries to load from production -->
<link href="https://examlock.vercel.app/build/assets/app-DR2wP-OM.js">
```

✅ **After (Correct):**
```html
<!-- Preview deployment loads from preview URL -->
<link href="https://examlock-62wg5y9x3-abhijitkhatuas-projects.vercel.app/build/assets/app-DR2wP-OM.js">
```

## Why This Happened

1. You likely set `APP_URL` in Vercel environment variables
2. Vercel environment variables override our dynamic detection
3. Preview deployments inherited production URL
4. CORS blocked cross-origin asset loading

## The Solution

1. ✅ Created `VercelServiceProvider` - Forces correct URL
2. ✅ Updated `api/index.php` - Sets URL early
3. ❌ **YOU NEED TO**: Remove hardcoded URLs from Vercel Dashboard

---

## 🚨 CRITICAL NEXT STEP

**→ Go to Vercel Dashboard NOW and remove `APP_URL`/`ASSET_URL` environment variables!**

Then redeploy and it will work! 🎉
