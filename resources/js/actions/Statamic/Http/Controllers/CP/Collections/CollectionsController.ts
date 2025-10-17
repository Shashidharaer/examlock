import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:27
 * @route '/cp/collections'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/collections',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:27
 * @route '/cp/collections'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:27
 * @route '/cp/collections'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:27
 * @route '/cp/collections'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:27
 * @route '/cp/collections'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:27
 * @route '/cp/collections'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:27
 * @route '/cp/collections'
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
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:145
 * @route '/cp/collections/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/collections/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:145
 * @route '/cp/collections/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:145
 * @route '/cp/collections/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:145
 * @route '/cp/collections/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:145
 * @route '/cp/collections/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:145
 * @route '/cp/collections/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:145
 * @route '/cp/collections/create'
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
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:207
 * @route '/cp/collections'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/collections',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:207
 * @route '/cp/collections'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:207
 * @route '/cp/collections'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:207
 * @route '/cp/collections'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:207
 * @route '/cp/collections'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:78
 * @route '/cp/collections/{collection}'
 */
export const show = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/collections/{collection}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:78
 * @route '/cp/collections/{collection}'
 */
show.url = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:78
 * @route '/cp/collections/{collection}'
 */
show.get = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:78
 * @route '/cp/collections/{collection}'
 */
show.head = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:78
 * @route '/cp/collections/{collection}'
 */
    const showForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:78
 * @route '/cp/collections/{collection}'
 */
        showForm.get = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:78
 * @route '/cp/collections/{collection}'
 */
        showForm.head = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:159
 * @route '/cp/collections/{collection}/edit'
 */
export const edit = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/collections/{collection}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:159
 * @route '/cp/collections/{collection}/edit'
 */
edit.url = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:159
 * @route '/cp/collections/{collection}/edit'
 */
edit.get = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:159
 * @route '/cp/collections/{collection}/edit'
 */
edit.head = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:159
 * @route '/cp/collections/{collection}/edit'
 */
    const editForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:159
 * @route '/cp/collections/{collection}/edit'
 */
        editForm.get = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:159
 * @route '/cp/collections/{collection}/edit'
 */
        editForm.head = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:239
 * @route '/cp/collections/{collection}'
 */
export const update = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/cp/collections/{collection}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:239
 * @route '/cp/collections/{collection}'
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
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:239
 * @route '/cp/collections/{collection}'
 */
update.put = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:239
 * @route '/cp/collections/{collection}'
 */
update.patch = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:239
 * @route '/cp/collections/{collection}'
 */
    const updateForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:239
 * @route '/cp/collections/{collection}'
 */
        updateForm.put = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:239
 * @route '/cp/collections/{collection}'
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
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:341
 * @route '/cp/collections/{collection}'
 */
export const destroy = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/collections/{collection}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:341
 * @route '/cp/collections/{collection}'
 */
destroy.url = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:341
 * @route '/cp/collections/{collection}'
 */
destroy.delete = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:341
 * @route '/cp/collections/{collection}'
 */
    const destroyForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionsController.php:341
 * @route '/cp/collections/{collection}'
 */
        destroyForm.delete = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const CollectionsController = { index, create, store, show, edit, update, destroy }

export default CollectionsController