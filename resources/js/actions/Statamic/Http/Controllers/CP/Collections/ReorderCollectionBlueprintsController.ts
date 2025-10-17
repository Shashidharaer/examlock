import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderCollectionBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderCollectionBlueprintsController.php:18
 * @route '/cp/collections/{collection}/blueprints/reorder'
 */
const ReorderCollectionBlueprintsController = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ReorderCollectionBlueprintsController.url(args, options),
    method: 'post',
})

ReorderCollectionBlueprintsController.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/blueprints/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderCollectionBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderCollectionBlueprintsController.php:18
 * @route '/cp/collections/{collection}/blueprints/reorder'
 */
ReorderCollectionBlueprintsController.url = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { collection: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    collection: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        collection: args.collection,
                }

    return ReorderCollectionBlueprintsController.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderCollectionBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderCollectionBlueprintsController.php:18
 * @route '/cp/collections/{collection}/blueprints/reorder'
 */
ReorderCollectionBlueprintsController.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ReorderCollectionBlueprintsController.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderCollectionBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderCollectionBlueprintsController.php:18
 * @route '/cp/collections/{collection}/blueprints/reorder'
 */
    const ReorderCollectionBlueprintsControllerForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: ReorderCollectionBlueprintsController.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderCollectionBlueprintsController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderCollectionBlueprintsController.php:18
 * @route '/cp/collections/{collection}/blueprints/reorder'
 */
        ReorderCollectionBlueprintsControllerForm.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: ReorderCollectionBlueprintsController.url(args, options),
            method: 'post',
        })
    
    ReorderCollectionBlueprintsController.form = ReorderCollectionBlueprintsControllerForm
export default ReorderCollectionBlueprintsController