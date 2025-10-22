import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Assets\FieldtypeController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FieldtypeController.php:11
* @route '/cp/assets-fieldtype'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index.url(options),
    method: 'post',
})

index.definition = {
    methods: ["post"],
    url: '/cp/assets-fieldtype',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\FieldtypeController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FieldtypeController.php:11
* @route '/cp/assets-fieldtype'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\FieldtypeController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FieldtypeController.php:11
* @route '/cp/assets-fieldtype'
*/
index.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\FieldtypeController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FieldtypeController.php:11
* @route '/cp/assets-fieldtype'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\FieldtypeController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FieldtypeController.php:11
* @route '/cp/assets-fieldtype'
*/
indexForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: index.url(options),
    method: 'post',
})

index.form = indexForm

const FieldtypeController = { index }

export default FieldtypeController