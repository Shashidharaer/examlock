import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:20
 * @route '/cp/fields/blueprints'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/fields/blueprints',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:20
 * @route '/cp/fields/blueprints'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:20
 * @route '/cp/fields/blueprints'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:20
 * @route '/cp/fields/blueprints'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:20
 * @route '/cp/fields/blueprints'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:20
 * @route '/cp/fields/blueprints'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:20
 * @route '/cp/fields/blueprints'
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
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:47
 * @route '/cp/fields/blueprints/{namespace}/{handle}'
 */
export const edit = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/fields/blueprints/{namespace}/{handle}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:47
 * @route '/cp/fields/blueprints/{namespace}/{handle}'
 */
edit.url = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    namespace: args[0],
                    handle: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        namespace: args.namespace,
                                handle: args.handle,
                }

    return edit.definition.url
            .replace('{namespace}', parsedArgs.namespace.toString())
            .replace('{handle}', parsedArgs.handle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:47
 * @route '/cp/fields/blueprints/{namespace}/{handle}'
 */
edit.get = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:47
 * @route '/cp/fields/blueprints/{namespace}/{handle}'
 */
edit.head = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:47
 * @route '/cp/fields/blueprints/{namespace}/{handle}'
 */
    const editForm = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:47
 * @route '/cp/fields/blueprints/{namespace}/{handle}'
 */
        editForm.get = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:47
 * @route '/cp/fields/blueprints/{namespace}/{handle}'
 */
        editForm.head = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:61
 * @route '/cp/fields/blueprints/{namespace}/{handle}'
 */
export const update = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/fields/blueprints/{namespace}/{handle}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:61
 * @route '/cp/fields/blueprints/{namespace}/{handle}'
 */
update.url = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    namespace: args[0],
                    handle: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        namespace: args.namespace,
                                handle: args.handle,
                }

    return update.definition.url
            .replace('{namespace}', parsedArgs.namespace.toString())
            .replace('{handle}', parsedArgs.handle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:61
 * @route '/cp/fields/blueprints/{namespace}/{handle}'
 */
update.patch = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:61
 * @route '/cp/fields/blueprints/{namespace}/{handle}'
 */
    const updateForm = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:61
 * @route '/cp/fields/blueprints/{namespace}/{handle}'
 */
        updateForm.patch = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:77
 * @route '/cp/fields/blueprints/{namespace}/{handle}/reset'
 */
export const reset = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: reset.url(args, options),
    method: 'delete',
})

reset.definition = {
    methods: ["delete"],
    url: '/cp/fields/blueprints/{namespace}/{handle}/reset',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:77
 * @route '/cp/fields/blueprints/{namespace}/{handle}/reset'
 */
reset.url = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    namespace: args[0],
                    handle: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        namespace: args.namespace,
                                handle: args.handle,
                }

    return reset.definition.url
            .replace('{namespace}', parsedArgs.namespace.toString())
            .replace('{handle}', parsedArgs.handle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:77
 * @route '/cp/fields/blueprints/{namespace}/{handle}/reset'
 */
reset.delete = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: reset.url(args, options),
    method: 'delete',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:77
 * @route '/cp/fields/blueprints/{namespace}/{handle}/reset'
 */
    const resetForm = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reset.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\BlueprintController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/BlueprintController.php:77
 * @route '/cp/fields/blueprints/{namespace}/{handle}/reset'
 */
        resetForm.delete = (args: { namespace: string | number, handle: string | number } | [namespace: string | number, handle: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reset.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    reset.form = resetForm
const BlueprintController = { index, edit, update, reset }

export default BlueprintController