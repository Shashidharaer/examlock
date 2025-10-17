import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
import actions from './actions'
import submissions from './submissions'
import blueprint from './blueprint'
/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:21
 * @route '/cp/forms'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/forms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:21
 * @route '/cp/forms'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:21
 * @route '/cp/forms'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:21
 * @route '/cp/forms'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:21
 * @route '/cp/forms'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:21
 * @route '/cp/forms'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:21
 * @route '/cp/forms'
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
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:119
 * @route '/cp/forms/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/forms/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:119
 * @route '/cp/forms/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:119
 * @route '/cp/forms/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:119
 * @route '/cp/forms/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:119
 * @route '/cp/forms/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:119
 * @route '/cp/forms/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::create
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:119
 * @route '/cp/forms/create'
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
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:128
 * @route '/cp/forms'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/forms',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:128
 * @route '/cp/forms'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:128
 * @route '/cp/forms'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:128
 * @route '/cp/forms'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:128
 * @route '/cp/forms'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:66
 * @route '/cp/forms/{form}'
 */
export const show = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/forms/{form}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:66
 * @route '/cp/forms/{form}'
 */
show.url = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    form: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        form: args.form,
                }

    return show.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:66
 * @route '/cp/forms/{form}'
 */
show.get = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:66
 * @route '/cp/forms/{form}'
 */
show.head = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:66
 * @route '/cp/forms/{form}'
 */
    const showForm = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:66
 * @route '/cp/forms/{form}'
 */
        showForm.get = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:66
 * @route '/cp/forms/{form}'
 */
        showForm.head = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:152
 * @route '/cp/forms/{form}/edit'
 */
export const edit = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/forms/{form}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:152
 * @route '/cp/forms/{form}/edit'
 */
edit.url = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    form: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        form: args.form,
                }

    return edit.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:152
 * @route '/cp/forms/{form}/edit'
 */
edit.get = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:152
 * @route '/cp/forms/{form}/edit'
 */
edit.head = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:152
 * @route '/cp/forms/{form}/edit'
 */
    const editForm = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:152
 * @route '/cp/forms/{form}/edit'
 */
        editForm.get = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:152
 * @route '/cp/forms/{form}/edit'
 */
        editForm.head = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:177
 * @route '/cp/forms/{form}'
 */
export const update = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/cp/forms/{form}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:177
 * @route '/cp/forms/{form}'
 */
update.url = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    form: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        form: args.form,
                }

    return update.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:177
 * @route '/cp/forms/{form}'
 */
update.put = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:177
 * @route '/cp/forms/{form}'
 */
update.patch = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:177
 * @route '/cp/forms/{form}'
 */
    const updateForm = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:177
 * @route '/cp/forms/{form}'
 */
        updateForm.put = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:177
 * @route '/cp/forms/{form}'
 */
        updateForm.patch = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:201
 * @route '/cp/forms/{form}'
 */
export const destroy = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/forms/{form}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:201
 * @route '/cp/forms/{form}'
 */
destroy.url = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    form: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        form: args.form,
                }

    return destroy.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:201
 * @route '/cp/forms/{form}'
 */
destroy.delete = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:201
 * @route '/cp/forms/{form}'
 */
    const destroyForm = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormsController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormsController.php:201
 * @route '/cp/forms/{form}'
 */
        destroyForm.delete = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Statamic\Http\Controllers\CP\Forms\FormExportController::exportMethod
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormExportController.php:10
 * @route '/cp/forms/{form}/export/{type}'
 */
export const exportMethod = (args: { form: string | number, type: string | number } | [form: string | number, type: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(args, options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/cp/forms/{form}/export/{type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormExportController::exportMethod
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormExportController.php:10
 * @route '/cp/forms/{form}/export/{type}'
 */
exportMethod.url = (args: { form: string | number, type: string | number } | [form: string | number, type: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    form: args[0],
                    type: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        form: args.form,
                                type: args.type,
                }

    return exportMethod.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace('{type}', parsedArgs.type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormExportController::exportMethod
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormExportController.php:10
 * @route '/cp/forms/{form}/export/{type}'
 */
exportMethod.get = (args: { form: string | number, type: string | number } | [form: string | number, type: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Forms\FormExportController::exportMethod
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormExportController.php:10
 * @route '/cp/forms/{form}/export/{type}'
 */
exportMethod.head = (args: { form: string | number, type: string | number } | [form: string | number, type: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Forms\FormExportController::exportMethod
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormExportController.php:10
 * @route '/cp/forms/{form}/export/{type}'
 */
    const exportMethodForm = (args: { form: string | number, type: string | number } | [form: string | number, type: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportMethod.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormExportController::exportMethod
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormExportController.php:10
 * @route '/cp/forms/{form}/export/{type}'
 */
        exportMethodForm.get = (args: { form: string | number, type: string | number } | [form: string | number, type: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormExportController::exportMethod
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormExportController.php:10
 * @route '/cp/forms/{form}/export/{type}'
 */
        exportMethodForm.head = (args: { form: string | number, type: string | number } | [form: string | number, type: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exportMethod.form = exportMethodForm
const forms = {
    actions: Object.assign(actions, actions),
submissions: Object.assign(submissions, submissions),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
export: Object.assign(exportMethod, exportMethod),
blueprint: Object.assign(blueprint, blueprint),
}

export default forms