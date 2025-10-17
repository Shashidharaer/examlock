import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\RestoreTermRevisionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/RestoreTermRevisionController.php:11
 * @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/restore-revision'
 */
const RestoreTermRevisionController = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RestoreTermRevisionController.url(args, options),
    method: 'post',
})

RestoreTermRevisionController.definition = {
    methods: ["post"],
    url: '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/restore-revision',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\RestoreTermRevisionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/RestoreTermRevisionController.php:11
 * @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/restore-revision'
 */
RestoreTermRevisionController.url = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    taxonomy: args[0],
                    term: args[1],
                    site: args[2],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "site",
        ])

    const parsedArgs = {
                        taxonomy: args.taxonomy,
                                term: args.term,
                                site: args.site,
                }

    return RestoreTermRevisionController.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{term}', parsedArgs.term.toString())
            .replace('{site?}', parsedArgs.site?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\RestoreTermRevisionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/RestoreTermRevisionController.php:11
 * @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/restore-revision'
 */
RestoreTermRevisionController.post = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RestoreTermRevisionController.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\RestoreTermRevisionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/RestoreTermRevisionController.php:11
 * @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/restore-revision'
 */
    const RestoreTermRevisionControllerForm = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: RestoreTermRevisionController.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\RestoreTermRevisionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/RestoreTermRevisionController.php:11
 * @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/restore-revision'
 */
        RestoreTermRevisionControllerForm.post = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RestoreTermRevisionController.url(args, options),
            method: 'post',
        })
    
    RestoreTermRevisionController.form = RestoreTermRevisionControllerForm
export default RestoreTermRevisionController