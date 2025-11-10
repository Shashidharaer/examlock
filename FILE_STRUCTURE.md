# File Structure Overview

## 📂 Project Root Structure

```
examlock/
├── 📁 app/                          # Laravel Application
│   ├── 📁 Http/
│   │   └── 📁 Controllers/
│   │       └── 📄 StatamicEntryController.php    # Main entry controller
├── 📁 config/                       # Configuration files
│   └── 📁 statamic/                 # Statamic configuration
├── 📁 content/                      # Statamic content
│   ├── 📁 collections/              # Content collections
│   │   └── 📁 pages/                # Pages collection
│   │       ├── 📄 home.md           # Homepage content
│   │       └── 📄 example.md        # Example page content
│   └── 📁 navigation/               # Navigation definitions
│       └── 📄 header.yaml           # Header navigation
├── 📁 routes/
│   └── 📄 web.php                   # Application routes
└── 📁 resources/
    └── 📁 js/                       # Frontend (React/TypeScript)
        ├── 📁 components/           # React components
        │   ├── 📄 BlockRenderer.tsx # Block system core
        │   ├── 📄 NavigationProvider.tsx # Navigation context
        │   ├── 📁 blocks/           # Block components
        │   │   ├── 📄 HeaderDescription.tsx
        │   │   ├── 📄 TextBlock.tsx
        │   │   ├── 📄 QuoteBlock.tsx
        │   │   └── 📄 ImageBlock.tsx
        │   └── 📁 navigation/       # Navigation components
        │       ├── 📄 HeaderNavigation.tsx
        │       ├── 📄 FooterNavigation.tsx
        │       └── 📄 StatamicNav.tsx
        ├── 📁 pages/                # Page components
        │   └── 📄 index.tsx         # Main entry page
        └── 📁 types/                # TypeScript definitions
            └── 📄 statamic.ts       # Statamic type definitions
```

## 🔍 Detailed File Descriptions

### Backend Files

#### `app/Http/Controllers/StatamicEntryController.php`
**Purpose**: Main controller handling Statamic entry requests

**Key Methods**:
- `show($collection, $slug)` - Display entry
- `transformEntry($entry)` - Convert entry data
- `getNavigationData()` - Fetch navigation
- `transformNavigation($navigation)` - Process navigation

**Data Flow**:
```
Request → Entry Lookup → Transform → Navigation → Inertia Render
```

#### `routes/web.php`
**Purpose**: Define application routes

**Routes**:
- `/` → Homepage
- `/{collection}/{slug}` → Collection entries  
- `/{slug}` → Root-level pages

### Frontend Files

#### `resources/js/pages/index.tsx`
**Purpose**: Main page component for all entries

**Structure**:
```jsx
<NavigationProvider>
    <HeaderNavigation />
    <main>
        <BlockRenderer blocks={blocks} />
    </main>
    <FooterNavigation />
</NavigationProvider>
```

#### `resources/js/components/BlockRenderer.tsx`
**Purpose**: Dynamic block rendering system

**Block Registry**:
```typescript
const blockComponents = {
    header_description: HeaderDescription,
    text_block: TextBlock,
    quote_block: QuoteBlock,
    image_block: ImageBlock,
};
```

#### `resources/js/components/NavigationProvider.tsx`
**Purpose**: Navigation context and hooks

**Hooks**:
- `useNavigation()` - All navigation
- `useMainNavigation()` - Header navigation
- `useFooterNavigation()` - Footer navigation

#### Block Components

##### `resources/js/components/blocks/HeaderDescription.tsx`
**Props**: `header`, `description`
**Purpose**: Header with description text

##### `resources/js/components/blocks/TextBlock.tsx`
**Props**: `title`, `text`
**Purpose**: Rich text content with optional title

##### `resources/js/components/blocks/QuoteBlock.tsx`
**Props**: `quote`, `author`
**Purpose**: Styled quote with attribution

##### `resources/js/components/blocks/ImageBlock.tsx`
**Props**: `src`, `alt`, `caption`
**Purpose**: Image with optional caption

#### Navigation Components

##### `resources/js/components/navigation/HeaderNavigation.tsx`
**Features**: Responsive header with mobile menu
**Data**: Uses `useMainNavigation()` hook

##### `resources/js/components/navigation/FooterNavigation.tsx`
**Features**: Footer navigation with copyright
**Data**: Uses `useFooterNavigation()` hook

##### `resources/js/components/navigation/StatamicNav.tsx`
**Features**: Recursive navigation tree rendering
**Props**: `items`, `showChildren`, `maxDepth`

#### `resources/js/types/statamic.ts`
**Purpose**: TypeScript interfaces for type safety

**Key Interfaces**:
- `StatamicEntry` - Entry data structure
- `StatamicBlock` - Block data structure
- `StatamicNavigation` - Navigation data structure
- `BlockProps` - Block component props

### Content Files

#### `content/collections/pages/`
**Purpose**: Statamic page content

**Files**:
- `home.md` - Homepage content
- `example.md` - Example page with blocks

#### `content/navigation/header.yaml`
**Purpose**: Header navigation definition

**Structure**:
```yaml
title: Header
collections:
  - pages
```

#### `content/trees/navigation/header.yaml`
**Purpose**: Navigation tree structure

**Structure**:
```yaml
tree:
  - id: unique-id
    entry: entry-id
  - id: another-id
    entry: another-entry-id
```

## 🔄 Data Flow Through Files

### Request Flow
```
1. routes/web.php → Route matching
2. StatamicEntryController.php → Data processing
3. index.tsx → Page rendering
4. BlockRenderer.tsx → Block processing
5. Block components → Individual rendering
```

### Navigation Flow
```
1. StatamicEntryController.php → getNavigationData()
2. NavigationProvider.tsx → Context setup
3. HeaderNavigation.tsx → useMainNavigation()
4. StatamicNav.tsx → Tree rendering
```

### Block Flow
```
1. StatamicEntryController.php → transformEntry()
2. index.tsx → Block data passed
3. BlockRenderer.tsx → Type mapping
4. Block components → Individual rendering
```

## 📝 File Modification Guide

### When to Edit Each File

#### Adding New Features
- **New block type**: Create in `components/blocks/` + register in `BlockRenderer.tsx`
- **New navigation**: Add to Statamic CP + access via hooks
- **New data fields**: Update `types/statamic.ts` + controller transforms

#### Styling Changes
- **Overall layout**: `pages/index.tsx`
- **Navigation styling**: `navigation/*.tsx` files
- **Block styling**: `blocks/*.tsx` files

#### Backend Changes
- **Data processing**: `StatamicEntryController.php`
- **New routes**: `routes/web.php`
- **Content structure**: Statamic CP

### File Dependencies

```
```
StatamicEntryController.php
    ↓ (provides data)
index.tsx
    ↓ (uses)
NavigationProvider.tsx + BlockRenderer.tsx
```
    ↓ (renders)
Navigation components + Block components
```

## 🚨 Important Notes

- **Debug Info**: All debug data goes to browser console (development only)
- **Type Safety**: All components use TypeScript interfaces
- **Responsive**: All components support mobile/desktop
- **Dark Mode**: All components support light/dark themes
- **Performance**: Blocks are rendered dynamically based on type
