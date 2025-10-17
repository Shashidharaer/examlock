import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationTreeController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationTreeController.php:19
 * @route '/cp/navigation/{navigation}/tree'
 */
export const index = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/navigation/{navigation}/tree',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationTreeController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationTreeController.php:19
 * @route '/cp/navigation/{navigation}/tree'
 */
index.url = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{navigation}', parsedArgs.navigation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationTreeController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationTreeController.php:19
 * @route '/cp/navigation/{navigation}/tree'
 */
index.get = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationTreeController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationTreeController.php:19
 * @route '/cp/navigation/{navigation}/tree'
 */
index.head = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationTreeController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationTreeController.php:19
 * @route '/cp/navigation/{navigation}/tree'
 */
    const indexForm = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationTreeController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationTreeController.php:19
 * @route '/cp/navigation/{navigation}/tree'
 */
        indexForm.get = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationTreeController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationTreeController.php:19
 * @route '/cp/navigation/{navigation}/tree'
 */
        indexForm.head = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationTreeController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationTreeController.php:36
 * @route '/cp/navigation/{navigation}/tree'
 */
export const update = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/navigation/{navigation}/tree',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationTreeController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationTreeController.php:36
 * @route '/cp/navigation/{navigation}/tree'
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
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationTreeController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationTreeController.php:36
 * @route '/cp/navigation/{navigation}/tree'
 */
update.patch = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationTreeController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationTreeController.php:36
 * @route '/cp/navigation/{navigation}/tree'
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
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationTreeController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationTreeController.php:36
 * @route '/cp/navigation/{navigation}/tree'
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
const tree = {
    index: Object.assign(index, index),
update: Object.assign(update, update),
}

export default tree