import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\RestoreEntryRevisionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/RestoreEntryRevisionController.php:12
 * @route '/cp/collections/{collection}/entries/{entry}/restore-revision'
 */
const RestoreEntryRevisionController = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RestoreEntryRevisionController.url(args, options),
    method: 'post',
})

RestoreEntryRevisionController.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/entries/{entry}/restore-revision',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\RestoreEntryRevisionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/RestoreEntryRevisionController.php:12
 * @route '/cp/collections/{collection}/entries/{entry}/restore-revision'
 */
RestoreEntryRevisionController.url = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    collection: args[0],
                    entry: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        collection: args.collection,
                                entry: args.entry,
                }

    return RestoreEntryRevisionController.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{entry}', parsedArgs.entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\RestoreEntryRevisionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/RestoreEntryRevisionController.php:12
 * @route '/cp/collections/{collection}/entries/{entry}/restore-revision'
 */
RestoreEntryRevisionController.post = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RestoreEntryRevisionController.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\RestoreEntryRevisionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/RestoreEntryRevisionController.php:12
 * @route '/cp/collections/{collection}/entries/{entry}/restore-revision'
 */
    const RestoreEntryRevisionControllerForm = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: RestoreEntryRevisionController.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\RestoreEntryRevisionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/RestoreEntryRevisionController.php:12
 * @route '/cp/collections/{collection}/entries/{entry}/restore-revision'
 */
        RestoreEntryRevisionControllerForm.post = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RestoreEntryRevisionController.url(args, options),
            method: 'post',
        })
    
    RestoreEntryRevisionController.form = RestoreEntryRevisionControllerForm
export default RestoreEntryRevisionController