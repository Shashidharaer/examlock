import BlockRenderer from '@/components/BlockRenderer';
import { NavigationProvider } from '@/components/NavigationProvider';
import FooterNavigation from '@/components/navigation/FooterNavigation';
import HeaderNavigation from '@/components/navigation/HeaderNavigation';
import {
    type NavigationContext,
    type StatamicBlock,
    type StatamicEntry,
} from '@/types/statamic';
import { Head } from '@inertiajs/react';
import React from 'react';

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
            console.log(
                'Available Blocks:',
                entry.data.blocks || entry.content.blocks,
            );
            console.groupEnd();
        }
    }, [entry, navigation]);

    return (
        <NavigationProvider navigation={navigation}>
            <Head title={entry.title} />

            <div className="bg-pattern">
                {/* Header */}
                <HeaderNavigation />

                {/* Main Content */}
                <main className="mx-auto max-w-7xl">
                    {/* Content Area */}
                    <div>
                        {/* Blocks Content */}
                        {(entry.data.blocks || entry.content.blocks) && (
                            <section>
                                <BlockRenderer
                                    blocks={
                                        (entry.data.blocks ||
                                            entry.content
                                                .blocks) as StatamicBlock[]
                                    }
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
