import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:165
 * @route '/cp/fields/fieldsets/{fieldset}/reset'
 */
export const reset = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: reset.url(args, options),
    method: 'delete',
})

reset.definition = {
    methods: ["delete"],
    url: '/cp/fields/fieldsets/{fieldset}/reset',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:165
 * @route '/cp/fields/fieldsets/{fieldset}/reset'
 */
reset.url = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fieldset: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    fieldset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fieldset: args.fieldset,
                }

    return reset.definition.url
            .replace('{fieldset}', parsedArgs.fieldset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:165
 * @route '/cp/fields/fieldsets/{fieldset}/reset'
 */
reset.delete = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: reset.url(args, options),
    method: 'delete',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:165
 * @route '/cp/fields/fieldsets/{fieldset}/reset'
 */
    const resetForm = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reset.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:165
 * @route '/cp/fields/fieldsets/{fieldset}/reset'
 */
        resetForm.delete = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reset.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    reset.form = resetForm
/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:24
 * @route '/cp/fields/fieldsets'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/fields/fieldsets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:24
 * @route '/cp/fields/fieldsets'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:24
 * @route '/cp/fields/fieldsets'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:24
 * @route '/cp/fields/fieldsets'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:24
 * @route '/cp/fields/fieldsets'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:24
 * @route '/cp/fields/fieldsets'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:24
 * @route '/cp/fields/fieldsets'
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
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:120
 * @route '/cp/fields/fieldsets/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/fields/fieldsets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:120
 * @route '/cp/fields/fieldsets/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:120
 * @route '/cp/fields/fieldsets/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:120
 * @route '/cp/fields/fieldsets/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:120
 * @route '/cp/fields/fieldsets/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:120
 * @route '/cp/fields/fieldsets/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:120
 * @route '/cp/fields/fieldsets/create'
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
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:125
 * @route '/cp/fields/fieldsets'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/fields/fieldsets',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:125
 * @route '/cp/fields/fieldsets'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:125
 * @route '/cp/fields/fieldsets'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:125
 * @route '/cp/fields/fieldsets'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:125
 * @route '/cp/fields/fieldsets'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:77
 * @route '/cp/fields/fieldsets/{fieldset}/edit'
 */
export const edit = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/fields/fieldsets/{fieldset}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:77
 * @route '/cp/fields/fieldsets/{fieldset}/edit'
 */
edit.url = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fieldset: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    fieldset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fieldset: args.fieldset,
                }

    return edit.definition.url
            .replace('{fieldset}', parsedArgs.fieldset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:77
 * @route '/cp/fields/fieldsets/{fieldset}/edit'
 */
edit.get = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:77
 * @route '/cp/fields/fieldsets/{fieldset}/edit'
 */
edit.head = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:77
 * @route '/cp/fields/fieldsets/{fieldset}/edit'
 */
    const editForm = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:77
 * @route '/cp/fields/fieldsets/{fieldset}/edit'
 */
        editForm.get = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:77
 * @route '/cp/fields/fieldsets/{fieldset}/edit'
 */
        editForm.head = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:97
 * @route '/cp/fields/fieldsets/{fieldset}'
 */
export const update = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/cp/fields/fieldsets/{fieldset}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:97
 * @route '/cp/fields/fieldsets/{fieldset}'
 */
update.url = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fieldset: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    fieldset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fieldset: args.fieldset,
                }

    return update.definition.url
            .replace('{fieldset}', parsedArgs.fieldset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:97
 * @route '/cp/fields/fieldsets/{fieldset}'
 */
update.put = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:97
 * @route '/cp/fields/fieldsets/{fieldset}'
 */
update.patch = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:97
 * @route '/cp/fields/fieldsets/{fieldset}'
 */
    const updateForm = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:97
 * @route '/cp/fields/fieldsets/{fieldset}'
 */
        updateForm.put = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:97
 * @route '/cp/fields/fieldsets/{fieldset}'
 */
        updateForm.patch = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:154
 * @route '/cp/fields/fieldsets/{fieldset}'
 */
export const destroy = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/fields/fieldsets/{fieldset}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:154
 * @route '/cp/fields/fieldsets/{fieldset}'
 */
destroy.url = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { fieldset: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    fieldset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        fieldset: args.fieldset,
                }

    return destroy.definition.url
            .replace('{fieldset}', parsedArgs.fieldset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:154
 * @route '/cp/fields/fieldsets/{fieldset}'
 */
destroy.delete = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:154
 * @route '/cp/fields/fieldsets/{fieldset}'
 */
    const destroyForm = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsetController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsetController.php:154
 * @route '/cp/fields/fieldsets/{fieldset}'
 */
        destroyForm.delete = (args: { fieldset: string | number } | [fieldset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const fieldsets = {
    reset: Object.assign(reset, reset),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default fieldsets