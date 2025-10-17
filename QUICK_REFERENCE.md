# Quick Reference Guide

## 🚀 Getting Started

### Development Setup
```bash
# Start Laravel server
php artisan serve

# Start frontend build process
npm run dev

# Visit the site
http://localhost:8000

# Visit Control Panel
http://localhost:8000/cp
```

## 📁 Key Files & Their Purpose

| File | Purpose | When to Edit |
|------|---------|--------------|
| `app/Http/Controllers/StatamicEntryController.php` | Backend data processing | Adding new data transformations |
| `routes/web.php` | URL routing | Adding new routes |
| `resources/js/pages/entry.tsx` | Main page layout | Changing overall page structure |
| `resources/js/components/BlockRenderer.tsx` | Block system core | Adding new block types |
| `resources/js/components/navigation/HeaderNavigation.tsx` | Header navigation | Styling header nav |
| `resources/js/components/navigation/FooterNavigation.tsx` | Footer navigation | Styling footer nav |
| `resources/js/components/blocks/*.tsx` | Individual block components | Creating new block types |
| `resources/js/types/statamic.ts` | TypeScript definitions | Adding new data types |

## 🔧 Common Tasks

### Create a New Page
1. Go to `/cp` → Collections → Pages → Create Entry
2. Fill in title, content, add blocks
3. Save and publish
4. Page accessible at `/{slug}`

### Add Navigation Item
1. Go to `/cp` → Navigation → Header
2. Add pages to navigation tree
3. Save
4. Appears in header navigation

### Create New Block Type
1. Create component: `resources/js/components/blocks/MyBlock.tsx`
2. Register in `BlockRenderer.tsx`:
   ```tsx
   const blockComponents = {
       // ... existing blocks
       my_block: MyBlock,
   };
   ```
3. Use in Statamic with `type: "my_block"`

### Debug Issues
- **Frontend**: Check browser console for 🔧 and 🧩 logs
- **Backend**: Check `storage/logs/laravel.log`
- **Navigation**: Verify navigation exists in Statamic CP
- **Blocks**: Check block type is registered

## 🎨 Styling Guidelines

### Tailwind Classes Used
- `bg-zinc-50` / `dark:bg-zinc-900` - Backgrounds
- `text-zinc-900` / `dark:text-zinc-100` - Text
- `border-zinc-200` / `dark:border-zinc-800` - Borders
- `rounded-lg` - Rounded corners
- `p-6` - Padding

### Component Structure
```jsx
<div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
    {/* Component content */}
</div>
```

## 📊 Data Flow Summary

```
Statamic CP → Laravel Controller → Data Transform → Inertia.js → React Components
```

### Entry Data Structure
```typescript
{
    entry: {
        id: string,
        title: string,
        content: {...},    // Augmented content
        data: {...},       // Raw data including blocks
        blocks: [...]      // Block array
    },
    navigation: {
        main: {...},       // Header navigation
        footer: {...}      // Footer navigation (if exists)
    }
}
```

### Block Data Structure
```typescript
{
    id: string,
    type: string,          // Block type (header_description, etc.)
    enabled: boolean,
    // ... dynamic properties based on block type
}
```

## 🐛 Troubleshooting

### Page Not Loading
- Check route exists in `routes/web.php`
- Verify entry exists in Statamic
- Check Laravel logs

### Navigation Not Showing
- Verify navigation exists in Statamic CP
- Check `getNavigationData()` in controller
- Clear Statamic cache: `php artisan statamic:stache:clear`

### Blocks Not Rendering
- Check block type is registered in `BlockRenderer.tsx`
- Verify block data structure in console
- Check block component props

### Styling Issues
- Ensure Tailwind CSS is compiled (`npm run dev`)
- Check dark mode classes
- Verify component className props

## 🔍 Debug Console Output

When `NODE_ENV=development`:
- 🔧 **Statamic Entry Debug**: Entry and navigation data
- 🧭 **Navigation Data**: Navigation tree information  
- 🧩 **Block Data**: Individual block information

## 📝 File Naming Conventions

- **Components**: PascalCase (`HeaderNavigation.tsx`)
- **Blocks**: PascalCase with descriptive names (`HeaderDescription.tsx`)
- **Types**: camelCase interfaces (`StatamicEntry`)
- **Controllers**: PascalCase with Controller suffix (`StatamicEntryController.php`)

## 🚦 Development Workflow

1. **Content**: Create in Statamic CP
2. **Styling**: Modify React components
3. **Logic**: Update Laravel controllers
4. **Types**: Add TypeScript interfaces as needed
5. **Debug**: Use console logs and Laravel logs
6. **Test**: Check both light and dark modes
