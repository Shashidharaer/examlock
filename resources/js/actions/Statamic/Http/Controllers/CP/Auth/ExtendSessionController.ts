import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Auth\ExtendSessionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ExtendSessionController.php:9
 * @route '/cp/auth/extend'
 */
const ExtendSessionController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExtendSessionController.url(options),
    method: 'get',
})

ExtendSessionController.definition = {
    methods: ["get","head"],
    url: '/cp/auth/extend',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Auth\ExtendSessionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ExtendSessionController.php:9
 * @route '/cp/auth/extend'
 */
ExtendSessionController.url = (options?: RouteQueryOptions) => {
    return ExtendSessionController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Auth\ExtendSessionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ExtendSessionController.php:9
 * @route '/cp/auth/extend'
 */
ExtendSessionController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ExtendSessionController.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Auth\ExtendSessionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ExtendSessionController.php:9
 * @route '/cp/auth/extend'
 */
ExtendSessionController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ExtendSessionController.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Auth\ExtendSessionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ExtendSessionController.php:9
 * @route '/cp/auth/extend'
 */
    const ExtendSessionControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ExtendSessionController.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Auth\ExtendSessionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ExtendSessionController.php:9
 * @route '/cp/auth/extend'
 */
        ExtendSessionControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ExtendSessionController.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Auth\ExtendSessionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ExtendSessionController.php:9
 * @route '/cp/auth/extend'
 */
        ExtendSessionControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ExtendSessionController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ExtendSessionController.form = ExtendSessionControllerForm
export default ExtendSessionController