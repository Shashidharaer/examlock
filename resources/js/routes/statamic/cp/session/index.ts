import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\SessionTimeoutController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/SessionTimeoutController.php:9
 * @route '/cp/session-timeout'
 */
export const timeout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: timeout.url(options),
    method: 'get',
})

timeout.definition = {
    methods: ["get","head"],
    url: '/cp/session-timeout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\SessionTimeoutController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/SessionTimeoutController.php:9
 * @route '/cp/session-timeout'
 */
timeout.url = (options?: RouteQueryOptions) => {
    return timeout.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\SessionTimeoutController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/SessionTimeoutController.php:9
 * @route '/cp/session-timeout'
 */
timeout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: timeout.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\SessionTimeoutController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/SessionTimeoutController.php:9
 * @route '/cp/session-timeout'
 */
timeout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: timeout.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\SessionTimeoutController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/SessionTimeoutController.php:9
 * @route '/cp/session-timeout'
 */
    const timeoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: timeout.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\SessionTimeoutController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/SessionTimeoutController.php:9
 * @route '/cp/session-timeout'
 */
        timeoutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: timeout.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\SessionTimeoutController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/SessionTimeoutController.php:9
 * @route '/cp/session-timeout'
 */
        timeoutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: timeout.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    timeout.form = timeoutForm
const session = {
    timeout: Object.assign(timeout, timeout),
}

export default session