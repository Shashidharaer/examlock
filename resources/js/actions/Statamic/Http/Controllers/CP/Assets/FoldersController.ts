import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Assets\FoldersController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FoldersController.php:15
 * @route '/cp/asset-containers/{asset_container}/folders'
 */
export const store = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/asset-containers/{asset_container}/folders',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\FoldersController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FoldersController.php:15
 * @route '/cp/asset-containers/{asset_container}/folders'
 */
store.url = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { asset_container: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    asset_container: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        asset_container: args.asset_container,
                }

    return store.definition.url
            .replace('{asset_container}', parsedArgs.asset_container.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\FoldersController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FoldersController.php:15
 * @route '/cp/asset-containers/{asset_container}/folders'
 */
store.post = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\FoldersController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FoldersController.php:15
 * @route '/cp/asset-containers/{asset_container}/folders'
 */
    const storeForm = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\FoldersController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FoldersController.php:15
 * @route '/cp/asset-containers/{asset_container}/folders'
 */
        storeForm.post = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Statamic\Http\Controllers\CP\Assets\FoldersController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FoldersController.php:41
 * @route '/cp/asset-containers/{asset_container}/folders/{path}'
 */
export const update = (args: { asset_container: string | number, path: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/asset-containers/{asset_container}/folders/{path}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\FoldersController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FoldersController.php:41
 * @route '/cp/asset-containers/{asset_container}/folders/{path}'
 */
update.url = (args: { asset_container: string | number, path: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    asset_container: args[0],
                    path: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        asset_container: args.asset_container,
                                path: args.path,
                }

    return update.definition.url
            .replace('{asset_container}', parsedArgs.asset_container.toString())
            .replace('{path}', parsedArgs.path.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\FoldersController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FoldersController.php:41
 * @route '/cp/asset-containers/{asset_container}/folders/{path}'
 */
update.patch = (args: { asset_container: string | number, path: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\FoldersController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FoldersController.php:41
 * @route '/cp/asset-containers/{asset_container}/folders/{path}'
 */
    const updateForm = (args: { asset_container: string | number, path: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\FoldersController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FoldersController.php:41
 * @route '/cp/asset-containers/{asset_container}/folders/{path}'
 */
        updateForm.patch = (args: { asset_container: string | number, path: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const FoldersController = { store, update }

export default FoldersController