import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\API\TemplatesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/API/TemplatesController.php:13
 * @route '/cp/api/templates'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/api/templates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\API\TemplatesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/API/TemplatesController.php:13
 * @route '/cp/api/templates'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\API\TemplatesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/API/TemplatesController.php:13
 * @route '/cp/api/templates'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\API\TemplatesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/API/TemplatesController.php:13
 * @route '/cp/api/templates'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\API\TemplatesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/API/TemplatesController.php:13
 * @route '/cp/api/templates'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\API\TemplatesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/API/TemplatesController.php:13
 * @route '/cp/api/templates'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\API\TemplatesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/API/TemplatesController.php:13
 * @route '/cp/api/templates'
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
const templates = {
    index: Object.assign(index, index),
}

export default templates