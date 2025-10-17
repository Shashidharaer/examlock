import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionActionController.php:14
 * @route '/cp/collections/{collection}/actions'
 */
export const run = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(args, options),
    method: 'post',
})

run.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/actions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionActionController.php:14
 * @route '/cp/collections/{collection}/actions'
 */
run.url = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return run.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionActionController.php:14
 * @route '/cp/collections/{collection}/actions'
 */
run.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionActionController.php:14
 * @route '/cp/collections/{collection}/actions'
 */
    const runForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: run.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\CollectionActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/CollectionActionController.php:14
 * @route '/cp/collections/{collection}/actions'
 */
        runForm.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: run.url(args, options),
            method: 'post',
        })
    
    run.form = runForm
const CollectionActionController = { run }

export default CollectionActionController