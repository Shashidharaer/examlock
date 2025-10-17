import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:20
 * @route '/cp/collections/{collection}/blueprints'
 */
export const index = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/collections/{collection}/blueprints',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:20
 * @route '/cp/collections/{collection}/blueprints'
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
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:20
 * @route '/cp/collections/{collection}/blueprints'
 */
index.get = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:20
 * @route '/cp/collections/{collection}/blueprints'
 */
index.head = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:20
 * @route '/cp/collections/{collection}/blueprints'
 */
    const indexForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:20
 * @route '/cp/collections/{collection}/blueprints'
 */
        indexForm.get = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:20
 * @route '/cp/collections/{collection}/blueprints'
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
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:58
 * @route '/cp/collections/{collection}/blueprints/create'
 */
export const create = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/collections/{collection}/blueprints/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:58
 * @route '/cp/collections/{collection}/blueprints/create'
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
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:58
 * @route '/cp/collections/{collection}/blueprints/create'
 */
create.get = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:58
 * @route '/cp/collections/{collection}/blueprints/create'
 */
create.head = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:58
 * @route '/cp/collections/{collection}/blueprints/create'
 */
    const createForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:58
 * @route '/cp/collections/{collection}/blueprints/create'
 */
        createForm.get = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:58
 * @route '/cp/collections/{collection}/blueprints/create'
 */
        createForm.head = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:65
 * @route '/cp/collections/{collection}/blueprints'
 */
export const store = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/blueprints',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:65
 * @route '/cp/collections/{collection}/blueprints'
 */
store.url = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:65
 * @route '/cp/collections/{collection}/blueprints'
 */
store.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:65
 * @route '/cp/collections/{collection}/blueprints'
 */
    const storeForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:65
 * @route '/cp/collections/{collection}/blueprints'
 */
        storeForm.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:0
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
export const show = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/collections/{collection}/blueprints/{blueprint}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:0
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
show.url = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    collection: args[0],
                    blueprint: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        collection: args.collection,
                                blueprint: args.blueprint,
                }

    return show.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{blueprint}', parsedArgs.blueprint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:0
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
show.get = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:0
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
show.head = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:0
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
    const showForm = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:0
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
        showForm.get = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:0
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
        showForm.head = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:37
 * @route '/cp/collections/{collection}/blueprints/{blueprint}/edit'
 */
export const edit = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/collections/{collection}/blueprints/{blueprint}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:37
 * @route '/cp/collections/{collection}/blueprints/{blueprint}/edit'
 */
edit.url = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    collection: args[0],
                    blueprint: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        collection: args.collection,
                                blueprint: args.blueprint,
                }

    return edit.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{blueprint}', parsedArgs.blueprint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:37
 * @route '/cp/collections/{collection}/blueprints/{blueprint}/edit'
 */
edit.get = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:37
 * @route '/cp/collections/{collection}/blueprints/{blueprint}/edit'
 */
edit.head = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:37
 * @route '/cp/collections/{collection}/blueprints/{blueprint}/edit'
 */
    const editForm = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:37
 * @route '/cp/collections/{collection}/blueprints/{blueprint}/edit'
 */
        editForm.get = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:37
 * @route '/cp/collections/{collection}/blueprints/{blueprint}/edit'
 */
        editForm.head = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:48
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
export const update = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/cp/collections/{collection}/blueprints/{blueprint}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:48
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
update.url = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    collection: args[0],
                    blueprint: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        collection: args.collection,
                                blueprint: args.blueprint,
                }

    return update.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{blueprint}', parsedArgs.blueprint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:48
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
update.put = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:48
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
update.patch = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:48
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
    const updateForm = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:48
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
        updateForm.put = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:48
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
        updateForm.patch = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:83
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
export const destroy = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/collections/{collection}/blueprints/{blueprint}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:83
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
destroy.url = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    collection: args[0],
                    blueprint: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        collection: args.collection,
                                blueprint: args.blueprint,
                }

    return destroy.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{blueprint}', parsedArgs.blueprint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:83
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
destroy.delete = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:83
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
    const destroyForm = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionBlueprintsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionBlueprintsController.php:83
 * @route '/cp/collections/{collection}/blueprints/{blueprint}'
 */
        destroyForm.delete = (args: { collection: string | number, blueprint: string | number } | [collection: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderCollectionBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderCollectionBlueprintsController.php:18
 * @route '/cp/collections/{collection}/blueprints/reorder'
 */
export const reorder = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/blueprints/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderCollectionBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderCollectionBlueprintsController.php:18
 * @route '/cp/collections/{collection}/blueprints/reorder'
 */
reorder.url = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return reorder.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderCollectionBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderCollectionBlueprintsController.php:18
 * @route '/cp/collections/{collection}/blueprints/reorder'
 */
reorder.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderCollectionBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderCollectionBlueprintsController.php:18
 * @route '/cp/collections/{collection}/blueprints/reorder'
 */
    const reorderForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reorder.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderCollectionBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderCollectionBlueprintsController.php:18
 * @route '/cp/collections/{collection}/blueprints/reorder'
 */
        reorderForm.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reorder.url(args, options),
            method: 'post',
        })
    
    reorder.form = reorderForm
const blueprints = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
reorder: Object.assign(reorder, reorder),
}

export default blueprints