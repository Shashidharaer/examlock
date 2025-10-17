import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::resolve
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:10
 * @route '/cp/field-action-modal/resolve'
 */
export const resolve = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(options),
    method: 'post',
})

resolve.definition = {
    methods: ["post"],
    url: '/cp/field-action-modal/resolve',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::resolve
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:10
 * @route '/cp/field-action-modal/resolve'
 */
resolve.url = (options?: RouteQueryOptions) => {
    return resolve.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::resolve
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:10
 * @route '/cp/field-action-modal/resolve'
 */
resolve.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::resolve
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:10
 * @route '/cp/field-action-modal/resolve'
 */
    const resolveForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: resolve.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::resolve
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:10
 * @route '/cp/field-action-modal/resolve'
 */
        resolveForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: resolve.url(options),
            method: 'post',
        })
    
    resolve.form = resolveForm
/**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::process
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:23
 * @route '/cp/field-action-modal/process'
 */
export const process = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

process.definition = {
    methods: ["post"],
    url: '/cp/field-action-modal/process',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::process
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:23
 * @route '/cp/field-action-modal/process'
 */
process.url = (options?: RouteQueryOptions) => {
    return process.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::process
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:23
 * @route '/cp/field-action-modal/process'
 */
process.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::process
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:23
 * @route '/cp/field-action-modal/process'
 */
    const processForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: process.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::process
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:23
 * @route '/cp/field-action-modal/process'
 */
        processForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: process.url(options),
            method: 'post',
        })
    
    process.form = processForm
const FieldActionModalController = { resolve, process }

export default FieldActionModalController