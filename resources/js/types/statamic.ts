/**
 * Statamic Entry type definition
 */
export interface StatamicEntry {
    id: string;
    title: string;
    slug: string;
    collection: string;
    url: string;
    permalink: string;
    published: boolean;
    status: string;
    date?: string;
    
    // All augmented field values
    content: Record<string, any>;
    
    // Raw field values
    data: Record<string, any>;
    
    // Blueprint information
    blueprint: {
        handle: string;
        title: string;
    };
    
    // Additional metadata
    meta: {
        last_modified?: string;
        locale: string;
        site: string;
    };
}

/**
 * Statamic Collection type definition
 */
export interface StatamicCollection {
    handle: string;
    title: string;
    url?: string;
}

/**
 * Statamic Field type
 */
export interface StatamicField {
    handle: string;
    type: string;
    display?: string;
    value: any;
}

/**
 * Block interface for dynamic block rendering
 */
export interface StatamicBlock {
    id: string;
    type: string;
    enabled: boolean;
    [key: string]: any; // Allow any additional properties
}

/**
 * Props interface for block components
 */
export interface BlockProps {
    block: StatamicBlock;
    [key: string]: any; // Allow any additional props
}

/**
 * Statamic Navigation Item interface
 */
export interface StatamicNavItem {
    id: string;
    title: string;
    url: string;
    children?: StatamicNavItem[];
    [key: string]: any; // Allow additional properties
}

/**
 * Statamic Navigation interface
 */
export interface StatamicNavigation {
    title: string;
    handle: string;
    tree: StatamicNavItem[];
    [key: string]: any; // Allow additional properties
}

/**
 * Navigation context interface for sharing navigation data
 */
export interface NavigationContext {
    main: StatamicNavigation | null;
    footer: StatamicNavigation | null;
    [key: string]: StatamicNavigation | null; // Allow additional navigation types
}