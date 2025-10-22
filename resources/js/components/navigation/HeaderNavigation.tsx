import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useMainNavigation } from '@/components/NavigationProvider';
import StatamicNav from './StatamicNav';

interface HeaderNavigationProps {
    className?: string;
}

export default function HeaderNavigation({ className = '' }: HeaderNavigationProps) {
    const mainNav = useMainNavigation();
    console.log('🧭 Header Navigation Data:', mainNav);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Debug logging to console
    React.useEffect(() => {
        if (import.meta.env.DEV) {
            console.log('🧭 Header Navigation Data:', mainNav);
        }
    }, [mainNav]);

    if (!mainNav || !mainNav.tree || mainNav.tree.length === 0) {
        return null;
    }

    return (
        <nav className={`bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 ${className}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-xl font-bold text-zinc-900 dark:text-zinc-100"
                        >
                            {mainNav.title || 'Site'}
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <StatamicNav
                                items={mainNav.tree}
                                className="flex space-x-4"
                                itemClassName=""
                                linkClassName="px-3 py-2 rounded-md text-sm font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                                showChildren={false} // Show children in dropdown instead
                                maxDepth={1}
                            />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <X className="block h-6 w-6" />
                            ) : (
                                <Menu className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            <StatamicNav
                                items={mainNav.tree}
                                className="space-y-1"
                                itemClassName=""
                                linkClassName="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-zinc-100 dark:hover:bg-zinc-800"
                                showChildren={true}
                                maxDepth={2}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
