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

interface EntryPageProps {
    entry: StatamicEntry;
    navigation: NavigationContext;
}

export default function Entry({ entry, navigation }: EntryPageProps) {
    return (
        <NavigationProvider navigation={navigation}>
            <Head title={entry.title} />

            <div className="bg-pattern">
                {/* Header */}
                <HeaderNavigation />

                {/* Main Content */}
                <main>
                    {/* Content Area */}
                    <div>
                        {/* Blocks Content */}
                        {(entry.data.blocks || entry.content.blocks) && (
                            <section>
                                <BlockRenderer blocks={(entry.data.blocks || entry.content.blocks) as StatamicBlock[]} />
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
