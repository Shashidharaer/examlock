import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\LicensingController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:9
 * @route '/cp/utilities/licensing'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/utilities/licensing',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\LicensingController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:9
 * @route '/cp/utilities/licensing'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\LicensingController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:9
 * @route '/cp/utilities/licensing'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\LicensingController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:9
 * @route '/cp/utilities/licensing'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\LicensingController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:9
 * @route '/cp/utilities/licensing'
 */
    const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\LicensingController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:9
 * @route '/cp/utilities/licensing'
 */
        showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\LicensingController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:9
 * @route '/cp/utilities/licensing'
 */
        showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
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
const LicensingController = { show, refresh }

export default LicensingController