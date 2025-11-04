import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\PublishedEntriesController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/PublishedEntriesController.php:14
* @route '/cp/collections/{collection}/entries/{entry}/publish'
*/
export const store = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/entries/{entry}/publish',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\PublishedEntriesController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/PublishedEntriesController.php:14
* @route '/cp/collections/{collection}/entries/{entry}/publish'
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
* @see \Statamic\Http\Controllers\CP\Collections\PublishedEntriesController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/PublishedEntriesController.php:14
* @route '/cp/collections/{collection}/entries/{entry}/publish'
*/
store.post = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\PublishedEntriesController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/PublishedEntriesController.php:14
* @route '/cp/collections/{collection}/entries/{entry}/publish'
*/
const storeForm = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\PublishedEntriesController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/PublishedEntriesController.php:14
* @route '/cp/collections/{collection}/entries/{entry}/publish'
*/
storeForm.post = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Statamic\Http\Controllers\CP\Collections\PublishedEntriesController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/PublishedEntriesController.php:39
* @route '/cp/collections/{collection}/entries/{entry}/unpublish'
*/
export const destroy = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroy.url(args, options),
    method: 'post',
})

destroy.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/entries/{entry}/unpublish',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\PublishedEntriesController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/PublishedEntriesController.php:39
* @route '/cp/collections/{collection}/entries/{entry}/unpublish'
*/
destroy.url = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{entry}', parsedArgs.entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\PublishedEntriesController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/PublishedEntriesController.php:39
* @route '/cp/collections/{collection}/entries/{entry}/unpublish'
*/
destroy.post = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroy.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\PublishedEntriesController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/PublishedEntriesController.php:39
* @route '/cp/collections/{collection}/entries/{entry}/unpublish'
*/
const destroyForm = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\PublishedEntriesController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/PublishedEntriesController.php:39
* @route '/cp/collections/{collection}/entries/{entry}/unpublish'
*/
destroyForm.post = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, options),
    method: 'post',
})

destroy.form = destroyForm

const PublishedEntriesController = { store, destroy }

export default PublishedEntriesController