import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\SearchController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SearchController.php:12
* @route '/cp/search'
*/
const SearchController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SearchController.url(options),
    method: 'get',
})

SearchController.definition = {
    methods: ["get","head"],
    url: '/cp/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\SearchController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SearchController.php:12
* @route '/cp/search'
*/
SearchController.url = (options?: RouteQueryOptions) => {
    return SearchController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\SearchController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SearchController.php:12
* @route '/cp/search'
*/
SearchController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: SearchController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\SearchController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SearchController.php:12
* @route '/cp/search'
*/
SearchController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: SearchController.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\SearchController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SearchController.php:12
* @route '/cp/search'
*/
const SearchControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SearchController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\SearchController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SearchController.php:12
* @route '/cp/search'
*/
SearchControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SearchController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\SearchController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SearchController.php:12
* @route '/cp/search'
*/
SearchControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: SearchController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

SearchController.form = SearchControllerForm

export default SearchController