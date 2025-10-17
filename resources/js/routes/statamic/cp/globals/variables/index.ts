import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalVariablesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalVariablesController.php:13
 * @route '/cp/globals/{global_set}'
 */
export const edit = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/globals/{global_set}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalVariablesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalVariablesController.php:13
 * @route '/cp/globals/{global_set}'
 */
edit.url = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { global_set: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    global_set: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        global_set: args.global_set,
                }

    return edit.definition.url
            .replace('{global_set}', parsedArgs.global_set.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalVariablesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalVariablesController.php:13
 * @route '/cp/globals/{global_set}'
 */
edit.get = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalVariablesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalVariablesController.php:13
 * @route '/cp/globals/{global_set}'
 */
edit.head = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalVariablesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalVariablesController.php:13
 * @route '/cp/globals/{global_set}'
 */
    const editForm = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalVariablesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalVariablesController.php:13
 * @route '/cp/globals/{global_set}'
 */
        editForm.get = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalVariablesController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalVariablesController.php:13
 * @route '/cp/globals/{global_set}'
 */
        editForm.head = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Globals\GlobalVariablesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalVariablesController.php:81
 * @route '/cp/globals/{global_set}/variables'
 */
export const update = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/globals/{global_set}/variables',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalVariablesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalVariablesController.php:81
 * @route '/cp/globals/{global_set}/variables'
 */
update.url = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { global_set: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    global_set: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        global_set: args.global_set,
                }

    return update.definition.url
            .replace('{global_set}', parsedArgs.global_set.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalVariablesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalVariablesController.php:81
 * @route '/cp/globals/{global_set}/variables'
 */
update.patch = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalVariablesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalVariablesController.php:81
 * @route '/cp/globals/{global_set}/variables'
 */
    const updateForm = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalVariablesController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalVariablesController.php:81
 * @route '/cp/globals/{global_set}/variables'
 */
        updateForm.patch = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const variables = {
    edit: Object.assign(edit, edit),
update: Object.assign(update, update),
}

export default variables