import React from 'react';
import { type BlockProps } from '@/types/statamic';

const ImageBlock = ({ block, src, alt, caption, ...props }: BlockProps) => {
    // Debug logging to console
    React.useEffect(() => {
        if (import.meta.env.DEV) {
            console.log('🧩 ImageBlock:', { block, src, alt, caption, ...props });
        }
    }, [block, src, alt, caption, props]);

    return (
        <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            {src && (
                <div className="overflow-hidden rounded-lg">
                    <img 
                        src={src} 
                        alt={alt || 'Block image'} 
                        className="h-auto w-full object-cover"
                        loading="lazy"
                    />
                </div>
            )}
            {caption && (
                <p className="mt-3 text-center text-sm italic text-zinc-600 dark:text-zinc-400">
                    {caption}
                </p>
            )}
        </div>
    );
};

export default ImageBlock;
