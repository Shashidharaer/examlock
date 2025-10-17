# Block System Documentation

This directory contains reusable block components for the Statamic entry system. Each block component is designed to render specific types of content blocks dynamically.

## How It Works

1. **BlockRenderer** (`../BlockRenderer.tsx`) - The main component that maps block types to their corresponding React components
2. **Block Components** - Individual components in this directory that handle specific block types
3. **Type Safety** - All components use TypeScript with proper interfaces defined in `@/types/statamic`

## Creating a New Block Component

### 1. Create the Component File

Create a new `.tsx` file in this directory following the naming convention: `{block_type}.tsx`

Example: `MyCustomBlock.tsx`

```tsx
import React from 'react';
import { type BlockProps } from '@/types/statamic';

const MyCustomBlock = ({ block, customProp1, customProp2, ...props }: BlockProps) => {
    return (
        <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-xl font-semibold">{customProp1}</h3>
            <p>{customProp2}</p>
            
            {/* Debug info in development */}
            {import.meta.env.DEV && (
                <details className="mt-4">
                    <summary className="cursor-pointer text-xs text-zinc-500">
                        🔧 Debug: My Custom Block Data
                    </summary>
                    <pre className="mt-2 overflow-auto rounded bg-zinc-100 p-2 text-xs dark:bg-zinc-800">
                        {JSON.stringify({ block, customProp1, customProp2, ...props }, null, 2)}
                    </pre>
                </details>
            )}
        </div>
    );
};

export default MyCustomBlock;
```

### 2. Register the Component

Add your component to the `BlockRenderer.tsx` file:

```tsx
// Import your new component
import MyCustomBlock from './blocks/MyCustomBlock';

// Add it to the registry
const blockComponents = {
    header_description: HeaderDescription,
    text_block: TextBlock,
    quote_block: QuoteBlock,
    image_block: ImageBlock,
    my_custom_block: MyCustomBlock, // Add your component here
} as const;
```

### 3. Use in Statamic

Your block will now be available for use in Statamic entries. The block type should match the key in the registry (e.g., `my_custom_block`).

## Available Block Components

### HeaderDescription
- **Type**: `header_description`
- **Props**: `header`, `description`
- **Purpose**: Displays a header with description text

### TextBlock
- **Type**: `text_block`
- **Props**: `text`, `title`
- **Purpose**: Renders rich text content with optional title

### QuoteBlock
- **Type**: `quote_block`
- **Props**: `quote`, `author`
- **Purpose**: Displays styled quotes with attribution

### ImageBlock
- **Type**: `image_block`
- **Props**: `src`, `alt`, `caption`
- **Purpose**: Renders images with optional captions

## Block Data Structure

Each block in Statamic should follow this structure:

```json
{
    "id": "unique-block-id",
    "type": "block_type_name",
    "enabled": true,
    "custom_prop1": "value1",
    "custom_prop2": "value2"
}
```

## Development Features

- **Debug Information**: All block components include debug information in development mode
- **Type Safety**: Full TypeScript support with proper interfaces
- **Fallback Handling**: Unknown block types show a helpful error message
- **Disabled Blocks**: Blocks with `enabled: false` are automatically skipped

## Styling Guidelines

- Use Tailwind CSS classes for consistent styling
- Follow the existing design patterns (rounded corners, borders, padding)
- Support both light and dark modes
- Include debug information in development builds
- Make components responsive and accessible
