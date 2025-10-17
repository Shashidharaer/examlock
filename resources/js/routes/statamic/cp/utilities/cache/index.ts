import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::clear
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:73
 * @route '/cp/utilities/cache/cache/{cache}'
 */
export const clear = (args: { cache: string | number } | [cache: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: clear.url(args, options),
    method: 'post',
})

clear.definition = {
    methods: ["post"],
    url: '/cp/utilities/cache/cache/{cache}',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::clear
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:73
 * @route '/cp/utilities/cache/cache/{cache}'
 */
clear.url = (args: { cache: string | number } | [cache: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { cache: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    cache: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        cache: args.cache,
                }

    return clear.definition.url
            .replace('{cache}', parsedArgs.cache.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::clear
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:73
 * @route '/cp/utilities/cache/cache/{cache}'
 */
clear.post = (args: { cache: string | number } | [cache: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: clear.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::clear
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:73
 * @route '/cp/utilities/cache/cache/{cache}'
 */
    const clearForm = (args: { cache: string | number } | [cache: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: clear.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::clear
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:73
 * @route '/cp/utilities/cache/cache/{cache}'
 */
        clearForm.post = (args: { cache: string | number } | [cache: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: clear.url(args, options),
            method: 'post',
        })
    
    clear.form = clearForm
/**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::warm
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:121
 * @route '/cp/utilities/cache/cache/{cache}/warm'
 */
export const warm = (args: { cache: string | number } | [cache: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: warm.url(args, options),
    method: 'post',
})

warm.definition = {
    methods: ["post"],
    url: '/cp/utilities/cache/cache/{cache}/warm',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::warm
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:121
 * @route '/cp/utilities/cache/cache/{cache}/warm'
 */
warm.url = (args: { cache: string | number } | [cache: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { cache: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    cache: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        cache: args.cache,
                }

    return warm.definition.url
            .replace('{cache}', parsedArgs.cache.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::warm
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:121
 * @route '/cp/utilities/cache/cache/{cache}/warm'
 */
warm.post = (args: { cache: string | number } | [cache: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: warm.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::warm
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:121
 * @route '/cp/utilities/cache/cache/{cache}/warm'
 */
    const warmForm = (args: { cache: string | number } | [cache: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: warm.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::warm
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:121
 * @route '/cp/utilities/cache/cache/{cache}/warm'
 */
        warmForm.post = (args: { cache: string | number } | [cache: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: warm.url(args, options),
            method: 'post',
        })
    
    warm.form = warmForm
const cache = {
    clear: Object.assign(clear, clear),
warm: Object.assign(warm, warm),
}

export default cache