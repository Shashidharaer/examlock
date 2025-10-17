import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:13
 * @route '/cp/duplicates'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/duplicates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:13
 * @route '/cp/duplicates'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:13
 * @route '/cp/duplicates'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:13
 * @route '/cp/duplicates'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:13
 * @route '/cp/duplicates'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:13
 * @route '/cp/duplicates'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:13
 * @route '/cp/duplicates'
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
const DuplicatesController = { index, regenerate }

export default DuplicatesController