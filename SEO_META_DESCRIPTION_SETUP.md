# SEO Meta Description Setup

## Overview
This document explains where and how meta descriptions have been added to your Statamic + Inertia.js + React project.

## Changes Made

### 1. **Default Meta Description** (Fallback)
**File:** `/resources/views/app.blade.php`

Added a default meta description tag in the `<head>` section:
```html
<meta name="description" content="ExamLock - Secure examination and content protection platform for educational institutions">
```

This serves as a fallback if no page-specific meta description is provided.

### 2. **Dynamic Meta Descriptions in React Pages**

#### a) Entry Page
**File:** `/resources/js/pages/index.tsx`

Updated the Inertia `Head` component to include dynamic meta descriptions:
```tsx
<Head title={entry.title}>
    <meta name="description" content={entry.data.meta_description || entry.data.description || 'ExamLock - Secure examination and content protection platform'} />
</Head>
```

#### b) Simple Entry Page
**File:** `/resources/js/pages/simple-entry.tsx`

Similar implementation with fallback chain:
```tsx
<Head title={entry.title}>
    <meta name="description" content={entry.data.meta_description || entry.data.description || entry.data.excerpt || 'ExamLock - Secure examination and content protection platform'} />
</Head>
```

### 3. **Statamic CMS Field for Content Editors**

**File:** `/resources/blueprints/collections/pages/pages.yaml`

Added a `meta_description` field to the Pages blueprint:
```yaml
-
  handle: meta_description
  field:
    type: textarea
    display: 'Meta Description'
    instructions: 'SEO meta description for this page (recommended 150-160 characters)'
    character_limit: 160
    validate: 'max:160'
```

## How It Works

### Priority Order (Fallback Chain):
1. **`entry.data.meta_description`** - Custom meta description from Statamic CMS
2. **`entry.data.description`** - Description field if meta_description is not set
3. **`entry.data.excerpt`** - Excerpt field (for simple-entry pages)
4. **Default text** - Hardcoded fallback: "ExamLock - Secure examination and content protection platform"
5. **app.blade.php default** - Global fallback in the main template

## Usage Instructions

### For Content Editors in Statamic:
1. Go to your Statamic Control Panel
2. Edit any page in the Pages collection
3. You'll now see a **"Meta Description"** field below the Title
4. Enter a compelling description (150-160 characters recommended)
5. Save the page

### For Developers:
When creating new page types or templates, add meta descriptions using the Inertia `Head` component:

```tsx
import { Head } from '@inertiajs/react';

export default function YourPage({ entry }) {
    return (
        <>
            <Head title={entry.title}>
                <meta name="description" content={entry.data.meta_description || 'Your default description'} />
            </Head>
            {/* Your page content */}
        </>
    );
}
```

## SEO Best Practices

- **Length:** Keep meta descriptions between 150-160 characters
- **Unique:** Each page should have a unique meta description
- **Compelling:** Write descriptions that encourage clicks from search results
- **Keywords:** Include relevant keywords naturally
- **Call-to-action:** Consider adding a call-to-action when appropriate

## Additional SEO Fields (Future Enhancement)

Consider adding these fields to your blueprint for complete SEO control:
- `meta_title` - Custom title tag (different from page title)
- `og_title` - Open Graph title for social media
- `og_description` - Open Graph description
- `og_image` - Open Graph image
- `twitter_card` - Twitter card type
- `canonical_url` - Canonical URL for duplicate content

## Testing

To verify meta descriptions are working:
1. Run your dev server: `npm run dev`
2. Visit a page in your browser
3. View page source (Ctrl+U or Cmd+Option+U)
4. Look for: `<meta name="description" content="..."/>`

Or use browser DevTools:
1. Open DevTools (F12)
2. Go to Elements/Inspector tab
3. Look in the `<head>` section for the meta description tag

## Resources

- [Inertia.js Head Component](https://inertiajs.com/title-and-meta)
- [Statamic Blueprints](https://statamic.dev/blueprints)
- [Google's Meta Description Guidelines](https://developers.google.com/search/docs/appearance/snippet)
