import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionTreeController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionTreeController.php:17
 * @route '/cp/collections/{collection}/tree'
 */
export const index = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/collections/{collection}/tree',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionTreeController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionTreeController.php:17
 * @route '/cp/collections/{collection}/tree'
 */
index.url = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { collection: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    collection: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        collection: args.collection,
                }

    return index.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionTreeController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionTreeController.php:17
 * @route '/cp/collections/{collection}/tree'
 */
index.get = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionTreeController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionTreeController.php:17
 * @route '/cp/collections/{collection}/tree'
 */
index.head = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionTreeController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionTreeController.php:17
 * @route '/cp/collections/{collection}/tree'
 */
    const indexForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionTreeController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionTreeController.php:17
 * @route '/cp/collections/{collection}/tree'
 */
        indexForm.get = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionTreeController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionTreeController.php:17
 * @route '/cp/collections/{collection}/tree'
 */
        indexForm.head = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Collections\CollectionTreeController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionTreeController.php:30
 * @route '/cp/collections/{collection}/tree'
 */
export const update = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/collections/{collection}/tree',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionTreeController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionTreeController.php:30
 * @route '/cp/collections/{collection}/tree'
 */
update.url = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { collection: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    collection: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        collection: args.collection,
                }

    return update.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionTreeController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionTreeController.php:30
 * @route '/cp/collections/{collection}/tree'
 */
update.patch = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionTreeController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionTreeController.php:30
 * @route '/cp/collections/{collection}/tree'
 */
    const updateForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionTreeController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionTreeController.php:30
 * @route '/cp/collections/{collection}/tree'
 */
        updateForm.patch = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const CollectionTreeController = { index, update }

export default CollectionTreeController