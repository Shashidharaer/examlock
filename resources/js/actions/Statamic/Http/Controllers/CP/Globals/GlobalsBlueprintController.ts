import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsBlueprintController.php:19
 * @route '/cp/globals/{global_set}/blueprint'
 */
export const edit = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/globals/{global_set}/blueprint',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsBlueprintController.php:19
 * @route '/cp/globals/{global_set}/blueprint'
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
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsBlueprintController.php:19
 * @route '/cp/globals/{global_set}/blueprint'
 */
edit.get = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsBlueprintController.php:19
 * @route '/cp/globals/{global_set}/blueprint'
 */
edit.head = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsBlueprintController.php:19
 * @route '/cp/globals/{global_set}/blueprint'
 */
    const editForm = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsBlueprintController.php:19
 * @route '/cp/globals/{global_set}/blueprint'
 */
        editForm.get = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsBlueprintController.php:19
 * @route '/cp/globals/{global_set}/blueprint'
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
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsBlueprintController.php:34
 * @route '/cp/globals/{global_set}/blueprint'
 */
export const update = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/globals/{global_set}/blueprint',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsBlueprintController.php:34
 * @route '/cp/globals/{global_set}/blueprint'
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
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsBlueprintController.php:34
 * @route '/cp/globals/{global_set}/blueprint'
 */
update.patch = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsBlueprintController.php:34
 * @route '/cp/globals/{global_set}/blueprint'
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
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsBlueprintController.php:34
 * @route '/cp/globals/{global_set}/blueprint'
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
const GlobalsBlueprintController = { edit, update }

export default GlobalsBlueprintController