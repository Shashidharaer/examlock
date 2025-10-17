import React from 'react';
import { Head } from '@inertiajs/react';
import { type StatamicEntry, type StatamicBlock, type NavigationContext } from '@/types/statamic';
import BlockRenderer from '@/components/BlockRenderer';
import { NavigationProvider } from '@/components/NavigationProvider';
import HeaderNavigation from '@/components/navigation/HeaderNavigation';
import FooterNavigation from '@/components/navigation/FooterNavigation';

interface EntryPageProps {
    entry: StatamicEntry;
    navigation: NavigationContext;
}

export default function Entry({ entry, navigation }: EntryPageProps) {
    // Debug logging to console
    React.useEffect(() => {
        if (import.meta.env.DEV) {
            console.group('🔧 Statamic Entry Debug');
            console.log('Entry Data:', entry);
            console.log('Navigation Data:', navigation);
            console.log('Available Blocks:', entry.data.blocks || entry.content.blocks);
            console.groupEnd();
        }
    }, [entry, navigation]);

    return (
        <NavigationProvider navigation={navigation}>
            <Head title={entry.title} />
            
            <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col">
                {/* Header */}
                <HeaderNavigation />
                
                {/* Main Content */}
                <main className="flex-1">

                    {/* Content Area */}
                    <div className="mx-auto max-w-4xl px-6 py-12">

                        {/* Blocks Content */}
                        {(entry.data.blocks || entry.content.blocks) && (
                            <section>
                                <BlockRenderer 
                                    blocks={(entry.data.blocks || entry.content.blocks) as StatamicBlock[]} 
                                />
                            </section>
                        )}
                    </div>
                </main>
                
                {/* Footer */}
                <FooterNavigation />
            </div>
        </NavigationProvider>
    );
}
