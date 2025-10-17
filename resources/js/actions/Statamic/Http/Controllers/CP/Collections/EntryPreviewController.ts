import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:13
 * @route '/cp/collections/{collection}/entries/create/{site}/preview'
 */
export const create = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(args, options),
    method: 'post',
})

create.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/entries/create/{site}/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:13
 * @route '/cp/collections/{collection}/entries/create/{site}/preview'
 */
create.url = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    collection: args[0],
                    site: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        collection: args.collection,
                                site: args.site,
                }

    return create.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{site}', parsedArgs.site.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:13
 * @route '/cp/collections/{collection}/entries/create/{site}/preview'
 */
create.post = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:13
 * @route '/cp/collections/{collection}/entries/create/{site}/preview'
 */
    const createForm = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: create.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:13
 * @route '/cp/collections/{collection}/entries/create/{site}/preview'
 */
        createForm.post = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: create.url(args, options),
            method: 'post',
        })
    
    create.form = createForm
/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:18
 * @route '/cp/collections/{collection}/entries/{entry}/preview'
 */
export const edit = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: edit.url(args, options),
    method: 'post',
})

edit.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/entries/{entry}/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:18
 * @route '/cp/collections/{collection}/entries/{entry}/preview'
 */
edit.url = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    collection: args[0],
                    entry: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        collection: args.collection,
                                entry: args.entry,
                }

    return edit.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{entry}', parsedArgs.entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:18
 * @route '/cp/collections/{collection}/entries/{entry}/preview'
 */
edit.post = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: edit.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:18
 * @route '/cp/collections/{collection}/entries/{entry}/preview'
 */
    const editForm = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: edit.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:18
 * @route '/cp/collections/{collection}/entries/{entry}/preview'
 */
        editForm.post = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: edit.url(args, options),
            method: 'post',
        })
    
    edit.form = editForm
/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:13
 * @route '/cp/collections/{collection}/entries/{entry}/preview'
 */
export const show = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/collections/{collection}/entries/{entry}/preview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:13
 * @route '/cp/collections/{collection}/entries/{entry}/preview'
 */
show.url = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    collection: args[0],
                    entry: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        collection: args.collection,
                                entry: args.entry,
                }

    return show.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{entry}', parsedArgs.entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:13
 * @route '/cp/collections/{collection}/entries/{entry}/preview'
 */
show.get = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:13
 * @route '/cp/collections/{collection}/entries/{entry}/preview'
 */
show.head = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:13
 * @route '/cp/collections/{collection}/entries/{entry}/preview'
 */
    const showForm = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:13
 * @route '/cp/collections/{collection}/entries/{entry}/preview'
 */
        showForm.get = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryPreviewController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryPreviewController.php:13
 * @route '/cp/collections/{collection}/entries/{entry}/preview'
 */
        showForm.head = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const EntryPreviewController = { create, edit, show }

export default EntryPreviewController