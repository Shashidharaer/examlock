import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Fields\MetaController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/MetaController.php:11
 * @route '/cp/fields/field-meta'
 */
const showf67434cc1ab039082cd96a772dd621e8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf67434cc1ab039082cd96a772dd621e8.url(options),
    method: 'get',
})

showf67434cc1ab039082cd96a772dd621e8.definition = {
    methods: ["get","head"],
    url: '/cp/fields/field-meta',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\MetaController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/MetaController.php:11
 * @route '/cp/fields/field-meta'
 */
showf67434cc1ab039082cd96a772dd621e8.url = (options?: RouteQueryOptions) => {
    return showf67434cc1ab039082cd96a772dd621e8.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\MetaController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/MetaController.php:11
 * @route '/cp/fields/field-meta'
 */
showf67434cc1ab039082cd96a772dd621e8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf67434cc1ab039082cd96a772dd621e8.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Fields\MetaController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/MetaController.php:11
 * @route '/cp/fields/field-meta'
 */
showf67434cc1ab039082cd96a772dd621e8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showf67434cc1ab039082cd96a772dd621e8.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\MetaController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/MetaController.php:11
 * @route '/cp/fields/field-meta'
 */
    const showf67434cc1ab039082cd96a772dd621e8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showf67434cc1ab039082cd96a772dd621e8.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\MetaController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/MetaController.php:11
 * @route '/cp/fields/field-meta'
 */
        showf67434cc1ab039082cd96a772dd621e8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showf67434cc1ab039082cd96a772dd621e8.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Fields\MetaController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/MetaController.php:11
 * @route '/cp/fields/field-meta'
 */
        showf67434cc1ab039082cd96a772dd621e8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showf67434cc1ab039082cd96a772dd621e8.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showf67434cc1ab039082cd96a772dd621e8.form = showf67434cc1ab039082cd96a772dd621e8Form
    /**
* @see \Statamic\Http\Controllers\CP\Fields\MetaController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/MetaController.php:11
 * @route '/cp/fields/field-meta'
 */
const showf67434cc1ab039082cd96a772dd621e8 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: showf67434cc1ab039082cd96a772dd621e8.url(options),
    method: 'post',
})

showf67434cc1ab039082cd96a772dd621e8.definition = {
    methods: ["post"],
    url: '/cp/fields/field-meta',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\MetaController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/MetaController.php:11
 * @route '/cp/fields/field-meta'
 */
showf67434cc1ab039082cd96a772dd621e8.url = (options?: RouteQueryOptions) => {
    return showf67434cc1ab039082cd96a772dd621e8.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\MetaController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/MetaController.php:11
 * @route '/cp/fields/field-meta'
 */
showf67434cc1ab039082cd96a772dd621e8.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: showf67434cc1ab039082cd96a772dd621e8.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\MetaController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/MetaController.php:11
 * @route '/cp/fields/field-meta'
 */
    const showf67434cc1ab039082cd96a772dd621e8Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: showf67434cc1ab039082cd96a772dd621e8.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\MetaController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/MetaController.php:11
 * @route '/cp/fields/field-meta'
 */
        showf67434cc1ab039082cd96a772dd621e8Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: showf67434cc1ab039082cd96a772dd621e8.url(options),
            method: 'post',
        })
    
    showf67434cc1ab039082cd96a772dd621e8.form = showf67434cc1ab039082cd96a772dd621e8Form

export const show = {
    '/cp/fields/field-meta': showf67434cc1ab039082cd96a772dd621e8,
    '/cp/fields/field-meta': showf67434cc1ab039082cd96a772dd621e8,
}

const MetaController = { show }

export default MetaController