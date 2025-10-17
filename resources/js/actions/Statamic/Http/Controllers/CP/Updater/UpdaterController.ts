import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:18
 * @route '/cp/updater'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/updater',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:18
 * @route '/cp/updater'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:18
 * @route '/cp/updater'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:18
 * @route '/cp/updater'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:18
 * @route '/cp/updater'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:18
 * @route '/cp/updater'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:18
 * @route '/cp/updater'
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
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::count
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:39
 * @route '/cp/updater/count'
 */
export const count = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: count.url(options),
    method: 'get',
})

count.definition = {
    methods: ["get","head"],
    url: '/cp/updater/count',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::count
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:39
 * @route '/cp/updater/count'
 */
count.url = (options?: RouteQueryOptions) => {
    return count.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::count
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:39
 * @route '/cp/updater/count'
 */
count.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: count.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::count
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:39
 * @route '/cp/updater/count'
 */
count.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: count.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::count
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:39
 * @route '/cp/updater/count'
 */
    const countForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: count.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::count
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:39
 * @route '/cp/updater/count'
 */
        countForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: count.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::count
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:39
 * @route '/cp/updater/count'
 */
        countForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: count.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    count.form = countForm
const UpdaterController = { index, count }

export default UpdaterController