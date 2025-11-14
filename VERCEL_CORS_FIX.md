# Vercel CORS and Asset URL Fix

## Problem
Your Vercel deployment had two major issues:

1. **CORS Errors**: Assets were blocked because preview deployments tried to load from production URL
2. **Asset URL Mismatch**: `ASSET_URL` was hardcoded to `https://examlock.vercel.app`

## Errors You Were Seeing
```
Failed to load resource: the server responded with a status of 404
Access to script at 'https://examlock.vercel.app/build/assets/index-Cu9IQnPX.js' 
from origin 'https://examlock-4z4llsy7p-abhijitkhatuas-projects.vercel.app' 
has been blocked by CORS policy
```

## What Was Fixed

### 1. Dynamic APP_URL and ASSET_URL (`api/index.php`)
**Before:**
- URLs were hardcoded in `vercel.json` to production domain
- Preview deployments tried to load assets from production

**After:**
```php
// Dynamically set APP_URL based on current host
$protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'] ?? 'localhost';
$appUrl = $protocol . '://' . $host;

$_ENV['APP_URL'] = $appUrl;
$_ENV['ASSET_URL'] = $appUrl;
```

Now each deployment (preview or production) uses its own URL!

### 2. CORS Headers (`vercel.json`)
**Before:**
- No CORS headers on static assets
- Cross-origin requests were blocked

**After:**
```json
{
  "src": "/build/(.*)",
  "dest": "/build/$1",
  "headers": {
    "Cache-Control": "public, max-age=31536000, immutable",
    "Access-Control-Allow-Origin": "*"
  }
}
```

Added CORS headers to all static asset routes:
- `/build/*` - Built JS/CSS files
- `/assets/*` - Static assets
- `/storage/*` - Uploaded files
- All CSS/JS/image files

### 3. Removed Hardcoded ASSET_URL
**Before:**
```json
"env": {
  "ASSET_URL": "https://examlock.vercel.app"
}
```

**After:**
```json
"env": {
  // ASSET_URL removed - now set dynamically
}
```

## Changes Made

### Files Modified:
1. ✅ `api/index.php` - Added dynamic URL detection
2. ✅ `vercel.json` - Added CORS headers and removed hardcoded ASSET_URL

## Testing

After redeploying, verify:

1. **Preview Deployments** work correctly
   - Assets load from preview URL
   - No CORS errors in console

2. **Production Deployment** works correctly
   - Assets load from production URL
   - All routes accessible

3. **Console Errors** are gone
   - No 404 errors
   - No CORS errors
   - All assets load successfully

## Deploy the Fix

```bash
# Commit the changes
git add api/index.php vercel.json
git commit -m "Fix: Dynamic asset URLs and CORS headers for Vercel"
git push origin abhijit

# Vercel will automatically redeploy
```

Or deploy manually:
```bash
npm run deploy
```

## Expected Result

✅ All preview deployments use their own URLs  
✅ Production deployment uses production URL  
✅ No CORS errors  
✅ All assets load correctly  
✅ CSS and JS files load successfully  

## Future Considerations

If you need to restrict CORS later (for security), you can:

1. **Set specific origins** instead of `*`:
```json
"Access-Control-Allow-Origin": "https://examlock.vercel.app"
```

2. **Use environment variables** for allowed origins
3. **Implement CORS middleware** in Laravel for API routes

---

**Status:** ✅ Ready to deploy!
