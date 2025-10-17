# ExamLock Developer Guide

## Overview

This project combines **Statamic CMS** with **Laravel**, **Inertia.js**, and **React** to create a modern content management system with a beautiful frontend. This guide explains how everything works together.

## System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Statamic CP   │    │   Laravel API   │    │   React Frontend│
│                 │    │                 │    │                 │
│ • Content Mgmt  │───▶│ • Entry Routes  │───▶│ • Dynamic Pages │
│ • Navigation    │    │ • Data Transform│    │ • Block System  │
│ • Blocks        │    │ • Navigation    │    │ • Navigation    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Core Flow

1. **Content Creation**: Content is created in Statamic Control Panel (`/cp`)
2. **Data Processing**: Laravel controllers fetch and transform Statamic data
3. **Frontend Rendering**: React components render the data using Inertia.js
4. **Dynamic Blocks**: Content blocks are dynamically rendered based on type

---

## File Structure & Responsibilities

### Backend (Laravel + Statamic)

#### `app/Http/Controllers/StatamicEntryController.php`
**Purpose**: Main controller that handles Statamic entry requests

**Key Methods**:
- `show($collection, $slug)`: Displays a Statamic entry
- `transformEntry($entry)`: Converts Statamic entry to frontend-friendly format
- `getNavigationData()`: Fetches navigation from Statamic
- `transformNavigation($navigation)`: Converts navigation data
- `transformNavTree($tree)`: Processes navigation tree structure

**Data Flow**:
```
Request → Entry Lookup → Data Transform → Navigation Fetch → Inertia Render
```

**Example Output**:
```php
[
    'entry' => [
        'id' => 'example-page',
        'title' => 'Example Page',
        'content' => [...],
        'data' => [...],
        'blocks' => [...]
    ],
    'navigation' => [
        'main' => [...],
        'header' => [...]
    ]
]
```

#### `routes/web.php`
**Purpose**: Defines application routes

**Key Routes**:
- `/` → Homepage (serves `pages/home` entry)
- `/{collection}/{slug}` → Collection entries
- `/{slug}` → Root-level pages

**Route Priority**:
1. Static routes (dashboard, auth)
2. Collection routes (`/pages/about`)
3. Root routes (`/about`)

### Frontend (React + TypeScript)

#### `resources/js/types/statamic.ts`
**Purpose**: TypeScript interfaces for type safety

**Key Interfaces**:
```typescript
interface StatamicEntry {
    id: string;
    title: string;
    content: Record<string, any>;
    data: Record<string, any>;
    // ... more fields
}

interface StatamicBlock {
    id: string;
    type: string;
    enabled: boolean;
    // ... dynamic properties
}

interface StatamicNavigation {
    title: string;
    handle: string;
    tree: StatamicNavItem[];
}
```

#### `resources/js/pages/entry.tsx`
**Purpose**: Main page component for all Statamic entries

**Flow**:
```
Props (entry + navigation) → NavigationProvider → Layout → Content → Blocks
```

**Structure**:
```jsx
<NavigationProvider navigation={navigation}>
    <HeaderNavigation />
    <main>
        <BlockRenderer blocks={blocks} />
    </main>
    <FooterNavigation />
</NavigationProvider>
```

**Debug Output** (Console):
- Entry data
- Navigation data
- Available blocks

#### `resources/js/components/NavigationProvider.tsx`
**Purpose**: Context provider for sharing navigation data

**Hooks Available**:
- `useNavigation()`: All navigation data
- `useMainNavigation()`: Main/header navigation
- `useFooterNavigation()`: Footer navigation
- `useNavigationByHandle(handle)`: Specific navigation

#### `resources/js/components/BlockRenderer.tsx`
**Purpose**: Dynamically renders blocks based on type

**Block Registry**:
```typescript
const blockComponents = {
    header_description: HeaderDescription,
    text_block: TextBlock,
    quote_block: QuoteBlock,
    image_block: ImageBlock,
};
```

**Flow**:
```
Block Array → Type Check → Component Lookup → Render → Fallback (if unknown)
```

