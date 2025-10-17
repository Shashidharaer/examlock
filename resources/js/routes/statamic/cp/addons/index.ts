import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\AddonsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/AddonsController.php:14
 * @route '/cp/addons'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/addons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\AddonsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/AddonsController.php:14
 * @route '/cp/addons'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\AddonsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/AddonsController.php:14
 * @route '/cp/addons'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\AddonsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/AddonsController.php:14
 * @route '/cp/addons'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\AddonsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/AddonsController.php:14
 * @route '/cp/addons'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\AddonsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/AddonsController.php:14
 * @route '/cp/addons'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\AddonsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/AddonsController.php:14
 * @route '/cp/addons'
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
const addons = {
    index: Object.assign(index, index),
}

export default addons