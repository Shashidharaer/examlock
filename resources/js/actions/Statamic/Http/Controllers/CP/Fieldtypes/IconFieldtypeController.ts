import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\IconFieldtypeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/IconFieldtypeController.php:12
* @route '/cp/fieldtypes/icons'
*/
const IconFieldtypeController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: IconFieldtypeController.url(options),
    method: 'post',
})

IconFieldtypeController.definition = {
    methods: ["post"],
    url: '/cp/fieldtypes/icons',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\IconFieldtypeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/IconFieldtypeController.php:12
* @route '/cp/fieldtypes/icons'
*/
IconFieldtypeController.url = (options?: RouteQueryOptions) => {
    return IconFieldtypeController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\IconFieldtypeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/IconFieldtypeController.php:12
* @route '/cp/fieldtypes/icons'
*/
IconFieldtypeController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: IconFieldtypeController.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\IconFieldtypeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/IconFieldtypeController.php:12
* @route '/cp/fieldtypes/icons'
*/
const IconFieldtypeControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: IconFieldtypeController.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\IconFieldtypeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/IconFieldtypeController.php:12
* @route '/cp/fieldtypes/icons'
*/
IconFieldtypeControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: IconFieldtypeController.url(options),
    method: 'post',
})

IconFieldtypeController.form = IconFieldtypeControllerForm

export default IconFieldtypeController