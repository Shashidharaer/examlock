# Quick Start: Statamic + Inertia Integration

Your application is now set up to work with Statamic entries and Inertia.js! 🎉

## What Was Created

### 1. **Backend**
- ✅ `StatamicEntryController.php` - Handles Statamic entries and passes data to Inertia
- ✅ Route pattern `/{collection}/{slug}` - Catches all Statamic entries
- ✅ Example collection "pages" with blueprint

### 2. **Frontend**
- ✅ `resources/js/pages/entry.tsx` - Full-featured entry display component
- ✅ `resources/js/pages/simple-entry.tsx` - Minimal entry display component
- ✅ `resources/js/types/statamic.d.ts` - TypeScript types for Statamic data

### 3. **Content**
- ✅ Example entry at `content/collections/pages/example.md`
- ✅ Collection configuration at `content/collections/pages.yaml`
- ✅ Blueprint at `resources/blueprints/collections/pages/pages.yaml`

## Try It Now!

1. **Start your development server:**
   ```bash
   npm run dev
   php artisan serve
   ```

2. **Visit the example entry:**
   ```
   http://localhost:8000/pages/example
   ```

3. **Access Statamic Control Panel:**
   ```
   http://localhost:8000/cp
   ```

## How It Works

When you create a Statamic entry, it automatically becomes available through Inertia:

```
Entry File: content/collections/pages/my-page.md
↓
URL: http://your-app/pages/my-page
↓
React Component: resources/js/pages/entry.tsx
↓
Receives: All entry data as props
```

## Create Your First Entry

### Option 1: Via Control Panel
1. Go to `/cp`
2. Login if needed
3. Navigate to Collections > Pages
4. Click "Create Entry"
5. Add your content
6. Save & Publish

### Option 2: Via File
Create `content/collections/pages/my-page.md`:

```markdown
---
id: my-page
blueprint: pages
title: 'My Awesome Page'
excerpt: 'This is my first entry'
---
## Hello World!

This is my first Statamic entry rendered with Inertia.js and React!
```

Then visit: `http://localhost:8000/pages/my-page`

## Access Entry Data in React

All entry data is available in your component:

```tsx
export default function Entry({ entry }: EntryPageProps) {
    return (
        <div>
            {/* Basic fields */}
            <h1>{entry.title}</h1>
            <p>{entry.data.excerpt}</p>
            
            {/* Rendered content (HTML) */}
            <div dangerouslySetInnerHTML={{ __html: entry.content.content }} />
            
            {/* Custom fields */}
            {entry.data.my_custom_field}
            
            {/* Metadata */}
            <time>{entry.date}</time>
            <span>{entry.collection}</span>
        </div>
    );
}
```

## Add Custom Fields

1. Edit `resources/blueprints/collections/pages/pages.yaml`
2. Add your field:
   ```yaml
   - handle: subtitle
     field:
       type: text
       display: 'Subtitle'
   ```
3. Access in React:
   ```tsx
   {entry.data.subtitle}
   ```

## What's Next?

- [ ] Create more entries in the Control Panel
- [ ] Customize the `entry.tsx` component
- [ ] Add custom fields to the blueprint
- [ ] Create new collections (blog, products, etc.)
- [ ] Build navigation
- [ ] Add images and assets

## Available Components

### `entry.tsx` (Full Layout)
- Uses AppLayout with breadcrumbs
- Shows all entry fields
- Includes debug panel in development
- Good for: Admin pages, full-featured content

### `simple-entry.tsx` (Minimal)
- No layout, just content
- Clean and simple
- Good for: Landing pages, marketing pages

**To use simple-entry instead:**
```php
// In StatamicEntryController.php
return Inertia::render('simple-entry', [
    'entry' => $entryData,
]);
```

## Need Help?

- 📚 Read `STATAMIC_INERTIA_SETUP.md` for detailed documentation
- 🔧 Check the debug panel (visible in development mode)
- 📖 Visit [Statamic Docs](https://statamic.dev)
- ⚛️ Visit [Inertia.js Docs](https://inertiajs.com)

## Common Commands

```bash
# Clear Statamic cache
php artisan statamic:stache:clear

# Create a new collection via CLI
php artisan statamic:make:collection

# Create a new blueprint
php artisan statamic:make:blueprint

# Access Statamic control panel
# Visit: /cp
```

---

Happy building! 🚀
