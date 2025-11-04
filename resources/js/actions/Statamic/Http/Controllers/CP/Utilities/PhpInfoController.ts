import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Utilities\PhpInfoController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/PhpInfoController.php:10
* @route '/cp/utilities/phpinfo'
*/
const PhpInfoController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PhpInfoController.url(options),
    method: 'get',
})

PhpInfoController.definition = {
    methods: ["get","head"],
    url: '/cp/utilities/phpinfo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Utilities\PhpInfoController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/PhpInfoController.php:10
* @route '/cp/utilities/phpinfo'
*/
PhpInfoController.url = (options?: RouteQueryOptions) => {
    return PhpInfoController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Utilities\PhpInfoController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/PhpInfoController.php:10
* @route '/cp/utilities/phpinfo'
*/
PhpInfoController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PhpInfoController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Utilities\PhpInfoController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/PhpInfoController.php:10
* @route '/cp/utilities/phpinfo'
*/
PhpInfoController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PhpInfoController.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Utilities\PhpInfoController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/PhpInfoController.php:10
* @route '/cp/utilities/phpinfo'
*/
const PhpInfoControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PhpInfoController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Utilities\PhpInfoController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/PhpInfoController.php:10
* @route '/cp/utilities/phpinfo'
*/
PhpInfoControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PhpInfoController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Utilities\PhpInfoController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/PhpInfoController.php:10
* @route '/cp/utilities/phpinfo'
*/
PhpInfoControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PhpInfoController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PhpInfoController.form = PhpInfoControllerForm

export default PhpInfoController