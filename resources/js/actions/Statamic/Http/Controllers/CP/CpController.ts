import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\CpController::pageNotFound
* @see vendor/statamic/cms/src/Http/Controllers/CP/CpController.php:32
* @route '/cp/{segments}'
*/
export const pageNotFound = (args: { segments: string | number } | [segments: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pageNotFound.url(args, options),
    method: 'get',
})

pageNotFound.definition = {
    methods: ["get","head"],
    url: '/cp/{segments}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\CpController::pageNotFound
* @see vendor/statamic/cms/src/Http/Controllers/CP/CpController.php:32
* @route '/cp/{segments}'
*/
pageNotFound.url = (args: { segments: string | number } | [segments: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { segments: args }
    }

    if (Array.isArray(args)) {
        args = {
            segments: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        segments: args.segments,
    }

    return pageNotFound.definition.url
            .replace('{segments}', parsedArgs.segments.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\CpController::pageNotFound
* @see vendor/statamic/cms/src/Http/Controllers/CP/CpController.php:32
* @route '/cp/{segments}'
*/
pageNotFound.get = (args: { segments: string | number } | [segments: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pageNotFound.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\CpController::pageNotFound
* @see vendor/statamic/cms/src/Http/Controllers/CP/CpController.php:32
* @route '/cp/{segments}'
*/
pageNotFound.head = (args: { segments: string | number } | [segments: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pageNotFound.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\CpController::pageNotFound
* @see vendor/statamic/cms/src/Http/Controllers/CP/CpController.php:32
* @route '/cp/{segments}'
*/
const pageNotFoundForm = (args: { segments: string | number } | [segments: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pageNotFound.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\CpController::pageNotFound
* @see vendor/statamic/cms/src/Http/Controllers/CP/CpController.php:32
* @route '/cp/{segments}'
*/
pageNotFoundForm.get = (args: { segments: string | number } | [segments: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pageNotFound.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\CpController::pageNotFound
* @see vendor/statamic/cms/src/Http/Controllers/CP/CpController.php:32
* @route '/cp/{segments}'
*/
pageNotFoundForm.head = (args: { segments: string | number } | [segments: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: pageNotFound.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

pageNotFound.form = pageNotFoundForm

const CpController = { pageNotFound }

export default CpController