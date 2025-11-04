import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Assets\PdfController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/PdfController.php:16
* @route '/cp/pdfs/{encoded_asset}'
*/
export const show = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/pdfs/{encoded_asset}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\PdfController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/PdfController.php:16
* @route '/cp/pdfs/{encoded_asset}'
*/
show.url = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { encoded_asset: args }
    }

    if (Array.isArray(args)) {
        args = {
            encoded_asset: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        encoded_asset: args.encoded_asset,
    }

    return show.definition.url
            .replace('{encoded_asset}', parsedArgs.encoded_asset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\PdfController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/PdfController.php:16
* @route '/cp/pdfs/{encoded_asset}'
*/
show.get = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\PdfController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/PdfController.php:16
* @route '/cp/pdfs/{encoded_asset}'
*/
show.head = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\PdfController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/PdfController.php:16
* @route '/cp/pdfs/{encoded_asset}'
*/
const showForm = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\PdfController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/PdfController.php:16
* @route '/cp/pdfs/{encoded_asset}'
*/
showForm.get = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\PdfController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/PdfController.php:16
* @route '/cp/pdfs/{encoded_asset}'
*/
showForm.head = (args: { encoded_asset: string | number } | [encoded_asset: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const PdfController = { show }

export default PdfController