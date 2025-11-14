# 🚀 Quick Vercel Setup - Start Here!

## ✅ Your Project is Ready for Vercel!

Everything is configured. Follow these simple steps:

---

## Option 1: GitHub Integration (Recommended - Easiest) ⭐

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Select your GitHub repo: `Shashidharaer/examlock`
4. Vercel will auto-detect your settings ✅
5. Click **"Deploy"**

### Step 3: Add Environment Variables
In Vercel Dashboard → Settings → Environment Variables, add:

| Variable | Value | From .env |
|----------|-------|-----------|
| `APP_KEY` | `base64:D/dAjFUUlnQ4jBe/YrHx1u1gPnAvK6DQgwSRDfPbc5I=` | ✅ |
| `HUBSPOT_API_KEY` | `pat-na2-149762e1-0911-451c-b6d0-da15720351d6` | ✅ |
| `HUBSPOT_PORTAL_ID` | `244300504` | ✅ |
| `HUBSPOT_CONTACT_FORM_GUID` | `1dd9adc3-31aa-4fc8-9d4b-b1f722713fe1` | ✅ |
| `HUBSPOT_DEMO_FORM_GUID` | `27cd8482-5712-4e60-b2d1-92af48f93c19` | ✅ |

### Step 4: Redeploy
After adding environment variables:
- Go to **Deployments** tab
- Click the **"..." menu** on latest deployment
- Click **"Redeploy"**

**Done!** 🎉 Your site will be live at `https://examlock.vercel.app`

---

## Option 2: Manual CLI Deployment

### Step 1: Login to Vercel
```bash
npx vercel login
```
Follow the authentication prompts (email/GitHub).

### Step 2: Deploy
```bash
# For preview deployment
npm run deploy:preview

# For production deployment
npm run deploy
```

Or use the automated script:
```bash
bash deploy.sh
```

### Step 3: Add Environment Variables
```bash
# Add each variable
npx vercel env add APP_KEY production
npx vercel env add HUBSPOT_API_KEY production
npx vercel env add HUBSPOT_PORTAL_ID production
npx vercel env add HUBSPOT_CONTACT_FORM_GUID production
npx vercel env add HUBSPOT_DEMO_FORM_GUID production
```

### Step 4: Redeploy with Environment Variables
```bash
npm run deploy
```

---

## 📋 What's Already Set Up

✅ **vercel.json** - Complete configuration  
✅ **api/index.php** - PHP serverless function  
✅ **package.json** - Build scripts configured  
✅ **Deploy scripts** - Ready to use  
✅ **Routes** - Static assets + API routing  

---

## 🎯 Current Configuration

**Build Command:** `npm run vercel-build`  
**Output Directory:** `public`  
**PHP Runtime:** `vercel-php@0.7.4`  
**Node Version:** Auto-detected  

---

## 🔍 Verify Deployment

After deployment, test these URLs:

| Endpoint | Expected Result |
|----------|----------------|
| `https://your-site.vercel.app/` | Homepage loads ✅ |
| `https://your-site.vercel.app/download` | Download page ✅ |
| `https://your-site.vercel.app/extension` | Extension page ✅ |
| `https://your-site.vercel.app/api/...` | API responds ✅ |

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Locally test the build
npm run vercel-build

# Check for errors
composer install --no-dev
npm run build
```

### Environment Variables Not Working
1. Verify they're set for "Production" environment
2. Redeploy after adding variables
3. Check spelling and values

### PHP Errors
- Check **Vercel Functions** logs in dashboard
- Look for error messages in deployment logs
- Verify `api/index.php` exists

### 404 Errors
- Clear browser cache
- Check `vercel.json` routes
- Verify build completed successfully

---

## 📊 Deployment Status

**Build Time:** ~2-3 minutes  
**Deploy Time:** ~30 seconds  
**Total:** ~3-4 minutes first time  

---

## 🎉 Next Steps After Deployment

1. ✅ **Verify site is live**
2. 🌐 **Add custom domain** (optional)
   - Settings → Domains → Add
3. 📊 **Set up analytics** (optional)
   - Vercel Analytics → Enable
4. 🔔 **Configure notifications**
   - Settings → Notifications
5. 💾 **Set up database** (if needed)
   - Consider Vercel Postgres or PlanetScale

---

## 🚀 Ready to Deploy?

**Easiest Method:**
```bash
# Push to GitHub, then import on Vercel
git push origin main
```

**Quick Deploy:**
```bash
# One command deployment
npm run deploy
```

**Automated Script:**
```bash
# Interactive deployment with checks
bash deploy.sh
```

---

## 📚 Documentation

- 📖 **Full Guide:** `VERCEL_DEPLOYMENT.md`
- 🔧 **Vercel Docs:** https://vercel.com/docs
- 💬 **Laravel on Vercel:** https://vercel.com/guides/deploying-laravel-to-vercel

---

**Need help?** Check the full deployment guide in `VERCEL_DEPLOYMENT.md`

**Ready to deploy?** → https://vercel.com/new 🚀
