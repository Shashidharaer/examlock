import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::product
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:15
 * @route '/cp/updater/{marketplaceProductSlug}'
 */
export const product = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: product.url(args, options),
    method: 'get',
})

product.definition = {
    methods: ["get","head"],
    url: '/cp/updater/{marketplaceProductSlug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::product
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:15
 * @route '/cp/updater/{marketplaceProductSlug}'
 */
product.url = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return product.definition.url
            .replace('{marketplaceProductSlug}', parsedArgs.marketplaceProductSlug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::product
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:15
 * @route '/cp/updater/{marketplaceProductSlug}'
 */
product.get = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: product.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::product
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:15
 * @route '/cp/updater/{marketplaceProductSlug}'
 */
product.head = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: product.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::product
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:15
 * @route '/cp/updater/{marketplaceProductSlug}'
 */
    const productForm = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: product.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::product
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:15
 * @route '/cp/updater/{marketplaceProductSlug}'
 */
        productForm.get = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: product.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdateProductController::product
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdateProductController.php:15
 * @route '/cp/updater/{marketplaceProductSlug}'
 */
        productForm.head = (args: { marketplaceProductSlug: string | number } | [marketplaceProductSlug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: product.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    product.form = productForm
const updater = {
    product: Object.assign(product, product),
}

export default updater