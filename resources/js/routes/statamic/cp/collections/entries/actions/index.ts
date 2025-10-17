import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryActionController.php:14
 * @route '/cp/collections/{collection}/entries/actions'
 */
export const run = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(args, options),
    method: 'post',
})

run.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/entries/actions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryActionController.php:14
 * @route '/cp/collections/{collection}/entries/actions'
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
* @see \Statamic\Http\Controllers\CP\Collections\EntryActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryActionController.php:14
 * @route '/cp/collections/{collection}/entries/actions'
 */
run.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryActionController.php:14
 * @route '/cp/collections/{collection}/entries/actions'
 */
    const runForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: run.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryActionController.php:14
 * @route '/cp/collections/{collection}/entries/actions'
 */
        runForm.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: run.url(args, options),
            method: 'post',
        })
    
    run.form = runForm
/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryActionController::bulk
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryActionController.php:71
 * @route '/cp/collections/{collection}/entries/actions/list'
 */
export const bulk = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulk.url(args, options),
    method: 'post',
})

bulk.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/entries/actions/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryActionController::bulk
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryActionController.php:71
 * @route '/cp/collections/{collection}/entries/actions/list'
 */
bulk.url = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return bulk.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntryActionController::bulk
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryActionController.php:71
 * @route '/cp/collections/{collection}/entries/actions/list'
 */
bulk.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulk.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryActionController::bulk
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryActionController.php:71
 * @route '/cp/collections/{collection}/entries/actions/list'
 */
    const bulkForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulk.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\EntryActionController::bulk
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntryActionController.php:71
 * @route '/cp/collections/{collection}/entries/actions/list'
 */
        bulkForm.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulk.url(args, options),
            method: 'post',
        })
    
    bulk.form = bulkForm
const actions = {
    run: Object.assign(run, run),
bulk: Object.assign(bulk, bulk),
}

export default actions