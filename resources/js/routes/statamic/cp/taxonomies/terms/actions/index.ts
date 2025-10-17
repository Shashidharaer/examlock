import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermActionController.php:14
 * @route '/cp/taxonomies/{taxonomy}/terms/actions'
 */
export const run = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(args, options),
    method: 'post',
})

run.definition = {
    methods: ["post"],
    url: '/cp/taxonomies/{taxonomy}/terms/actions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermActionController.php:14
 * @route '/cp/taxonomies/{taxonomy}/terms/actions'
 */
run.url = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { taxonomy: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    taxonomy: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        taxonomy: args.taxonomy,
                }

    return run.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermActionController.php:14
 * @route '/cp/taxonomies/{taxonomy}/terms/actions'
 */
run.post = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermActionController.php:14
 * @route '/cp/taxonomies/{taxonomy}/terms/actions'
 */
    const runForm = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: run.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermActionController.php:14
 * @route '/cp/taxonomies/{taxonomy}/terms/actions'
 */
        runForm.post = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: run.url(args, options),
            method: 'post',
        })
    
    run.form = runForm
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermActionController::bulk
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermActionController.php:71
 * @route '/cp/taxonomies/{taxonomy}/terms/actions/list'
 */
export const bulk = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulk.url(args, options),
    method: 'post',
})

bulk.definition = {
    methods: ["post"],
    url: '/cp/taxonomies/{taxonomy}/terms/actions/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermActionController::bulk
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermActionController.php:71
 * @route '/cp/taxonomies/{taxonomy}/terms/actions/list'
 */
bulk.url = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { taxonomy: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    taxonomy: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        taxonomy: args.taxonomy,
                }

    return bulk.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermActionController::bulk
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermActionController.php:71
 * @route '/cp/taxonomies/{taxonomy}/terms/actions/list'
 */
bulk.post = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulk.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermActionController::bulk
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermActionController.php:71
 * @route '/cp/taxonomies/{taxonomy}/terms/actions/list'
 */
    const bulkForm = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulk.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermActionController::bulk
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermActionController.php:71
 * @route '/cp/taxonomies/{taxonomy}/terms/actions/list'
 */
        bulkForm.post = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulk.url(args, options),
            method: 'post',
        })
    
    bulk.form = bulkForm
const actions = {
    run: Object.assign(run, run),
bulk: Object.assign(bulk, bulk),
}

export default actions