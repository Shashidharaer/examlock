import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SearchController::search
* @see app/Http/Controllers/SearchController.php:14
* @route '/api/search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

search.definition = {
    methods: ["post"],
    url: '/api/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SearchController::search
* @see app/Http/Controllers/SearchController.php:14
* @route '/api/search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::search
* @see app/Http/Controllers/SearchController.php:14
* @route '/api/search'
*/
search.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SearchController::search
* @see app/Http/Controllers/SearchController.php:14
* @route '/api/search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\SearchController::search
* @see app/Http/Controllers/SearchController.php:14
* @route '/api/search'
*/
searchForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: search.url(options),
    method: 'post',
})

search.form = searchForm

const SearchController = { search }

export default SearchController