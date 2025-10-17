import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
import blueprint from './blueprint'
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:22
 * @route '/cp/asset-containers'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/asset-containers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:22
 * @route '/cp/asset-containers'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:22
 * @route '/cp/asset-containers'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:22
 * @route '/cp/asset-containers'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:22
 * @route '/cp/asset-containers'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:22
 * @route '/cp/asset-containers'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:22
 * @route '/cp/asset-containers'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:112
 * @route '/cp/asset-containers/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/asset-containers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:112
 * @route '/cp/asset-containers/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:112
 * @route '/cp/asset-containers/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:112
 * @route '/cp/asset-containers/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:112
 * @route '/cp/asset-containers/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:112
 * @route '/cp/asset-containers/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:112
 * @route '/cp/asset-containers/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:131
 * @route '/cp/asset-containers'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/asset-containers',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:131
 * @route '/cp/asset-containers'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:131
 * @route '/cp/asset-containers'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:131
 * @route '/cp/asset-containers'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:131
 * @route '/cp/asset-containers'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:17
 * @route '/cp/asset-containers/{asset_container}'
 */
export const show = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/asset-containers/{asset_container}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:17
 * @route '/cp/asset-containers/{asset_container}'
 */
show.url = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{asset_container}', parsedArgs.asset_container.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:17
 * @route '/cp/asset-containers/{asset_container}'
 */
show.get = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:17
 * @route '/cp/asset-containers/{asset_container}'
 */
show.head = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:17
 * @route '/cp/asset-containers/{asset_container}'
 */
    const showForm = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:17
 * @route '/cp/asset-containers/{asset_container}'
 */
        showForm.get = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:17
 * @route '/cp/asset-containers/{asset_container}'
 */
        showForm.head = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:51
 * @route '/cp/asset-containers/{asset_container}/edit'
 */
export const edit = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/asset-containers/{asset_container}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:51
 * @route '/cp/asset-containers/{asset_container}/edit'
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
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:51
 * @route '/cp/asset-containers/{asset_container}/edit'
 */
edit.get = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:51
 * @route '/cp/asset-containers/{asset_container}/edit'
 */
edit.head = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:51
 * @route '/cp/asset-containers/{asset_container}/edit'
 */
    const editForm = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:51
 * @route '/cp/asset-containers/{asset_container}/edit'
 */
        editForm.get = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:51
 * @route '/cp/asset-containers/{asset_container}/edit'
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
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:83
 * @route '/cp/asset-containers/{asset_container}'
 */
export const update = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/cp/asset-containers/{asset_container}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:83
 * @route '/cp/asset-containers/{asset_container}'
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
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:83
 * @route '/cp/asset-containers/{asset_container}'
 */
update.put = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:83
 * @route '/cp/asset-containers/{asset_container}'
 */
update.patch = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:83
 * @route '/cp/asset-containers/{asset_container}'
 */
    const updateForm = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:83
 * @route '/cp/asset-containers/{asset_container}'
 */
        updateForm.put = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:83
 * @route '/cp/asset-containers/{asset_container}'
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
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:160
 * @route '/cp/asset-containers/{asset_container}'
 */
export const destroy = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/asset-containers/{asset_container}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:160
 * @route '/cp/asset-containers/{asset_container}'
 */
destroy.url = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{asset_container}', parsedArgs.asset_container.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:160
 * @route '/cp/asset-containers/{asset_container}'
 */
destroy.delete = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:160
 * @route '/cp/asset-containers/{asset_container}'
 */
    const destroyForm = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetContainersController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetContainersController.php:160
 * @route '/cp/asset-containers/{asset_container}'
 */
        destroyForm.delete = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const assetContainers = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
blueprint: Object.assign(blueprint, blueprint),
}

export default assetContainers