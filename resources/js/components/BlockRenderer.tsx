import React from 'react';
import { type StatamicBlock, type BlockProps } from '@/types/statamic';

// Import all block components
import HeaderDescription from './blocks/HeaderDescription';
import TextBlock from './blocks/TextBlock';
import QuoteBlock from './blocks/QuoteBlock';
import ImageBlock from './blocks/ImageBlock';
import ExamLock from './blocks/products/ExamLock';

// Block component registry
const blockComponents = {
    header_description: HeaderDescription,
    text_block: TextBlock,
    quote_block: QuoteBlock,
    image_block: ImageBlock,
    // Product pages
    examlock: ExamLock,
    // Add more block components here as you create them
} as const;

type BlockType = keyof typeof blockComponents;

interface BlockRendererProps {
    blocks: StatamicBlock[];
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
    return (
        <div className="space-y-8">
            {blocks.map((block) => {
                // Skip disabled blocks
                if (!block.enabled) {
                    return null;
                }

                // Get the component for this block type
                const BlockComponent = blockComponents[block.type as BlockType];

                // If no component found for this block type, render a fallback
                if (!BlockComponent) {
                    console.warn(`No component found for block type: ${block.type}`);
                    return (
                        <div 
                            key={block.id} 
                            className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20"
                        >
                            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                                <span className="text-sm font-medium">⚠️ Unknown Block Type</span>
                            </div>
                            <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                                No component found for block type: <code>{block.type}</code>
                            </p>
                            {import.meta.env.DEV && (
                                <details className="mt-2">
                                    <summary className="cursor-pointer text-xs text-red-400">
                                        Show block data
                                    </summary>
                                    <pre className="mt-1 overflow-auto text-xs">
                                        {JSON.stringify(block, null, 2)}
                                    </pre>
                                </details>
                            )}
                        </div>
                    );
                }

                // Render the block component
                return (
                    <BlockComponent 
                        key={block.id} 
                        block={block}
                        {...block} // Spread all block properties as props
                    />
                );
            })}
        </div>
    );
}

// Helper function to get available block types (useful for debugging)
export function getAvailableBlockTypes(): string[] {
    return Object.keys(blockComponents);
}

// Helper function to check if a block type is supported
export function isBlockTypeSupported(blockType: string): boolean {
    return blockType in blockComponents;
}
