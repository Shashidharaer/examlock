import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\SessionTimeoutController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SessionTimeoutController.php:9
* @route '/cp/session-timeout'
*/
const SessionTimeoutController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SessionTimeoutController.url(options),
    method: 'get',
})

SessionTimeoutController.definition = {
    methods: ["get","head"],
    url: '/cp/session-timeout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\SessionTimeoutController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SessionTimeoutController.php:9
* @route '/cp/session-timeout'
*/
SessionTimeoutController.url = (options?: RouteQueryOptions) => {
    return SessionTimeoutController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\SessionTimeoutController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SessionTimeoutController.php:9
* @route '/cp/session-timeout'
*/
SessionTimeoutController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SessionTimeoutController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\SessionTimeoutController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SessionTimeoutController.php:9
* @route '/cp/session-timeout'
*/
SessionTimeoutController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SessionTimeoutController.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\SessionTimeoutController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SessionTimeoutController.php:9
* @route '/cp/session-timeout'
*/
const SessionTimeoutControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SessionTimeoutController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\SessionTimeoutController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SessionTimeoutController.php:9
* @route '/cp/session-timeout'
*/
SessionTimeoutControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SessionTimeoutController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\SessionTimeoutController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SessionTimeoutController.php:9
* @route '/cp/session-timeout'
*/
SessionTimeoutControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SessionTimeoutController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SessionTimeoutController.form = SessionTimeoutControllerForm

export default SessionTimeoutController