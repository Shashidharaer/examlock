import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Auth\CsrfTokenController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/CsrfTokenController.php:9
* @route '/cp/auth/token'
*/
const CsrfTokenController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CsrfTokenController.url(options),
    method: 'get',
})

CsrfTokenController.definition = {
    methods: ["get","head"],
    url: '/cp/auth/token',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Auth\CsrfTokenController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/CsrfTokenController.php:9
* @route '/cp/auth/token'
*/
CsrfTokenController.url = (options?: RouteQueryOptions) => {
    return CsrfTokenController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Auth\CsrfTokenController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/CsrfTokenController.php:9
* @route '/cp/auth/token'
*/
CsrfTokenController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CsrfTokenController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\CsrfTokenController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/CsrfTokenController.php:9
* @route '/cp/auth/token'
*/
CsrfTokenController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CsrfTokenController.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\CsrfTokenController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/CsrfTokenController.php:9
* @route '/cp/auth/token'
*/
const CsrfTokenControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CsrfTokenController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\CsrfTokenController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/CsrfTokenController.php:9
* @route '/cp/auth/token'
*/
CsrfTokenControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CsrfTokenController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\CsrfTokenController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/CsrfTokenController.php:9
* @route '/cp/auth/token'
*/
CsrfTokenControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: CsrfTokenController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

CsrfTokenController.form = CsrfTokenControllerForm

export default CsrfTokenController