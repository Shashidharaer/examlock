import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Assets\ThumbnailController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ThumbnailController.php:62
 * @route '/cp/thumbnails/{encoded_asset}/{size?}/{orientation?}'
 */
export const show = (args: { encoded_asset: string | number, size?: string | number, orientation?: string | number } | [encoded_asset: string | number, size: string | number, orientation: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/thumbnails/{encoded_asset}/{size?}/{orientation?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\ThumbnailController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ThumbnailController.php:62
 * @route '/cp/thumbnails/{encoded_asset}/{size?}/{orientation?}'
 */
show.url = (args: { encoded_asset: string | number, size?: string | number, orientation?: string | number } | [encoded_asset: string | number, size: string | number, orientation: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    encoded_asset: args[0],
                    size: args[1],
                    orientation: args[2],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "size",
            "orientation",
        ])

    const parsedArgs = {
                        encoded_asset: args.encoded_asset,
                                size: args.size,
                                orientation: args.orientation,
                }

    return show.definition.url
            .replace('{encoded_asset}', parsedArgs.encoded_asset.toString())
            .replace('{size?}', parsedArgs.size?.toString() ?? '')
            .replace('{orientation?}', parsedArgs.orientation?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\ThumbnailController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ThumbnailController.php:62
 * @route '/cp/thumbnails/{encoded_asset}/{size?}/{orientation?}'
 */
show.get = (args: { encoded_asset: string | number, size?: string | number, orientation?: string | number } | [encoded_asset: string | number, size: string | number, orientation: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Assets\ThumbnailController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ThumbnailController.php:62
 * @route '/cp/thumbnails/{encoded_asset}/{size?}/{orientation?}'
 */
show.head = (args: { encoded_asset: string | number, size?: string | number, orientation?: string | number } | [encoded_asset: string | number, size: string | number, orientation: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\ThumbnailController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ThumbnailController.php:62
 * @route '/cp/thumbnails/{encoded_asset}/{size?}/{orientation?}'
 */
    const showForm = (args: { encoded_asset: string | number, size?: string | number, orientation?: string | number } | [encoded_asset: string | number, size: string | number, orientation: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\ThumbnailController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ThumbnailController.php:62
 * @route '/cp/thumbnails/{encoded_asset}/{size?}/{orientation?}'
 */
        showForm.get = (args: { encoded_asset: string | number, size?: string | number, orientation?: string | number } | [encoded_asset: string | number, size: string | number, orientation: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Assets\ThumbnailController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ThumbnailController.php:62
 * @route '/cp/thumbnails/{encoded_asset}/{size?}/{orientation?}'
 */
        showForm.head = (args: { encoded_asset: string | number, size?: string | number, orientation?: string | number } | [encoded_asset: string | number, size: string | number, orientation: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const ThumbnailController = { show }

export default ThumbnailController