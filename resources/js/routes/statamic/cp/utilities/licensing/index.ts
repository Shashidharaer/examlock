import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\LicensingController::refresh
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:23
 * @route '/cp/utilities/licensing/refresh'
 */
export const refresh = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: refresh.url(options),
    method: 'get',
})

refresh.definition = {
    methods: ["get","head"],
    url: '/cp/utilities/licensing/refresh',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\LicensingController::refresh
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:23
 * @route '/cp/utilities/licensing/refresh'
 */
refresh.url = (options?: RouteQueryOptions) => {
    return refresh.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\LicensingController::refresh
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:23
 * @route '/cp/utilities/licensing/refresh'
 */
refresh.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: refresh.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\LicensingController::refresh
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:23
 * @route '/cp/utilities/licensing/refresh'
 */
refresh.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: refresh.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\LicensingController::refresh
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:23
 * @route '/cp/utilities/licensing/refresh'
 */
    const refreshForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: refresh.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\LicensingController::refresh
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:23
 * @route '/cp/utilities/licensing/refresh'
 */
        refreshForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: refresh.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\LicensingController::refresh
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:23
 * @route '/cp/utilities/licensing/refresh'
 */
        refreshForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: refresh.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    refresh.form = refreshForm
const licensing = {
    refresh: Object.assign(refresh, refresh),
}

export default licensing