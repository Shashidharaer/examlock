# Routing Setup - Complete Guide

## ✅ What's Been Fixed

### 1. Homepage from Statamic
- **URL:** `http://127.0.0.1:8000/`
- **Source:** `content/collections/pages/home.md`
- **Edit in CP:** Collections > Pages > Home

### 2. Root-Level Pages Support
- **URLs work both ways:**
  - `http://127.0.0.1:8000/example` ✅
  - `http://127.0.0.1:8000/pages/example` ✅
- **All pages from the "pages" collection are accessible at root level**

## 🗺️ URL Structure

### Homepage
```
/ → Statamic entry: pages/home
```

### Pages Collection (Root Level)
```
/about → pages/about
/contact → pages/contact  
/example → pages/example
/{any-slug} → pages/{any-slug}
```

### Pages Collection (Full Path)
```
/pages/about → pages/about
/pages/example → pages/example
/{collection}/{slug} → {collection}/{slug}
```

### Other Collections
```
/blog/my-post → blog/my-post
/products/item-1 → products/item-1
```

### System Routes (Protected)
```
/ → Homepage (Statamic)
/dashboard → Dashboard (Inertia, auth required)
/login → Login page
/register → Register page
/cp → Statamic Control Panel
/cp/* → All CP routes
```

## 📁 How to Create Pages

### Method 1: Control Panel (Recommended)
1. Go to `http://127.0.0.1:8000/cp`
2. Navigate to Collections > Pages
3. Click "Create Entry"
4. Set slug to `about` (or any name)
5. Save & Publish
6. Access at: `http://127.0.0.1:8000/about`

### Method 2: File-Based
Create `content/collections/pages/about.md`:
```markdown
---
id: about-page
blueprint: pages
title: 'About Us'
excerpt: 'Learn more about us'
---
## About Us

Your content here...
```

Access at: `http://127.0.0.1:8000/about`

## 🎯 Example Pages You Can Create

### Simple Pages
```
/about → About page
/contact → Contact page
/services → Services page
/pricing → Pricing page
```

### Blog Setup (New Collection)
1. Create collection: `content/collections/blog.yaml`
2. Create blueprint: `resources/blueprints/collections/blog/blog.yaml`
3. Create entries in: `content/collections/blog/`
4. Access at: `/blog/post-slug`

## ⚙️ How Routes Work

### Route Priority (Top to Bottom)
```php
1. / → Homepage (Statamic pages/home)
2. /dashboard → Dashboard
3. /login, /register, etc. → Auth routes
4. /settings/* → Settings routes
5. /{collection}/{slug} → Any collection entry
6. /{slug} → Pages collection at root level
```

### Protected Routes
These routes will NEVER match Statamic entries:
- `cp` - Control Panel
- `api` - API routes
- `graphql` - GraphQL
- `dashboard` - Dashboard
- `login`, `register`, `logout` - Auth
- `settings` - Settings
- `!/` - Statamic actions

## 📝 Editing Your Homepage

### Via Control Panel
1. Go to: `http://127.0.0.1:8000/cp`
2. Collections > Pages > Home
3. Edit content
4. Save
5. View at: `http://127.0.0.1:8000/`

### Via File
Edit: `content/collections/pages/home.md`

## 🎨 Customizing Display

All entries use: `resources/js/pages/index.tsx`

To customize the homepage specifically:
```tsx
export default function Entry({ entry }: EntryPageProps) {
    // Special styling for homepage
    if (entry.slug === 'home') {
        return (
            <div className="homepage-special">
                <h1>{entry.title}</h1>
                {/* Custom homepage layout */}
            </div>
        );
    }
    
    // Regular page layout
    return (
        <div className="regular-page">
            <h1>{entry.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: entry.content.content }} />
        </div>
    );
}
```

## ✅ Test Your Setup

### 1. Homepage
```
http://127.0.0.1:8000/
Should show: "Welcome Home" page
```

### 2. Example Page (Both URLs)
```
http://127.0.0.1:8000/example
http://127.0.0.1:8000/pages/example
Both should show: "Example Page"
```

### 3. Control Panel
```
http://127.0.0.1:8000/cp
Should show: Statamic CP login/dashboard
```

### 4. Dashboard
```
http://127.0.0.1:8000/dashboard
Should show: App dashboard (requires auth)
```

## 🚀 Quick Actions

### Create a New Page
```bash
# Via CP (easiest)
http://127.0.0.1:8000/cp → Collections → Pages → Create Entry

# Via file
# Create: content/collections/pages/your-slug.md
```

### Clear Caches
```bash
php artisan route:clear
php artisan statamic:stache:clear
```

### View All Routes
```bash
php artisan route:list
```

## 📊 Collection Setup

### Current Collections
- **Pages** - Main website pages (accessible at root level)

### Add More Collections
```yaml
# content/collections/blog.yaml
title: Blog
revisions: true
sort_dir: desc
date_behavior:
  past: public
  future: private
```

Entries automatically accessible at: `/blog/{slug}`

## 🎯 Perfect Setup Achieved!

✅ Homepage from Statamic  
✅ Root-level page URLs (`/example`)  
✅ Full path URLs (`/pages/example`)  
✅ Multiple collections support  
✅ Control Panel fully functional  
✅ Inertia renders all frontend  

---

**You're all set! Create pages in the CP and they'll appear at clean URLs.**
