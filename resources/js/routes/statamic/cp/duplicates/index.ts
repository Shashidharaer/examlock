import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::regenerate
* @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:33
* @route '/cp/duplicates/regenerate'
*/
export const regenerate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: regenerate.url(options),
    method: 'post',
})

regenerate.definition = {
    methods: ["post"],
    url: '/cp/duplicates/regenerate',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::regenerate
* @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:33
* @route '/cp/duplicates/regenerate'
*/
regenerate.url = (options?: RouteQueryOptions) => {
    return regenerate.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::regenerate
* @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:33
* @route '/cp/duplicates/regenerate'
*/
regenerate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: regenerate.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::regenerate
* @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:33
* @route '/cp/duplicates/regenerate'
*/
const regenerateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: regenerate.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::regenerate
* @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:33
* @route '/cp/duplicates/regenerate'
*/
regenerateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: regenerate.url(options),
    method: 'post',
})

regenerate.form = regenerateForm

const duplicates = {
    regenerate: Object.assign(regenerate, regenerate),
}

export default duplicates