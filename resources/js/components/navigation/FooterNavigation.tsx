import React from 'react';
import { Link } from '@inertiajs/react';
import { useFooterNavigation } from '@/components/NavigationProvider';
import StatamicNav from './StatamicNav';

interface FooterNavigationProps {
    className?: string;
}

export default function FooterNavigation({ className = '' }: FooterNavigationProps) {
    const footerNav = useFooterNavigation();

    // Debug logging to console
    React.useEffect(() => {
        if (import.meta.env.DEV) {
            console.log('🧭 Footer Navigation Data:', footerNav);
        }
    }, [footerNav]);

    if (!footerNav || !footerNav.tree || footerNav.tree.length === 0) {
        return null;
    }

    return (
        <footer className={`bg-zinc-900 text-zinc-300 ${className}`}>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                            {footerNav.title}
                        </h3>
                        <StatamicNav
                            items={footerNav.tree}
                            className="space-y-2"
                            itemClassName=""
                            linkClassName="text-sm text-zinc-300 hover:text-white transition-colors"
                            showChildren={true}
                            maxDepth={2}
                        />
                    </div>

                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-zinc-800 pt-8">
                    <p className="text-center text-sm text-zinc-400">
                        © {new Date().getFullYear()} . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
