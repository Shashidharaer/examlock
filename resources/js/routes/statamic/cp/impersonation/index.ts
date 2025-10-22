import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Auth\ImpersonationController::stop
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ImpersonationController.php:19
* @route '/cp/auth/stop-impersonating'
*/
export const stop = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stop.url(options),
    method: 'get',
})

stop.definition = {
    methods: ["get","head"],
    url: '/cp/auth/stop-impersonating',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Auth\ImpersonationController::stop
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ImpersonationController.php:19
* @route '/cp/auth/stop-impersonating'
*/
stop.url = (options?: RouteQueryOptions) => {
    return stop.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Auth\ImpersonationController::stop
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ImpersonationController.php:19
* @route '/cp/auth/stop-impersonating'
*/
stop.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stop.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\ImpersonationController::stop
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ImpersonationController.php:19
* @route '/cp/auth/stop-impersonating'
*/
stop.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stop.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\ImpersonationController::stop
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ImpersonationController.php:19
* @route '/cp/auth/stop-impersonating'
*/
const stopForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stop.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\ImpersonationController::stop
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ImpersonationController.php:19
* @route '/cp/auth/stop-impersonating'
*/
stopForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stop.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\ImpersonationController::stop
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ImpersonationController.php:19
* @route '/cp/auth/stop-impersonating'
*/
stopForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stop.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stop.form = stopForm

const impersonation = {
    stop: Object.assign(stop, stop),
}

export default impersonation