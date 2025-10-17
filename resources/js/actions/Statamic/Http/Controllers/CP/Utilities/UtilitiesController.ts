import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:11
 * @route '/cp/utilities'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/utilities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:11
 * @route '/cp/utilities'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:11
 * @route '/cp/utilities'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:11
 * @route '/cp/utilities'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:11
 * @route '/cp/utilities'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:11
 * @route '/cp/utilities'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:11
 * @route '/cp/utilities'
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
/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/search'
 */
const show2a1e6b1404e21e7b3f8aa0f3bd22d996 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show2a1e6b1404e21e7b3f8aa0f3bd22d996.url(options),
    method: 'get',
})

show2a1e6b1404e21e7b3f8aa0f3bd22d996.definition = {
    methods: ["get","head"],
    url: '/cp/utilities/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/search'
 */
show2a1e6b1404e21e7b3f8aa0f3bd22d996.url = (options?: RouteQueryOptions) => {
    return show2a1e6b1404e21e7b3f8aa0f3bd22d996.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/search'
 */
show2a1e6b1404e21e7b3f8aa0f3bd22d996.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show2a1e6b1404e21e7b3f8aa0f3bd22d996.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/search'
 */
show2a1e6b1404e21e7b3f8aa0f3bd22d996.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show2a1e6b1404e21e7b3f8aa0f3bd22d996.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/search'
 */
    const show2a1e6b1404e21e7b3f8aa0f3bd22d996Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show2a1e6b1404e21e7b3f8aa0f3bd22d996.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/search'
 */
        show2a1e6b1404e21e7b3f8aa0f3bd22d996Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show2a1e6b1404e21e7b3f8aa0f3bd22d996.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/search'
 */
        show2a1e6b1404e21e7b3f8aa0f3bd22d996Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show2a1e6b1404e21e7b3f8aa0f3bd22d996.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show2a1e6b1404e21e7b3f8aa0f3bd22d996.form = show2a1e6b1404e21e7b3f8aa0f3bd22d996Form
    /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/email'
 */
const show91ffb77bf292b41b595df0c2fe46a44f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show91ffb77bf292b41b595df0c2fe46a44f.url(options),
    method: 'get',
})

show91ffb77bf292b41b595df0c2fe46a44f.definition = {
    methods: ["get","head"],
    url: '/cp/utilities/email',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/email'
 */
show91ffb77bf292b41b595df0c2fe46a44f.url = (options?: RouteQueryOptions) => {
    return show91ffb77bf292b41b595df0c2fe46a44f.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/email'
 */
show91ffb77bf292b41b595df0c2fe46a44f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show91ffb77bf292b41b595df0c2fe46a44f.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/email'
 */
show91ffb77bf292b41b595df0c2fe46a44f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show91ffb77bf292b41b595df0c2fe46a44f.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/email'
 */
    const show91ffb77bf292b41b595df0c2fe46a44fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show91ffb77bf292b41b595df0c2fe46a44f.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/email'
 */
        show91ffb77bf292b41b595df0c2fe46a44fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show91ffb77bf292b41b595df0c2fe46a44f.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/email'
 */
        show91ffb77bf292b41b595df0c2fe46a44fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show91ffb77bf292b41b595df0c2fe46a44f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show91ffb77bf292b41b595df0c2fe46a44f.form = show91ffb77bf292b41b595df0c2fe46a44fForm

export const show = {
    '/cp/utilities/search': show2a1e6b1404e21e7b3f8aa0f3bd22d996,
    '/cp/utilities/email': show91ffb77bf292b41b595df0c2fe46a44f,
}

const UtilitiesController = { index, show }

export default UtilitiesController