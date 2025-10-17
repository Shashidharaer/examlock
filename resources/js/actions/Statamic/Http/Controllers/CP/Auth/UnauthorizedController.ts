import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Auth\UnauthorizedController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/UnauthorizedController.php:7
 * @route '/cp/auth/unauthorized'
 */
const UnauthorizedController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UnauthorizedController.url(options),
    method: 'get',
})

UnauthorizedController.definition = {
    methods: ["get","head"],
    url: '/cp/auth/unauthorized',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Auth\UnauthorizedController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/UnauthorizedController.php:7
 * @route '/cp/auth/unauthorized'
 */
UnauthorizedController.url = (options?: RouteQueryOptions) => {
    return UnauthorizedController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Auth\UnauthorizedController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/UnauthorizedController.php:7
 * @route '/cp/auth/unauthorized'
 */
UnauthorizedController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: UnauthorizedController.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Auth\UnauthorizedController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/UnauthorizedController.php:7
 * @route '/cp/auth/unauthorized'
 */
UnauthorizedController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: UnauthorizedController.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Auth\UnauthorizedController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/UnauthorizedController.php:7
 * @route '/cp/auth/unauthorized'
 */
    const UnauthorizedControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: UnauthorizedController.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Auth\UnauthorizedController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/UnauthorizedController.php:7
 * @route '/cp/auth/unauthorized'
 */
        UnauthorizedControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: UnauthorizedController.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Auth\UnauthorizedController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/UnauthorizedController.php:7
 * @route '/cp/auth/unauthorized'
 */
        UnauthorizedControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: UnauthorizedController.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    UnauthorizedController.form = UnauthorizedControllerForm
export default UnauthorizedController