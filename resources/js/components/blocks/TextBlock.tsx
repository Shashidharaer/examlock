import React from 'react';
import { type BlockProps } from '@/types/statamic';

const TextBlock = ({ block, text, title, ...props }: BlockProps) => {
    // Debug logging to console
    React.useEffect(() => {
        if (import.meta.env.DEV) {
            console.log('🧩 TextBlock:', { block, text, title, ...props });
        }
    }, [block, text, title, props]);

    return (
        <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            {title && (
                <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {title}
                </h3>
            )}
            {text && (
                <div 
                    className="prose prose-zinc dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            )}
        </div>
    );
};

export default TextBlock;
