# Statamic + Inertia Setup Summary

## Current Configuration

### ✅ What Works Now

1. **Homepage**: `http://localhost:8000/` - Your welcome page (Inertia)
2. **Dashboard**: `http://localhost:8000/dashboard` - Dashboard (Inertia, auth required)
3. **Control Panel**: `http://localhost:8000/cp` - Full Statamic CP for editing
4. **Entries**: `http://localhost:8000/pages/example` - Statamic entries via Inertia

### 🎯 How It Works

**Backend (Statamic CP)**
- Full Statamic functionality at `/cp`
- Create, edit, delete entries
- Manage collections, blueprints, assets
- All Statamic features available

**Frontend (Inertia + React)**
- All entry display handled by Inertia
- No Blade templates needed
- React components render all content
- Full access to Statamic data

### 📁 Key Files

**Routes:**
- `routes/web.php` - All frontend routes
- Statamic CP routes auto-registered at `/cp`

**Controllers:**
- `app/Http/Controllers/StatamicEntryController.php` - Handles entry display

**React Components:**
- `resources/js/pages/entry.tsx` - Full entry display with layout
- `resources/js/pages/simple-entry.tsx` - Minimal entry display
- `resources/js/pages/welcome.tsx` - Homepage

**Config:**
- `config/statamic/routes.php` - Frontend routes disabled (using Inertia)
- `config/statamic/cp.php` - CP enabled at `/cp`

**Content:**
- `content/collections/pages.yaml` - Pages collection config
- `content/collections/pages/*.md` - Entry files
- `resources/blueprints/collections/pages/pages.yaml` - Entry blueprint

### 🔧 How to Use

#### Creating Content

1. **Via Control Panel** (Recommended):
   ```
   http://localhost:8000/cp
   ```
   - Login with your user
   - Go to Collections > Pages
   - Create/Edit entries
   - All changes instantly available on frontend

2. **Via Files**:
   Create `content/collections/pages/my-slug.md`:
   ```markdown
   ---
   id: unique-id
   blueprint: pages
   title: 'My Page'
   excerpt: 'Description'
   ---
   ## Content here
   
   Write in Markdown!
   ```

#### Viewing Content

- Homepage: `http://localhost:8000/`
- Entry: `http://localhost:8000/pages/my-slug`
- Pattern: `http://localhost:8000/{collection}/{slug}`

### 🎨 Customizing Display

Edit `resources/js/pages/entry.tsx`:

```tsx
export default function Entry({ entry }: EntryPageProps) {
    return (
        <div>
            <h1>{entry.title}</h1>
            <p>{entry.data.excerpt}</p>
            
            {/* Rendered HTML */}
            <div dangerouslySetInnerHTML={{ __html: entry.content.content }} />
            
            {/* Access any field */}
            {entry.data.your_field}
        </div>
    );
}
```

### 📊 Available Entry Data

```typescript
{
    id: string
    title: string
    slug: string
    collection: string
    url: string
    published: boolean
    date: string
    
    // All fields (rendered)
    content: {
        title: string
        content: string  // HTML
        excerpt: string
        // ... your custom fields
    }
    
    // All fields (raw)
    data: {
        title: string
        content: string  // Markdown
        excerpt: string
        // ... your custom fields
    }
}
```

### 🚀 Common Tasks

#### Add a New Collection

1. In CP: Collections > Create Collection
2. Or create: `content/collections/blog.yaml`
   ```yaml
   title: Blog
   revisions: false
   sort_dir: desc
   date_behavior:
     past: public
     future: private
   ```
3. Create blueprint: `resources/blueprints/collections/blog/blog.yaml`
4. Entries automatically work at `/blog/slug`

#### Add Fields to Entries

1. Edit: `resources/blueprints/collections/pages/pages.yaml`
2. Add field:
   ```yaml
   - handle: subtitle
     field:
       type: text
       display: 'Subtitle'
   ```
3. Access in React: `{entry.data.subtitle}`

#### Change Homepage to a Statamic Entry

In `routes/web.php`:
```php
Route::get('/', function () {
    $entry = \Statamic\Facades\Entry::query()
        ->where('collection', 'pages')
        ->where('slug', 'home')
        ->first();
    
    if (!$entry) {
        return Inertia::render('welcome');
    }
    
    return app(StatamicEntryController::class)->show('pages', 'home');
})->name('home');
```

### 🔍 Troubleshooting

**Entry shows 404:**
- Check entry exists in CP
- Verify slug in URL matches entry slug
- Clear cache: `php artisan statamic:stache:clear`

**Can't access CP:**
- Make sure you're going to `/cp` not `/cp/`
- Check user has permissions
- Clear route cache: `php artisan route:clear`

**Template errors:**
- Make sure `config/statamic/routes.php` has `'enabled' => false`
- Collection should NOT have `template` or `route` keys

**Changes not showing:**
```bash
php artisan statamic:stache:clear
php artisan route:clear
```

### 📚 Next Steps

1. ✅ CP working at `/cp`
2. ✅ Entries editable in CP
3. ✅ Entries display via Inertia
4. Create more collections (blog, products, etc.)
5. Customize entry.tsx styling
6. Add more fields to blueprints
7. Build navigation
8. Add assets/images

---

**The Perfect Split:**
- 🎨 **Statamic CP** = Content management (backend)
- ⚛️ **Inertia + React** = Content display (frontend)
- 🔄 **No conflicts** = Each handles what it's best at!
