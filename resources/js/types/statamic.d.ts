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
