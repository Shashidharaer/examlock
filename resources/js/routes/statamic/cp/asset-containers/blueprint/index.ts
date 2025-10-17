import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainerBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainerBlueprintController.php:18
 * @route '/cp/asset-containers/{asset_container}/blueprint'
 */
export const edit = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/asset-containers/{asset_container}/blueprint',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainerBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainerBlueprintController.php:18
 * @route '/cp/asset-containers/{asset_container}/blueprint'
 */
edit.url = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{asset_container}', parsedArgs.asset_container.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainerBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainerBlueprintController.php:18
 * @route '/cp/asset-containers/{asset_container}/blueprint'
 */
edit.get = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainerBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainerBlueprintController.php:18
 * @route '/cp/asset-containers/{asset_container}/blueprint'
 */
edit.head = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainerBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainerBlueprintController.php:18
 * @route '/cp/asset-containers/{asset_container}/blueprint'
 */
    const editForm = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainerBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainerBlueprintController.php:18
 * @route '/cp/asset-containers/{asset_container}/blueprint'
 */
        editForm.get = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainerBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainerBlueprintController.php:18
 * @route '/cp/asset-containers/{asset_container}/blueprint'
 */
        editForm.head = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainerBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainerBlueprintController.php:29
 * @route '/cp/asset-containers/{asset_container}/blueprint'
 */
export const update = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/asset-containers/{asset_container}/blueprint',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainerBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainerBlueprintController.php:29
 * @route '/cp/asset-containers/{asset_container}/blueprint'
 */
update.url = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{asset_container}', parsedArgs.asset_container.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainerBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainerBlueprintController.php:29
 * @route '/cp/asset-containers/{asset_container}/blueprint'
 */
update.patch = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainerBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainerBlueprintController.php:29
 * @route '/cp/asset-containers/{asset_container}/blueprint'
 */
    const updateForm = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainerBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainerBlueprintController.php:29
 * @route '/cp/asset-containers/{asset_container}/blueprint'
 */
        updateForm.patch = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const blueprint = {
    edit: Object.assign(edit, edit),
update: Object.assign(update, update),
}

export default blueprint