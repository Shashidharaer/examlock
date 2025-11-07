# Navigation System Documentation

This directory contains navigation components for displaying Statamic navigation data in your React application.

## Overview

The navigation system provides:
- **NavigationProvider**: Context provider for sharing navigation data
- **Navigation Components**: Ready-to-use components for different navigation layouts
- **Type Safety**: Full TypeScript support with proper interfaces
- **Flexibility**: Easy to customize and extend

## Components

### NavigationProvider
The main context provider that makes navigation data available throughout your app.

```tsx
import { NavigationProvider } from '@/components/NavigationProvider';

// Wrap your app or specific pages
<NavigationProvider navigation={navigationData}>
  {/* Your app content */}
</NavigationProvider>
```

### StatamicNav
The core navigation component that renders navigation trees recursively.

```tsx
import StatamicNav from '@/components/navigation/StatamicNav';

<StatamicNav
  items={navigationTree}
  className="custom-nav-class"
  showChildren={true}
  maxDepth={3}
/>
```

### HeaderNavigation
A complete header navigation with mobile menu support.

```tsx
import HeaderNavigation from '@/components/navigation/HeaderNavigation';

<HeaderNavigation className="custom-header-class" />
```

### FooterNavigation
A footer navigation component with additional footer content.

```tsx
import FooterNavigation from '@/components/navigation/FooterNavigation';

<FooterNavigation className="custom-footer-class" />
```

### SidebarNavigation
A sidebar navigation component for layout sidebars.

```tsx
import SidebarNavigation from '@/components/navigation/SidebarNavigation';

<SidebarNavigation 
  title="Site Navigation"
  className="custom-sidebar-class" 
/>
```

## Hooks

### useNavigation()
Get all navigation data.

```tsx
import { useNavigation } from '@/components/NavigationProvider';

const navigation = useNavigation();
// Returns: { main: {...}, footer: {...}, ... }
```

### useMainNavigation()
Get the main navigation data.

```tsx
import { useMainNavigation } from '@/components/NavigationProvider';

const mainNav = useMainNavigation();
// Returns: { title: "...", handle: "main", tree: [...] }
```

### useFooterNavigation()
Get the footer navigation data.

```tsx
import { useFooterNavigation } from '@/components/NavigationProvider';

const footerNav = useFooterNavigation();
// Returns: { title: "...", handle: "footer", tree: [...] }
```

### useNavigationByHandle(handle)
Get navigation by specific handle.

```tsx
import { useNavigationByHandle } from '@/components/NavigationProvider';

const customNav = useNavigationByHandle('custom');
// Returns: { title: "...", handle: "custom", tree: [...] }
```

## Data Structure

Navigation data comes from Statamic and has this structure:

```typescript
interface StatamicNavigation {
    title: string;        // Navigation title
    handle: string;       // Navigation handle (e.g., "main", "footer")
    tree: StatamicNavItem[];  // Array of navigation items
}

interface StatamicNavItem {
    id: string;           // Unique item ID
    title: string;        // Display title
    url: string;          // Link URL
    children?: StatamicNavItem[];  // Child items (for nested menus)
    entry_data?: {        // Additional entry data (if linked to entry)
        id: string;
        slug: string;
        collection: string;
        published: boolean;
        data: Record<string, any>;
    };
}
```

## Setting Up Navigation in Statamic

### 1. Create Navigation Menus

In Statamic Control Panel:
1. Go to **Navigation**
2. Click **Create Navigation**
3. Set handle to `header` (or `main`)
4. Set title to "Main Navigation"
5. Add pages to the navigation tree
6. Save

### 2. Additional Navigation Menus

Create additional menus with different handles:
- `footer` - For footer navigation
- `sidebar` - For sidebar navigation
- `custom` - For any custom navigation

### 3. Navigation Structure

Statamic supports hierarchical navigation:
```
Main Navigation
├── Home
├── About
│   ├── Our Team
│   └── Our Story
├── Services
│   ├── Web Design
│   └── Development
└── Contact
```

## Customization

### Custom Styling

All components accept `className` props for custom styling:

```tsx
<HeaderNavigation className="bg-blue-600 text-white" />
<FooterNavigation className="bg-gray-900" />
<SidebarNavigation className="w-64 bg-gray-100" />
```

### Custom Navigation Component

Create your own navigation component:

```tsx
import { useMainNavigation } from '@/components/NavigationProvider';
import StatamicNav from '@/components/navigation/StatamicNav';

function CustomNavigation() {
    const mainNav = useMainNavigation();
    
    if (!mainNav) return null;
    
    return (
        <div className="custom-navigation">
            <StatamicNav
                items={mainNav.tree}
                className="flex space-x-6"
                linkClassName="text-blue-600 hover:text-blue-800"
                showChildren={false}
                maxDepth={1}
            />
        </div>
    );
}
```

## Development Features

- **Debug Information**: All components include debug information in development mode
- **Demo Component**: `NavigationDemo` shows all navigation components in action
- **Type Safety**: Full TypeScript support with proper interfaces
- **Error Handling**: Graceful handling of missing navigation data

## Example Usage in Entry Pages

Navigation data is automatically provided to all Statamic entry pages:

```tsx
// In index.tsx
export default function Entry({ entry, navigation }) {
    return (
        <NavigationProvider navigation={navigation}>
            <HeaderNavigation />
            <main>
                {/* Your entry content */}
            </main>
            <FooterNavigation />
        </NavigationProvider>
    );
}
```

## Troubleshooting

### No Navigation Data
- Ensure navigation menus are created in Statamic Control Panel
- Check that navigation handles match what you're trying to access
- Verify the `StatamicEntryController` is loading navigation data

### Navigation Not Displaying
- Check browser console for errors
- Ensure `NavigationProvider` wraps your components
- Verify navigation data structure matches expected format

### Custom Navigation Not Working
- Check that you're using the correct navigation handle
- Verify the navigation exists in Statamic
- Ensure proper TypeScript types are imported
