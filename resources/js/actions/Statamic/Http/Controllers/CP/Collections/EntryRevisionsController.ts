import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:13
 * @route '/cp/collections/{collection}/entries/{entry}/revisions'
 */
export const index = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/collections/{collection}/entries/{entry}/revisions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:13
 * @route '/cp/collections/{collection}/entries/{entry}/revisions'
 */
index.url = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{entry}', parsedArgs.entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:13
 * @route '/cp/collections/{collection}/entries/{entry}/revisions'
 */
index.get = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:13
 * @route '/cp/collections/{collection}/entries/{entry}/revisions'
 */
index.head = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:13
 * @route '/cp/collections/{collection}/entries/{entry}/revisions'
 */
    const indexForm = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:13
 * @route '/cp/collections/{collection}/entries/{entry}/revisions'
 */
        indexForm.get = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:13
 * @route '/cp/collections/{collection}/entries/{entry}/revisions'
 */
        indexForm.head = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:40
 * @route '/cp/collections/{collection}/entries/{entry}/revisions'
 */
export const store = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/entries/{entry}/revisions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:40
 * @route '/cp/collections/{collection}/entries/{entry}/revisions'
 */
store.url = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{entry}', parsedArgs.entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:40
 * @route '/cp/collections/{collection}/entries/{entry}/revisions'
 */
store.post = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:40
 * @route '/cp/collections/{collection}/entries/{entry}/revisions'
 */
    const storeForm = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:40
 * @route '/cp/collections/{collection}/entries/{entry}/revisions'
 */
        storeForm.post = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:50
 * @route '/cp/collections/{collection}/entries/{entry}/revisions/{revision}'
 */
export const show = (args: { collection: string | number, entry: string | number, revision: string | number } | [collection: string | number, entry: string | number, revision: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/collections/{collection}/entries/{entry}/revisions/{revision}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:50
 * @route '/cp/collections/{collection}/entries/{entry}/revisions/{revision}'
 */
show.url = (args: { collection: string | number, entry: string | number, revision: string | number } | [collection: string | number, entry: string | number, revision: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    collection: args[0],
                    entry: args[1],
                    revision: args[2],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        collection: args.collection,
                                entry: args.entry,
                                revision: args.revision,
                }

    return show.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{entry}', parsedArgs.entry.toString())
            .replace('{revision}', parsedArgs.revision.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:50
 * @route '/cp/collections/{collection}/entries/{entry}/revisions/{revision}'
 */
show.get = (args: { collection: string | number, entry: string | number, revision: string | number } | [collection: string | number, entry: string | number, revision: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:50
 * @route '/cp/collections/{collection}/entries/{entry}/revisions/{revision}'
 */
show.head = (args: { collection: string | number, entry: string | number, revision: string | number } | [collection: string | number, entry: string | number, revision: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:50
 * @route '/cp/collections/{collection}/entries/{entry}/revisions/{revision}'
 */
    const showForm = (args: { collection: string | number, entry: string | number, revision: string | number } | [collection: string | number, entry: string | number, revision: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:50
 * @route '/cp/collections/{collection}/entries/{entry}/revisions/{revision}'
 */
        showForm.get = (args: { collection: string | number, entry: string | number, revision: string | number } | [collection: string | number, entry: string | number, revision: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryRevisionsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryRevisionsController.php:50
 * @route '/cp/collections/{collection}/entries/{entry}/revisions/{revision}'
 */
        showForm.head = (args: { collection: string | number, entry: string | number, revision: string | number } | [collection: string | number, entry: string | number, revision: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const EntryRevisionsController = { index, store, show }

export default EntryRevisionsController