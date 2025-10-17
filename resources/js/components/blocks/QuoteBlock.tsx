import React from 'react';
import { type BlockProps } from '@/types/statamic';

const QuoteBlock = ({ block, quote, author, ...props }: BlockProps) => {
    // Debug logging to console
    React.useEffect(() => {
        if (import.meta.env.DEV) {
            console.log('🧩 QuoteBlock:', { block, quote, author, ...props });
        }
    }, [block, quote, author, props]);

    return (
        <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:border-blue-400 dark:bg-blue-900/20">
            <blockquote className="text-lg italic text-zinc-900 dark:text-zinc-100">
                "{quote}"
            </blockquote>
            {author && (
                <footer className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                    — {author}
                </footer>
            )}
        </div>
    );
};

export default QuoteBlock;
