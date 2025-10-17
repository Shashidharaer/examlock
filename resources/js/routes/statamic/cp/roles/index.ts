import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:24
 * @route '/cp/roles'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:24
 * @route '/cp/roles'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:24
 * @route '/cp/roles'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:24
 * @route '/cp/roles'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:24
 * @route '/cp/roles'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:24
 * @route '/cp/roles'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:24
 * @route '/cp/roles'
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
* @see \Statamic\Http\Controllers\CP\Users\RolesController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:53
 * @route '/cp/roles/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/roles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:53
 * @route '/cp/roles/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:53
 * @route '/cp/roles/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:53
 * @route '/cp/roles/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:53
 * @route '/cp/roles/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:53
 * @route '/cp/roles/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:53
 * @route '/cp/roles/create'
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
* @see \Statamic\Http\Controllers\CP\Users\RolesController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:62
 * @route '/cp/roles'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/roles',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:62
 * @route '/cp/roles'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:62
 * @route '/cp/roles'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:62
 * @route '/cp/roles'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:62
 * @route '/cp/roles'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:0
 * @route '/cp/roles/{role}'
 */
export const show = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/roles/{role}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:0
 * @route '/cp/roles/{role}'
 */
show.url = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: args.role,
                }

    return show.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:0
 * @route '/cp/roles/{role}'
 */
show.get = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:0
 * @route '/cp/roles/{role}'
 */
show.head = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:0
 * @route '/cp/roles/{role}'
 */
    const showForm = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:0
 * @route '/cp/roles/{role}'
 */
        showForm.get = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:0
 * @route '/cp/roles/{role}'
 */
        showForm.head = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Users\RolesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:102
 * @route '/cp/roles/{role}/edit'
 */
export const edit = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/roles/{role}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:102
 * @route '/cp/roles/{role}/edit'
 */
edit.url = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: args.role,
                }

    return edit.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:102
 * @route '/cp/roles/{role}/edit'
 */
edit.get = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:102
 * @route '/cp/roles/{role}/edit'
 */
edit.head = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:102
 * @route '/cp/roles/{role}/edit'
 */
    const editForm = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:102
 * @route '/cp/roles/{role}/edit'
 */
        editForm.get = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:102
 * @route '/cp/roles/{role}/edit'
 */
        editForm.head = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Users\RolesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:117
 * @route '/cp/roles/{role}'
 */
export const update = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/cp/roles/{role}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:117
 * @route '/cp/roles/{role}'
 */
update.url = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: args.role,
                }

    return update.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:117
 * @route '/cp/roles/{role}'
 */
update.put = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:117
 * @route '/cp/roles/{role}'
 */
update.patch = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:117
 * @route '/cp/roles/{role}'
 */
    const updateForm = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:117
 * @route '/cp/roles/{role}'
 */
        updateForm.put = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:117
 * @route '/cp/roles/{role}'
 */
        updateForm.patch = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Statamic\Http\Controllers\CP\Users\RolesController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:149
 * @route '/cp/roles/{role}'
 */
export const destroy = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/roles/{role}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:149
 * @route '/cp/roles/{role}'
 */
destroy.url = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        role: args.role,
                }

    return destroy.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:149
 * @route '/cp/roles/{role}'
 */
destroy.delete = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:149
 * @route '/cp/roles/{role}'
 */
    const destroyForm = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Users\RolesController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/RolesController.php:149
 * @route '/cp/roles/{role}'
 */
        destroyForm.delete = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const roles = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default roles