# Statamic + Inertia.js Integration Guide

This document explains how Statamic entries work with Inertia.js in your application.

## Overview

Your application now supports rendering Statamic entries using Inertia.js and React components. When you create an entry in Statamic, all its content is automatically available to your React components.

## How It Works

### 1. **Controller** (`app/Http/Controllers/StatamicEntryController.php`)

The `StatamicEntryController` handles fetching Statamic entries and transforming them for Inertia:

```php
// URL: /pages/example
public function show(string $collection, string $slug)
{
    $entry = Entry::query()
        ->where('collection', $collection)
        ->where('slug', $slug)
        ->first();
        
    return Inertia::render('entry', [
        'entry' => $this->transformEntry($entry),
    ]);
}
```

### 2. **Route** (`routes/web.php`)

The route pattern `/{collection}/{slug}` captures Statamic entries:

```php
Route::get('/{collection}/{slug}', [StatamicEntryController::class, 'show'])
    ->name('statamic.entry');
```

### 3. **React Component** (`resources/js/pages/entry.tsx`)

The entry component receives all the entry data as props:

```tsx
interface EntryPageProps {
    entry: StatamicEntry;
}

export default function Entry({ entry }: EntryPageProps) {
    // Access all entry data here
    return <div>{entry.title}</div>;
}
```

## Entry Data Structure

When an entry is passed to your React component, it includes:

```typescript
{
    id: string;              // Entry ID
    title: string;           // Entry title
    slug: string;            // URL slug
    collection: string;      // Collection handle
    url: string;             // Full URL
    published: boolean;      // Publication status
    date: string;            // Publication date
    
    content: {               // All augmented field values
        title: string,
        content: string,     // Rendered HTML
        excerpt: string,
        // ... all your custom fields
    },
    
    data: {                  // Raw field values
        title: string,
        content: string,     // Raw markdown
        excerpt: string,
        // ... all your custom fields
    },
    
    blueprint: {
        handle: string,
        title: string
    },
    
    meta: {
        last_modified: string,
        locale: string,
        site: string
    }
}
```

## Creating Entries

### 1. **Via Statamic Control Panel**

1. Go to `/cp` (Statamic Control Panel)
2. Navigate to Collections > Pages
3. Click "Create Entry"
4. Fill in the fields
5. Save and publish

### 2. **Via Markdown Files**

Create a file in `content/collections/{collection}/{slug}.md`:

```markdown
---
id: my-page
blueprint: pages
title: 'My Page'
excerpt: 'This is my page'
---
## My Content

Write your content here in Markdown.
```

## Example Usage

### Access the example entry:

Visit: `http://your-app.test/pages/example`

This will:
1. Match the route `/{collection}/{slug}` where collection=pages, slug=example
2. Load the entry from `content/collections/pages/example.md`
3. Pass all entry data to the `entry.tsx` component
4. Render your React component with full access to the entry data

## Customizing the Display

### Option 1: Modify `entry.tsx`

Edit `resources/js/pages/entry.tsx` to customize how entries are displayed:

```tsx
export default function Entry({ entry }: EntryPageProps) {
    return (
        <div>
            <h1>{entry.title}</h1>
            <p>{entry.data.excerpt}</p>
            <div dangerouslySetInnerHTML={{ __html: entry.content.content }} />
            
            {/* Access custom fields */}
            {entry.data.featured_image && (
                <img src={entry.data.featured_image} alt={entry.title} />
            )}
        </div>
    );
}
```

### Option 2: Use Different Components per Collection

Modify the controller to use different components based on collection:

```php
public function show(string $collection, string $slug): Response
{
    $entry = Entry::query()
        ->where('collection', $collection)
        ->where('slug', $slug)
        ->first();

    if (! $entry) {
        abort(404);
    }

    // Use different components for different collections
    $component = match($collection) {
        'pages' => 'entry',
        'blog' => 'blog-post',
        'products' => 'product',
        default => 'entry'
    };

    return Inertia::render($component, [
        'entry' => $this->transformEntry($entry),
    ]);
}
```

## Adding Custom Fields

1. Edit the blueprint: `resources/blueprints/collections/pages/pages.yaml`
2. Add your fields:

```yaml
fields:
  - handle: my_custom_field
    field:
      type: text
      display: 'My Custom Field'
```

3. Access in your component:

```tsx
<div>{entry.data.my_custom_field}</div>
```

## Creating New Collections

1. Create collection file: `content/collections/{handle}.yaml`
2. Create blueprint: `resources/blueprints/collections/{handle}/{handle}.yaml`
3. Create entries in: `content/collections/{handle}/`
4. They'll automatically work with the existing route!

## TypeScript Types

All Statamic types are defined in `resources/js/types/statamic.ts`. Update this file if you add custom fields that should be typed.

## Development Tips

- The debug panel in `entry.tsx` shows all available entry data in development mode
- Use `entry.content` for rendered HTML content
- Use `entry.data` for raw field values
- Check the browser console for any React errors
- Visit `/cp` to access the Statamic Control Panel

## Troubleshooting

**Entry not found (404)**
- Check the entry exists in `content/collections/{collection}/{slug}.md`
- Verify the collection is configured in `content/collections/{collection}.yaml`
- Clear Statamic cache: `php artisan statamic:stache:clear`

**Fields not showing**
- Verify the blueprint includes the field
- Check the field handle matches what you're accessing
- Look at the debug panel to see available fields

**TypeScript errors**
- Update `resources/js/types/statamic.ts` with your custom field types
- Run `npm run build` to check for type errors

## Next Steps

1. Create more collections for different content types (blog, products, etc.)
2. Customize the `entry.tsx` component styling
3. Add more fields to your blueprints
4. Create collection-specific components
5. Build navigation using Statamic's structure feature
