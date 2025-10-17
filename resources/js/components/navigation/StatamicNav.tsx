import React from 'react';
import { Link } from '@inertiajs/react';
import { type StatamicNavItem } from '@/types/statamic';

interface StatamicNavProps {
    items: StatamicNavItem[];
    className?: string;
    itemClassName?: string;
    linkClassName?: string;
    showChildren?: boolean;
    maxDepth?: number;
    currentDepth?: number;
}

export default function StatamicNav({
    items,
    className = '',
    itemClassName = '',
    linkClassName = '',
    showChildren = true,
    maxDepth = 3,
    currentDepth = 0,
}: StatamicNavProps) {
    // Don't render if we've exceeded max depth
    if (currentDepth >= maxDepth) {
        return null;
    }

    return (
        <ul className={`space-y-1 ${className}`}>
            {items.map((item) => (
                <StatamicNavItem
                    key={item.id}
                    item={item}
                    className={itemClassName}
                    linkClassName={linkClassName}
                    showChildren={showChildren}
                    maxDepth={maxDepth}
                    currentDepth={currentDepth + 1}
                />
            ))}
        </ul>
    );
}

interface StatamicNavItemProps {
    item: StatamicNavItem;
    className?: string;
    linkClassName?: string;
    showChildren?: boolean;
    maxDepth?: number;
    currentDepth?: number;
}

function StatamicNavItem({
    item,
    className = '',
    linkClassName = '',
    showChildren = true,
    maxDepth = 3,
    currentDepth = 0,
}: StatamicNavItemProps) {
    const hasChildren = item.children && item.children.length > 0;
    const shouldShowChildren = showChildren && hasChildren && currentDepth < maxDepth;

    return (
        <li className={className}>
            <Link
                href={item.url}
                className={`block px-3 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors ${linkClassName}`}
            >
                {item.title}
            </Link>
            
            {shouldShowChildren && (
                <StatamicNav
                    items={item.children!}
                    className="ml-4 mt-1"
                    itemClassName={className}
                    linkClassName={linkClassName}
                    showChildren={showChildren}
                    maxDepth={maxDepth}
                    currentDepth={currentDepth}
                />
            )}
        </li>
    );
}
