import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldtypesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldtypesController.php:10
 * @route '/cp/fields/fieldtypes'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/fields/fieldtypes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldtypesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldtypesController.php:10
 * @route '/cp/fields/fieldtypes'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldtypesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldtypesController.php:10
 * @route '/cp/fields/fieldtypes'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldtypesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldtypesController.php:10
 * @route '/cp/fields/fieldtypes'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldtypesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldtypesController.php:10
 * @route '/cp/fields/fieldtypes'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldtypesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldtypesController.php:10
 * @route '/cp/fields/fieldtypes'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldtypesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldtypesController.php:10
 * @route '/cp/fields/fieldtypes'
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
const FieldtypesController = { index }

export default FieldtypesController