# 🔧 Vercel Deployment Fix Checklist

## ✅ Code Changes (DONE)
- [x] Created `VercelServiceProvider.php`
- [x] Registered provider in `bootstrap/providers.php`
- [x] Updated `api/index.php` with dynamic URL detection
- [x] Added CORS headers in `vercel.json`
- [x] Committed changes

## 🚨 REQUIRED: Vercel Dashboard Actions

### Step 1: Push Code to GitHub
```bash
git push origin abhijit
```

### Step 2: Go to Vercel Dashboard
URL: https://vercel.com/dashboard

### Step 3: Select Your Project
Click on your `examlock` project

### Step 4: Check Environment Variables
1. Click **Settings** (left sidebar)
2. Click **Environment Variables**
3. Look for these variables:
   - `APP_URL`
   - `ASSET_URL`

### Step 5: Remove Hardcoded URLs (IF THEY EXIST)
If you see `APP_URL` or `ASSET_URL`:
1. Click the **"..."** menu next to each
2. Click **"Delete"**
3. Confirm deletion

### Step 6: Verify Required Variables Are Set
Make sure these EXIST:
- ✅ `APP_KEY` = `base64:D/dAjFUUlnQ4jBe/YrHx1u1gPnAvK6DQgwSRDfPbc5I=`
- ✅ `APP_ENV` = `production`
- ✅ `APP_DEBUG` = `false`
- ✅ `HUBSPOT_API_KEY` = `pat-na2-149762e1-0911-451c-b6d0-da15720351d6`
- ✅ `HUBSPOT_PORTAL_ID` = `244300504`
- ✅ `HUBSPOT_CONTACT_FORM_GUID` = `1dd9adc3-31aa-4fc8-9d4b-b1f722713fe1`
- ✅ `HUBSPOT_DEMO_FORM_GUID` = `27cd8482-5712-4e60-b2d1-92af48f93c19`

### Step 7: Redeploy
1. Go to **Deployments** tab
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. Optional: Uncheck "Use existing Build Cache" for clean deploy

### Step 8: Test Your Deployment
Open the deployment URL and check browser console:
- ✅ No CORS errors
- ✅ No 404 errors for CSS/JS
- ✅ All assets load from the same domain

## Quick Commands

```bash
# Check current Vercel environment variables
npx vercel env ls

# Remove APP_URL if it exists
npx vercel env rm APP_URL production

# Remove ASSET_URL if it exists  
npx vercel env rm ASSET_URL production

# Deploy
git push origin abhijit
# OR
npm run deploy
```

## What Should Happen

### Preview Deployment
```
URL: https://examlock-abc123-user.vercel.app
Assets: https://examlock-abc123-user.vercel.app/build/...
✅ Same domain = No CORS errors!
```

### Production Deployment
```
URL: https://examlock.vercel.app
Assets: https://examlock.vercel.app/build/...
✅ Same domain = No CORS errors!
```

## Verify It's Working

Open browser console on your deployment:
1. ❌ Before: `Access-Control-Allow-Origin` errors
2. ✅ After: Clean console, all assets load

---

**Ready?** Push your code and update Vercel environment variables! 🚀
