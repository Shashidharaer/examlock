import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:25
 * @route '/cp/assets'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/assets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:25
 * @route '/cp/assets'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:25
 * @route '/cp/assets'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:25
 * @route '/cp/assets'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:25
 * @route '/cp/assets'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:25
 * @route '/cp/assets'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:25
 * @route '/cp/assets'
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
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:0
 * @route '/cp/assets/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/assets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:0
 * @route '/cp/assets/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:0
 * @route '/cp/assets/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:0
 * @route '/cp/assets/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:0
 * @route '/cp/assets/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:0
 * @route '/cp/assets/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:0
 * @route '/cp/assets/create'
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
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:72
 * @route '/cp/assets'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/assets',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:72
 * @route '/cp/assets'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:72
 * @route '/cp/assets'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:72
 * @route '/cp/assets'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:72
 * @route '/cp/assets'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:36
 * @route '/cp/assets/{encoded_asset}'
 */
export const show = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/assets/{encoded_asset}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:36
 * @route '/cp/assets/{encoded_asset}'
 */
show.url = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { encoded_asset: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    encoded_asset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        encoded_asset: args.encoded_asset,
                }

    return show.definition.url
            .replace('{encoded_asset}', parsedArgs.encoded_asset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:36
 * @route '/cp/assets/{encoded_asset}'
 */
show.get = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:36
 * @route '/cp/assets/{encoded_asset}'
 */
show.head = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:36
 * @route '/cp/assets/{encoded_asset}'
 */
    const showForm = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:36
 * @route '/cp/assets/{encoded_asset}'
 */
        showForm.get = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:36
 * @route '/cp/assets/{encoded_asset}'
 */
        showForm.head = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:0
 * @route '/cp/assets/{encoded_asset}/edit'
 */
export const edit = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/assets/{encoded_asset}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:0
 * @route '/cp/assets/{encoded_asset}/edit'
 */
edit.url = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { encoded_asset: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    encoded_asset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        encoded_asset: args.encoded_asset,
                }

    return edit.definition.url
            .replace('{encoded_asset}', parsedArgs.encoded_asset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:0
 * @route '/cp/assets/{encoded_asset}/edit'
 */
edit.get = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:0
 * @route '/cp/assets/{encoded_asset}/edit'
 */
edit.head = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:0
 * @route '/cp/assets/{encoded_asset}/edit'
 */
    const editForm = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:0
 * @route '/cp/assets/{encoded_asset}/edit'
 */
        editForm.get = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:0
 * @route '/cp/assets/{encoded_asset}/edit'
 */
        editForm.head = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:45
 * @route '/cp/assets/{encoded_asset}'
 */
export const update = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/cp/assets/{encoded_asset}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:45
 * @route '/cp/assets/{encoded_asset}'
 */
update.url = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { encoded_asset: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    encoded_asset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        encoded_asset: args.encoded_asset,
                }

    return update.definition.url
            .replace('{encoded_asset}', parsedArgs.encoded_asset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:45
 * @route '/cp/assets/{encoded_asset}'
 */
update.put = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:45
 * @route '/cp/assets/{encoded_asset}'
 */
update.patch = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:45
 * @route '/cp/assets/{encoded_asset}'
 */
    const updateForm = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:45
 * @route '/cp/assets/{encoded_asset}'
 */
        updateForm.put = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:45
 * @route '/cp/assets/{encoded_asset}'
 */
        updateForm.patch = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::download
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:123
 * @route '/cp/assets/{encoded_asset}/download'
 */
export const download = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/cp/assets/{encoded_asset}/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::download
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:123
 * @route '/cp/assets/{encoded_asset}/download'
 */
download.url = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { encoded_asset: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    encoded_asset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        encoded_asset: args.encoded_asset,
                }

    return download.definition.url
            .replace('{encoded_asset}', parsedArgs.encoded_asset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::download
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:123
 * @route '/cp/assets/{encoded_asset}/download'
 */
download.get = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::download
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:123
 * @route '/cp/assets/{encoded_asset}/download'
 */
download.head = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::download
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:123
 * @route '/cp/assets/{encoded_asset}/download'
 */
    const downloadForm = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: download.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::download
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:123
 * @route '/cp/assets/{encoded_asset}/download'
 */
        downloadForm.get = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: download.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Assets\AssetsController::download
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/AssetsController.php:123
 * @route '/cp/assets/{encoded_asset}/download'
 */
        downloadForm.head = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: download.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    download.form = downloadForm
const AssetsController = { index, create, store, show, edit, update, download }

export default AssetsController