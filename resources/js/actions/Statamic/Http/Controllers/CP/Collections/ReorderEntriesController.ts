import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderEntriesController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderEntriesController.php:10
 * @route '/cp/collections/{collection}/entries/reorder'
 */
const ReorderEntriesController = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ReorderEntriesController.url(args, options),
    method: 'post',
})

ReorderEntriesController.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/entries/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderEntriesController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderEntriesController.php:10
 * @route '/cp/collections/{collection}/entries/reorder'
 */
ReorderEntriesController.url = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ReorderEntriesController.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderEntriesController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderEntriesController.php:10
 * @route '/cp/collections/{collection}/entries/reorder'
 */
ReorderEntriesController.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ReorderEntriesController.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderEntriesController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderEntriesController.php:10
 * @route '/cp/collections/{collection}/entries/reorder'
 */
    const ReorderEntriesControllerForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: ReorderEntriesController.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\ReorderEntriesController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ReorderEntriesController.php:10
 * @route '/cp/collections/{collection}/entries/reorder'
 */
        ReorderEntriesControllerForm.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: ReorderEntriesController.url(args, options),
            method: 'post',
        })
    
    ReorderEntriesController.form = ReorderEntriesControllerForm
export default ReorderEntriesController