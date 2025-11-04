import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\SelectSiteController::select
* @see vendor/statamic/cms/src/Http/Controllers/CP/SelectSiteController.php:9
* @route '/cp/select-site/{handle}'
*/
export const select = (args: { handle: string | number } | [handle: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: select.url(args, options),
    method: 'get',
})

select.definition = {
    methods: ["get","head"],
    url: '/cp/select-site/{handle}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\SelectSiteController::select
* @see vendor/statamic/cms/src/Http/Controllers/CP/SelectSiteController.php:9
* @route '/cp/select-site/{handle}'
*/
select.url = (args: { handle: string | number } | [handle: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { handle: args }
    }

    if (Array.isArray(args)) {
        args = {
            handle: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        handle: args.handle,
    }

    return select.definition.url
            .replace('{handle}', parsedArgs.handle.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\SelectSiteController::select
* @see vendor/statamic/cms/src/Http/Controllers/CP/SelectSiteController.php:9
* @route '/cp/select-site/{handle}'
*/
select.get = (args: { handle: string | number } | [handle: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: select.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\SelectSiteController::select
* @see vendor/statamic/cms/src/Http/Controllers/CP/SelectSiteController.php:9
* @route '/cp/select-site/{handle}'
*/
select.head = (args: { handle: string | number } | [handle: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: select.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\SelectSiteController::select
* @see vendor/statamic/cms/src/Http/Controllers/CP/SelectSiteController.php:9
* @route '/cp/select-site/{handle}'
*/
const selectForm = (args: { handle: string | number } | [handle: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: select.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\SelectSiteController::select
* @see vendor/statamic/cms/src/Http/Controllers/CP/SelectSiteController.php:9
* @route '/cp/select-site/{handle}'
*/
selectForm.get = (args: { handle: string | number } | [handle: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: select.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\SelectSiteController::select
* @see vendor/statamic/cms/src/Http/Controllers/CP/SelectSiteController.php:9
* @route '/cp/select-site/{handle}'
*/
selectForm.head = (args: { handle: string | number } | [handle: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: select.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

select.form = selectForm

const SelectSiteController = { select }

export default SelectSiteController