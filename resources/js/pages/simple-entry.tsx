import { Head } from '@inertiajs/react';
import { type StatamicEntry } from '@/types/statamic';

interface SimpleEntryPageProps {
    entry: StatamicEntry;
}

/**
 * Simple Entry Page - displays Statamic entry content without layout
 * Use this if you want a minimal page similar to welcome.tsx
 */
export default function SimpleEntry({ entry }: SimpleEntryPageProps) {
    return (
        <>
            <Head title={entry.title}>
                <meta name="description" content={entry.data.meta_description || entry.data.description || entry.data.excerpt || 'ExamLock - Secure examination and content protection platform'} />
            </Head>
            
            <div className="min-h-screen bg-white p-8 dark:bg-zinc-950">
                <div className="mx-auto max-w-4xl">
                    {/* Header */}
                    <header className="mb-12 text-center">
                        <h1 className="mb-4 text-5xl font-bold text-zinc-900 dark:text-zinc-50">
                            {entry.title}
                        </h1>
                        
                        {entry.data.excerpt && (
                            <p className="text-xl text-zinc-600 dark:text-zinc-400">
                                {entry.data.excerpt}
                            </p>
                        )}
                        
                        {entry.date && (
                            <time 
                                className="mt-4 block text-sm text-zinc-500"
                                dateTime={entry.date}
                            >
                                {new Date(entry.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                        )}
                    </header>

                    {/* Content */}
                    <article className="prose prose-lg prose-zinc mx-auto dark:prose-invert">
                        {entry.content.content && (
                            <div 
                                dangerouslySetInnerHTML={{ 
                                    __html: entry.content.content 
                                }} 
                            />
                        )}
                    </article>

                    {/* All Entry Data (for development) */}
                    {import.meta.env.DEV && (
                        <div className="mt-16 rounded-lg border border-dashed border-zinc-300 p-6 dark:border-zinc-700">
                            <h3 className="mb-4 text-lg font-semibold">
                                Available Entry Data:
                            </h3>
                            <div className="grid gap-4">
                                {Object.entries(entry.data).map(([key, value]) => (
                                    <div key={key} className="rounded bg-zinc-100 p-3 dark:bg-zinc-900">
                                        <div className="mb-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                            {key}:
                                        </div>
                                        <div className="text-sm text-zinc-600 dark:text-zinc-400">
                                            {typeof value === 'object' 
                                                ? JSON.stringify(value, null, 2)
                                                : String(value)
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
