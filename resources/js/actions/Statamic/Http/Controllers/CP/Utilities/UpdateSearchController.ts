import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Utilities\UpdateSearchController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UpdateSearchController.php:13
 * @route '/cp/utilities/search'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/cp/utilities/search',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Utilities\UpdateSearchController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UpdateSearchController.php:13
 * @route '/cp/utilities/search'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Utilities\UpdateSearchController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UpdateSearchController.php:13
 * @route '/cp/utilities/search'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Utilities\UpdateSearchController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UpdateSearchController.php:13
 * @route '/cp/utilities/search'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Utilities\UpdateSearchController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UpdateSearchController.php:13
 * @route '/cp/utilities/search'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const UpdateSearchController = { update }

export default UpdateSearchController