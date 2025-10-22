import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\PublishedTermsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/PublishedTermsController.php:12
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
export const store = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\PublishedTermsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/PublishedTermsController.php:12
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
store.url = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            taxonomy: args[0],
            term: args[1],
            site: args[2],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "site",
    ])

    const parsedArgs = {
        taxonomy: args.taxonomy,
        term: args.term,
        site: args.site,
    }

    return store.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{term}', parsedArgs.term.toString())
            .replace('{site?}', parsedArgs.site?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\PublishedTermsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/PublishedTermsController.php:12
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
store.post = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\PublishedTermsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/PublishedTermsController.php:12
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
const storeForm = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\PublishedTermsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/PublishedTermsController.php:12
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
storeForm.post = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\PublishedTermsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/PublishedTermsController.php:24
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
export const destroy = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\PublishedTermsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/PublishedTermsController.php:24
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
destroy.url = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            taxonomy: args[0],
            term: args[1],
            site: args[2],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "site",
    ])

    const parsedArgs = {
        taxonomy: args.taxonomy,
        term: args.term,
        site: args.site,
    }

    return destroy.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{term}', parsedArgs.term.toString())
            .replace('{site?}', parsedArgs.site?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\PublishedTermsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/PublishedTermsController.php:24
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
destroy.delete = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\PublishedTermsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/PublishedTermsController.php:24
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
const destroyForm = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\PublishedTermsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/PublishedTermsController.php:24
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
destroyForm.delete = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const PublishedTermsController = { store, destroy }

export default PublishedTermsController