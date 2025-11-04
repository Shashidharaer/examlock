import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\DashboardController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/DashboardController.php:18
* @route '/cp/dashboard'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\DashboardController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/DashboardController.php:18
* @route '/cp/dashboard'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\DashboardController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/DashboardController.php:18
* @route '/cp/dashboard'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\DashboardController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/DashboardController.php:18
* @route '/cp/dashboard'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\DashboardController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/DashboardController.php:18
* @route '/cp/dashboard'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\DashboardController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/DashboardController.php:18
* @route '/cp/dashboard'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\DashboardController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/DashboardController.php:18
* @route '/cp/dashboard'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const DashboardController = { index }

export default DashboardController