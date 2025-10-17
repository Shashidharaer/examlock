import React from 'react';
import { type BlockProps } from '@/types/statamic';

const HeaderDescription = ({ block, header, description, ...props }: BlockProps) => {
    // Debug logging to console
    React.useEffect(() => {
        if (import.meta.env.DEV) {
            console.log('🧩 HeaderDescription Block:', { block, header, description, ...props });
        }
    }, [block, header, description, props]);

    return (
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            {header && (
                <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {header}
                </h2>
            )}
            {description && (
                <p className="text-zinc-700 dark:text-zinc-300">
                    {description}
                </p>
            )}
            
        </div>
    );
};

export default HeaderDescription;