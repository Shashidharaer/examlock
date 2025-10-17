import React from 'react';
import { useMainNavigation } from '@/components/NavigationProvider';
import StatamicNav from './StatamicNav';

interface SidebarNavigationProps {
    className?: string;
    title?: string;
}

export default function SidebarNavigation({ 
    className = '',
    title = 'Navigation'
}: SidebarNavigationProps) {
    const mainNav = useMainNavigation();

    if (!mainNav || !mainNav.tree || mainNav.tree.length === 0) {
        return null;
    }

    return (
        <aside className={`bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 ${className}`}>
            <div className="p-6">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    {title}
                </h2>
                
                <StatamicNav
                    items={mainNav.tree}
                    className="space-y-1"
                    itemClassName=""
                    linkClassName="block px-3 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
                    showChildren={true}
                    maxDepth={3}
                />
                
                {/* Debug info in development */}
                {import.meta.env.DEV && (
                    <details className="mt-8">
                        <summary className="cursor-pointer text-xs text-zinc-500">
                            🔧 Debug: Sidebar Navigation
                        </summary>
                        <pre className="mt-2 overflow-auto rounded bg-zinc-100 p-2 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                            {JSON.stringify(mainNav, null, 2)}
                        </pre>
                    </details>
                )}
            </div>
        </aside>
    );
}
