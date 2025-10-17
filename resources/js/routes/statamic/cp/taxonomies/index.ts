import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
import blueprints from './blueprints'
import terms from './terms'
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:27
 * @route '/cp/taxonomies'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/taxonomies',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:27
 * @route '/cp/taxonomies'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:27
 * @route '/cp/taxonomies'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:27
 * @route '/cp/taxonomies'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:27
 * @route '/cp/taxonomies'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:27
 * @route '/cp/taxonomies'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:27
 * @route '/cp/taxonomies'
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
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:96
 * @route '/cp/taxonomies/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/taxonomies/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:96
 * @route '/cp/taxonomies/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:96
 * @route '/cp/taxonomies/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:96
 * @route '/cp/taxonomies/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:96
 * @route '/cp/taxonomies/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:96
 * @route '/cp/taxonomies/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:96
 * @route '/cp/taxonomies/create'
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
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:103
 * @route '/cp/taxonomies'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/taxonomies',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:103
 * @route '/cp/taxonomies'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:103
 * @route '/cp/taxonomies'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:103
 * @route '/cp/taxonomies'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:103
 * @route '/cp/taxonomies'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:55
 * @route '/cp/taxonomies/{taxonomy}'
 */
export const show = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/taxonomies/{taxonomy}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:55
 * @route '/cp/taxonomies/{taxonomy}'
 */
show.url = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { taxonomy: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    taxonomy: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        taxonomy: args.taxonomy,
                }

    return show.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:55
 * @route '/cp/taxonomies/{taxonomy}'
 */
show.get = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:55
 * @route '/cp/taxonomies/{taxonomy}'
 */
show.head = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:55
 * @route '/cp/taxonomies/{taxonomy}'
 */
    const showForm = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:55
 * @route '/cp/taxonomies/{taxonomy}'
 */
        showForm.get = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:55
 * @route '/cp/taxonomies/{taxonomy}'
 */
        showForm.head = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:133
 * @route '/cp/taxonomies/{taxonomy}/edit'
 */
export const edit = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/taxonomies/{taxonomy}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:133
 * @route '/cp/taxonomies/{taxonomy}/edit'
 */
edit.url = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { taxonomy: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    taxonomy: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        taxonomy: args.taxonomy,
                }

    return edit.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:133
 * @route '/cp/taxonomies/{taxonomy}/edit'
 */
edit.get = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:133
 * @route '/cp/taxonomies/{taxonomy}/edit'
 */
edit.head = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:133
 * @route '/cp/taxonomies/{taxonomy}/edit'
 */
    const editForm = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:133
 * @route '/cp/taxonomies/{taxonomy}/edit'
 */
        editForm.get = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:133
 * @route '/cp/taxonomies/{taxonomy}/edit'
 */
        editForm.head = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:161
 * @route '/cp/taxonomies/{taxonomy}'
 */
export const update = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/cp/taxonomies/{taxonomy}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:161
 * @route '/cp/taxonomies/{taxonomy}'
 */
update.url = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { taxonomy: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    taxonomy: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        taxonomy: args.taxonomy,
                }

    return update.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:161
 * @route '/cp/taxonomies/{taxonomy}'
 */
update.put = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:161
 * @route '/cp/taxonomies/{taxonomy}'
 */
update.patch = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:161
 * @route '/cp/taxonomies/{taxonomy}'
 */
    const updateForm = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:161
 * @route '/cp/taxonomies/{taxonomy}'
 */
        updateForm.put = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:161
 * @route '/cp/taxonomies/{taxonomy}'
 */
        updateForm.patch = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:233
 * @route '/cp/taxonomies/{taxonomy}'
 */
export const destroy = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/taxonomies/{taxonomy}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:233
 * @route '/cp/taxonomies/{taxonomy}'
 */
destroy.url = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { taxonomy: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    taxonomy: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        taxonomy: args.taxonomy,
                }

    return destroy.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:233
 * @route '/cp/taxonomies/{taxonomy}'
 */
destroy.delete = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:233
 * @route '/cp/taxonomies/{taxonomy}'
 */
    const destroyForm = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomiesController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomiesController.php:233
 * @route '/cp/taxonomies/{taxonomy}'
 */
        destroyForm.delete = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const taxonomies = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
blueprints: Object.assign(blueprints, blueprints),
terms: Object.assign(terms, terms),
}

export default taxonomies