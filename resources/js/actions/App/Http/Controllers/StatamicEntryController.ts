import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StatamicEntryController::show
 * @see app/Http/Controllers/StatamicEntryController.php:17
 * @route '/{collection}/{slug}'
 */
export const show = (args: { collection: string | number, slug: string | number } | [collection: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/{collection}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StatamicEntryController::show
 * @see app/Http/Controllers/StatamicEntryController.php:17
 * @route '/{collection}/{slug}'
 */
show.url = (args: { collection: string | number, slug: string | number } | [collection: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    collection: args[0],
                    slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        collection: args.collection,
                                slug: args.slug,
                }

    return show.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StatamicEntryController::show
 * @see app/Http/Controllers/StatamicEntryController.php:17
 * @route '/{collection}/{slug}'
 */
show.get = (args: { collection: string | number, slug: string | number } | [collection: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StatamicEntryController::show
 * @see app/Http/Controllers/StatamicEntryController.php:17
 * @route '/{collection}/{slug}'
 */
show.head = (args: { collection: string | number, slug: string | number } | [collection: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StatamicEntryController::show
 * @see app/Http/Controllers/StatamicEntryController.php:17
 * @route '/{collection}/{slug}'
 */
    const showForm = (args: { collection: string | number, slug: string | number } | [collection: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StatamicEntryController::show
 * @see app/Http/Controllers/StatamicEntryController.php:17
 * @route '/{collection}/{slug}'
 */
        showForm.get = (args: { collection: string | number, slug: string | number } | [collection: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StatamicEntryController::show
 * @see app/Http/Controllers/StatamicEntryController.php:17
 * @route '/{collection}/{slug}'
 */
        showForm.head = (args: { collection: string | number, slug: string | number } | [collection: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const StatamicEntryController = { show }

export default StatamicEntryController