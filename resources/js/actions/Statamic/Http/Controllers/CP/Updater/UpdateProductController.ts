import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:15
 * @route '/cp/updater/{marketplaceProductSlug}'
 */
export const show = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/updater/{marketplaceProductSlug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:15
 * @route '/cp/updater/{marketplaceProductSlug}'
 */
show.url = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { marketplaceProductSlug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    marketplaceProductSlug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        marketplaceProductSlug: args.marketplaceProductSlug,
                }

    return show.definition.url
            .replace('{marketplaceProductSlug}', parsedArgs.marketplaceProductSlug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:15
 * @route '/cp/updater/{marketplaceProductSlug}'
 */
show.get = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:15
 * @route '/cp/updater/{marketplaceProductSlug}'
 */
show.head = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:15
 * @route '/cp/updater/{marketplaceProductSlug}'
 */
    const showForm = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:15
 * @route '/cp/updater/{marketplaceProductSlug}'
 */
        showForm.get = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::show
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:15
 * @route '/cp/updater/{marketplaceProductSlug}'
 */
        showForm.head = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::changelog
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:35
 * @route '/cp/updater/{marketplaceProductSlug}/changelog'
 */
export const changelog = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: changelog.url(args, options),
    method: 'get',
})

changelog.definition = {
    methods: ["get","head"],
    url: '/cp/updater/{marketplaceProductSlug}/changelog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::changelog
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:35
 * @route '/cp/updater/{marketplaceProductSlug}/changelog'
 */
changelog.url = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { marketplaceProductSlug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    marketplaceProductSlug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        marketplaceProductSlug: args.marketplaceProductSlug,
                }

    return changelog.definition.url
            .replace('{marketplaceProductSlug}', parsedArgs.marketplaceProductSlug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::changelog
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:35
 * @route '/cp/updater/{marketplaceProductSlug}/changelog'
 */
changelog.get = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: changelog.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::changelog
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:35
 * @route '/cp/updater/{marketplaceProductSlug}/changelog'
 */
changelog.head = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: changelog.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::changelog
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:35
 * @route '/cp/updater/{marketplaceProductSlug}/changelog'
 */
    const changelogForm = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: changelog.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::changelog
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:35
 * @route '/cp/updater/{marketplaceProductSlug}/changelog'
 */
        changelogForm.get = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: changelog.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::changelog
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:35
 * @route '/cp/updater/{marketplaceProductSlug}/changelog'
 */
        changelogForm.head = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: changelog.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    changelog.form = changelogForm
const UpdateProductController = { show, changelog }

export default UpdateProductController