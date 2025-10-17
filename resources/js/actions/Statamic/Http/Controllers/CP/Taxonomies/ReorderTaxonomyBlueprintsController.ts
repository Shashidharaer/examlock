import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\ReorderTaxonomyBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/ReorderTaxonomyBlueprintsController.php:18
 * @route '/cp/taxonomies/{taxonomy}/blueprints/reorder'
 */
const ReorderTaxonomyBlueprintsController = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ReorderTaxonomyBlueprintsController.url(args, options),
    method: 'post',
})

ReorderTaxonomyBlueprintsController.definition = {
    methods: ["post"],
    url: '/cp/taxonomies/{taxonomy}/blueprints/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\ReorderTaxonomyBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/ReorderTaxonomyBlueprintsController.php:18
 * @route '/cp/taxonomies/{taxonomy}/blueprints/reorder'
 */
ReorderTaxonomyBlueprintsController.url = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ReorderTaxonomyBlueprintsController.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\ReorderTaxonomyBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/ReorderTaxonomyBlueprintsController.php:18
 * @route '/cp/taxonomies/{taxonomy}/blueprints/reorder'
 */
ReorderTaxonomyBlueprintsController.post = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ReorderTaxonomyBlueprintsController.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\ReorderTaxonomyBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/ReorderTaxonomyBlueprintsController.php:18
 * @route '/cp/taxonomies/{taxonomy}/blueprints/reorder'
 */
    const ReorderTaxonomyBlueprintsControllerForm = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: ReorderTaxonomyBlueprintsController.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Taxonomies\ReorderTaxonomyBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/ReorderTaxonomyBlueprintsController.php:18
 * @route '/cp/taxonomies/{taxonomy}/blueprints/reorder'
 */
        ReorderTaxonomyBlueprintsControllerForm.post = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: ReorderTaxonomyBlueprintsController.url(args, options),
            method: 'post',
        })
    
    ReorderTaxonomyBlueprintsController.form = ReorderTaxonomyBlueprintsControllerForm
export default ReorderTaxonomyBlueprintsController