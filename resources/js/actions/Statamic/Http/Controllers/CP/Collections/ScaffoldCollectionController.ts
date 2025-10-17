import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:12
 * @route '/cp/collections/{collection}/scaffold'
 */
export const index = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/collections/{collection}/scaffold',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:12
 * @route '/cp/collections/{collection}/scaffold'
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
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:12
 * @route '/cp/collections/{collection}/scaffold'
 */
index.get = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:12
 * @route '/cp/collections/{collection}/scaffold'
 */
index.head = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:12
 * @route '/cp/collections/{collection}/scaffold'
 */
    const indexForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:12
 * @route '/cp/collections/{collection}/scaffold'
 */
        indexForm.get = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:12
 * @route '/cp/collections/{collection}/scaffold'
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
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:19
 * @route '/cp/collections/{collection}/scaffold'
 */
export const create = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(args, options),
    method: 'post',
})

create.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/scaffold',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:19
 * @route '/cp/collections/{collection}/scaffold'
 */
create.url = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:19
 * @route '/cp/collections/{collection}/scaffold'
 */
create.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:19
 * @route '/cp/collections/{collection}/scaffold'
 */
    const createForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: create.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:19
 * @route '/cp/collections/{collection}/scaffold'
 */
        createForm.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: create.url(args, options),
            method: 'post',
        })
    
    create.form = createForm
const ScaffoldCollectionController = { index, create }

export default ScaffoldCollectionController