#### Navigation Components

##### `resources/js/components/navigation/HeaderNavigation.tsx`
**Purpose**: Main navigation header with mobile menu

**Features**:
- Responsive design
- Mobile hamburger menu
- Navigation tree rendering
- Console debug logging

##### `resources/js/components/navigation/FooterNavigation.tsx`
**Purpose**: Footer navigation component

**Features**:
- Footer navigation links
- Copyright information
- Console debug logging

##### `resources/js/components/navigation/StatamicNav.tsx`
**Purpose**: Core navigation rendering component

**Features**:
- Recursive tree rendering
- Configurable depth
- Custom styling support

#### Block Components

##### `resources/js/components/blocks/HeaderDescription.tsx`
**Purpose**: Renders header + description blocks

**Props**:
- `header`: Header text
- `description`: Description text

##### `resources/js/components/blocks/TextBlock.tsx`
**Purpose**: Renders rich text content

**Props**:
- `title`: Optional title
- `text`: HTML content

##### `resources/js/components/blocks/QuoteBlock.tsx`
**Purpose**: Renders styled quotes

**Props**:
- `quote`: Quote text
- `author`: Optional author

##### `resources/js/components/blocks/ImageBlock.tsx`
**Purpose**: Renders images with captions

**Props**:
- `src`: Image URL
- `alt`: Alt text
- `caption`: Optional caption

---

## Complete Request Flow

### Visual Flow Diagram
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           USER REQUEST FLOW                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. User visits page                                                        │
│     ↓                                                                       │
│  2. Laravel routes/web.php                                                  │
│     ↓                                                                       │
│  3. StatamicEntryController.php                                             │
│     ↓                                                                       │
│  4. Statamic data fetch & transform                                         │
│     ↓                                                                       │
│  5. Inertia.js renders entry.tsx                                           │
│     ↓                                                                       │
│  6. React components render                                                 │
│     ├── NavigationProvider                                                  │
│     ├── HeaderNavigation                                                    │
│     ├── BlockRenderer → Block Components                                    │
│     └── FooterNavigation                                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1. User Visits Page
```
User → http://localhost:8000/example
```

### 2. Laravel Route Resolution
```php
// routes/web.php
Route::get('/{slug}', function (string $slug) {
    // Try to find in 'pages' collection
    $entry = Entry::query()
        ->where('collection', 'pages')
        ->where('slug', $slug)
        ->first();
    
    return app(StatamicEntryController::class)->transformAndRender($entry);
});
```

### 3. Controller Processing
```php
// StatamicEntryController.php
public function transformAndRender(EntryModel $entry): Response
{
    $entryData = $this->transformEntry($entry);      // Transform entry
    $navigationData = $this->getNavigationData();    // Get navigation
    
    return Inertia::render('entry', [
        'entry' => $entryData,
        'navigation' => $navigationData,
    ]);
}
```

### 4. Data Transformation
```php
// Entry transformation
[
    'id' => 'example-page',
    'title' => 'Example Page',
    'content' => [...],  // Augmented content
    'data' => [...],     // Raw data
    'blocks' => [...]    // Block data
]

// Navigation transformation
[
    'main' => [
        'title' => 'Header',
        'handle' => 'header',
        'tree' => [
            [
                'id' => '...',
                'title' => 'Welcome Home',
                'url' => '/',
                'entry_data' => [...]
            ]
        ]
    ]
]
```

### 5. Frontend Rendering
```jsx
// entry.tsx
export default function Entry({ entry, navigation }) {
    return (
        <NavigationProvider navigation={navigation}>
            <HeaderNavigation />
            <main>
                <BlockRenderer blocks={entry.data.blocks} />
            </main>
            <FooterNavigation />
        </NavigationProvider>
    );
}
```

### 6. Block Rendering
```jsx
// BlockRenderer.tsx
{blocks.map((block) => {
    const BlockComponent = blockComponents[block.type];
    return <BlockComponent key={block.id} {...block} />;
})}
```

