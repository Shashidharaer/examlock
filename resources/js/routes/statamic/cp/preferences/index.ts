import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
import user from './user'
import role from './role'
import defaultMethod from './default'
import nav from './nav'
/**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:13
 * @route '/cp/preferences'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/preferences',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:13
 * @route '/cp/preferences'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:13
 * @route '/cp/preferences'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:13
 * @route '/cp/preferences'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:13
 * @route '/cp/preferences'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:13
 * @route '/cp/preferences'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:13
 * @route '/cp/preferences'
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
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:25
 * @route '/cp/preferences/js'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/preferences/js',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:25
 * @route '/cp/preferences/js'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:25
 * @route '/cp/preferences/js'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:25
 * @route '/cp/preferences/js'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::store
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:25
 * @route '/cp/preferences/js'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:49
 * @route '/cp/preferences/js/{key}'
 */
export const destroy = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/preferences/js/{key}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:49
 * @route '/cp/preferences/js/{key}'
 */
destroy.url = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { key: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    key: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        key: args.key,
                }

    return destroy.definition.url
            .replace('{key}', parsedArgs.key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:49
 * @route '/cp/preferences/js/{key}'
 */
destroy.delete = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:49
 * @route '/cp/preferences/js/{key}'
 */
    const destroyForm = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Preferences\PreferenceController::destroy
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/PreferenceController.php:49
 * @route '/cp/preferences/js/{key}'
 */
        destroyForm.delete = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const preferences = {
    index: Object.assign(index, index),
user: Object.assign(user, user),
role: Object.assign(role, role),
default: Object.assign(defaultMethod, defaultMethod),
store: Object.assign(store, store),
destroy: Object.assign(destroy, destroy),
nav: Object.assign(nav, nav),
}

export default preferences