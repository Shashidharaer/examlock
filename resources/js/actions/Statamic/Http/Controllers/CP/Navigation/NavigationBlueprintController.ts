import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationBlueprintController.php:19
 * @route '/cp/navigation/{navigation}/blueprint'
 */
export const edit = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/navigation/{navigation}/blueprint',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationBlueprintController.php:19
 * @route '/cp/navigation/{navigation}/blueprint'
 */
edit.url = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { navigation: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    navigation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        navigation: args.navigation,
                }

    return edit.definition.url
            .replace('{navigation}', parsedArgs.navigation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationBlueprintController.php:19
 * @route '/cp/navigation/{navigation}/blueprint'
 */
edit.get = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationBlueprintController.php:19
 * @route '/cp/navigation/{navigation}/blueprint'
 */
edit.head = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationBlueprintController.php:19
 * @route '/cp/navigation/{navigation}/blueprint'
 */
    const editForm = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationBlueprintController.php:19
 * @route '/cp/navigation/{navigation}/blueprint'
 */
        editForm.get = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationBlueprintController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationBlueprintController.php:19
 * @route '/cp/navigation/{navigation}/blueprint'
 */
        editForm.head = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationBlueprintController.php:34
 * @route '/cp/navigation/{navigation}/blueprint'
 */
export const update = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/navigation/{navigation}/blueprint',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationBlueprintController.php:34
 * @route '/cp/navigation/{navigation}/blueprint'
 */
update.url = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { navigation: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    navigation: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        navigation: args.navigation,
                }

    return update.definition.url
            .replace('{navigation}', parsedArgs.navigation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationBlueprintController.php:34
 * @route '/cp/navigation/{navigation}/blueprint'
 */
update.patch = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationBlueprintController.php:34
 * @route '/cp/navigation/{navigation}/blueprint'
 */
    const updateForm = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationBlueprintController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationBlueprintController.php:34
 * @route '/cp/navigation/{navigation}/blueprint'
 */
        updateForm.patch = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const NavigationBlueprintController = { edit, update }

export default NavigationBlueprintController