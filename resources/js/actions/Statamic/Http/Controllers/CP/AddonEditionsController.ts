import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\AddonEditionsController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/AddonEditionsController.php:16
* @route '/cp/addons/editions'
*/
const AddonEditionsController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: AddonEditionsController.url(options),
    method: 'post',
})

AddonEditionsController.definition = {
    methods: ["post"],
    url: '/cp/addons/editions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\AddonEditionsController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/AddonEditionsController.php:16
* @route '/cp/addons/editions'
*/
AddonEditionsController.url = (options?: RouteQueryOptions) => {
    return AddonEditionsController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\AddonEditionsController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/AddonEditionsController.php:16
* @route '/cp/addons/editions'
*/
AddonEditionsController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: AddonEditionsController.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\AddonEditionsController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/AddonEditionsController.php:16
* @route '/cp/addons/editions'
*/
const AddonEditionsControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: AddonEditionsController.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\AddonEditionsController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/AddonEditionsController.php:16
* @route '/cp/addons/editions'
*/
AddonEditionsControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: AddonEditionsController.url(options),
    method: 'post',
})

AddonEditionsController.form = AddonEditionsControllerForm

export default AddonEditionsController