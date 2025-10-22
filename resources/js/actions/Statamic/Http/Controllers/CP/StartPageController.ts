import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\StartPageController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/StartPageController.php:9
* @route '/cp'
*/
const StartPageController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: StartPageController.url(options),
    method: 'get',
})

StartPageController.definition = {
    methods: ["get","head"],
    url: '/cp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\StartPageController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/StartPageController.php:9
* @route '/cp'
*/
StartPageController.url = (options?: RouteQueryOptions) => {
    return StartPageController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\StartPageController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/StartPageController.php:9
* @route '/cp'
*/
StartPageController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: StartPageController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\StartPageController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/StartPageController.php:9
* @route '/cp'
*/
StartPageController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: StartPageController.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\StartPageController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/StartPageController.php:9
* @route '/cp'
*/
const StartPageControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StartPageController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\StartPageController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/StartPageController.php:9
* @route '/cp'
*/
StartPageControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StartPageController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\StartPageController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/StartPageController.php:9
* @route '/cp'
*/
StartPageControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: StartPageController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

StartPageController.form = StartPageControllerForm

export default StartPageController