import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\SlugController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SlugController.php:10
* @route '/cp/slug'
*/
const SlugController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: SlugController.url(options),
    method: 'post',
})

SlugController.definition = {
    methods: ["post"],
    url: '/cp/slug',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\SlugController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SlugController.php:10
* @route '/cp/slug'
*/
SlugController.url = (options?: RouteQueryOptions) => {
    return SlugController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\SlugController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SlugController.php:10
* @route '/cp/slug'
*/
SlugController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: SlugController.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\SlugController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SlugController.php:10
* @route '/cp/slug'
*/
const SlugControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: SlugController.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\SlugController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/SlugController.php:10
* @route '/cp/slug'
*/
SlugControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: SlugController.url(options),
    method: 'post',
})

SlugController.form = SlugControllerForm

export default SlugController