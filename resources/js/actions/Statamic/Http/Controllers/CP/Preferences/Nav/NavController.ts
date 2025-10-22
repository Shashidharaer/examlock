import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\NavController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/NavController.php:11
* @route '/cp/nav'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/nav',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\NavController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/NavController.php:11
* @route '/cp/nav'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\NavController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/NavController.php:11
* @route '/cp/nav'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\NavController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/NavController.php:11
* @route '/cp/nav'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\NavController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/NavController.php:11
* @route '/cp/nav'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\NavController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/NavController.php:11
* @route '/cp/nav'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\NavController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/NavController.php:11
* @route '/cp/nav'
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

const NavController = { index }

export default NavController