---

## Development Workflow

### Adding New Block Types

1. **Create Block Component**:
```bash
# Create new block component
touch resources/js/components/blocks/NewBlockType.tsx
```

2. **Implement Component**:
```tsx
// resources/js/components/blocks/NewBlockType.tsx
import React from 'react';
import { type BlockProps } from '@/types/statamic';

const NewBlockType = ({ block, customProp, ...props }: BlockProps) => {
    return (
        <div className="new-block-styles">
            <h3>{customProp}</h3>
            {/* Your block content */}
        </div>
    );
};

export default NewBlockType;
```

3. **Register Block**:
```tsx
// resources/js/components/BlockRenderer.tsx
import NewBlockType from './blocks/NewBlockType';

const blockComponents = {
    header_description: HeaderDescription,
    text_block: TextBlock,
    quote_block: QuoteBlock,
    image_block: ImageBlock,
    new_block_type: NewBlockType,  // Add here
};
```

4. **Use in Statamic**:
Create a block with `type: "new_block_type"` in Statamic CP

### Adding New Navigation

1. **Create in Statamic CP**:
   - Go to `/cp`
   - Navigate to "Navigation"
   - Create new navigation menu

2. **Access in Frontend**:
```tsx
// Use the navigation hook
const customNav = useNavigationByHandle('custom_nav_handle');
```

### Debugging

**Console Logs** (Development Only):
- 🔧 Statamic Entry Debug: Entry and navigation data
- 🧭 Header Navigation Data: Navigation tree
- 🧩 Block Data: Individual block information

**Server Logs**:
```bash
# View Laravel logs
tail -f storage/logs/laravel.log
```

---

## Key Configuration Files

### `config/statamic/`
- **stache.php**: Statamic data storage configuration
- **routes.php**: Statamic routing configuration
- **cp.php**: Control panel configuration

### `content/`
- **collections/**: Statamic content collections
- **navigation/**: Navigation menu definitions
- **trees/navigation/**: Navigation tree structures

### `resources/js/`
- **types/statamic.ts**: TypeScript definitions
- **components/**: React components
- **pages/**: Page components

---

## Common Tasks

### Creating a New Page
1. Go to `/cp`
2. Navigate to Collections → Pages
3. Click "Create Entry"
4. Fill in title, content, and blocks
5. Save and publish

### Adding Navigation Items
1. Go to `/cp`
2. Navigate to Navigation → Header
3. Add pages to navigation tree
4. Save

### Creating Custom Blocks
1. Create component in `resources/js/components/blocks/`
2. Register in `BlockRenderer.tsx`
3. Use in Statamic with matching type name

### Styling Components
All components use Tailwind CSS classes:
- `bg-zinc-50`: Light backgrounds
- `dark:bg-zinc-900`: Dark mode backgrounds
- `text-zinc-900`: Text colors
- `border-zinc-200`: Borders

---

## Troubleshooting

### Navigation Not Showing
1. Check if navigation exists in Statamic CP
2. Verify navigation handle matches
3. Check browser console for errors
4. Clear Statamic cache: `php artisan statamic:stache:clear`

### Blocks Not Rendering
1. Verify block type is registered in `BlockRenderer.tsx`
2. Check block data structure in console
3. Ensure block component accepts correct props

### Styling Issues
1. Check Tailwind CSS is compiled
2. Verify dark mode classes are applied
3. Check component className props

### Performance Issues
1. Check for unnecessary re-renders
2. Verify data is not being fetched multiple times
3. Use React DevTools to profile components

---

## Getting Started for New Developers

1. **Read this guide completely**
2. **Set up development environment**:
   ```bash
   composer install
   npm install
   php artisan serve
   npm run dev
   ```
3. **Explore the Control Panel**: Visit `/cp`
4. **Check console logs**: Open browser DevTools
5. **Create test content**: Add pages and blocks
6. **Modify components**: Start with styling changes
7. **Add new blocks**: Follow the block creation workflow

This system provides a powerful foundation for content management with modern frontend development practices.
