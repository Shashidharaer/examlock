import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions'
*/
export const index = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions'
*/
index.url = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{term}', parsedArgs.term.toString())
            .replace('{site?}', parsedArgs.site?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions'
*/
index.get = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions'
*/
index.head = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions'
*/
const indexForm = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions'
*/
indexForm.get = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions'
*/
indexForm.head = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:35
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions'
*/
export const store = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:35
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions'
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
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:35
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions'
*/
store.post = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:35
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions'
*/
const storeForm = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:35
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions'
*/
storeForm.post = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:45
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions/{revision}'
*/
export const show = (args: { taxonomy: string | number, term: string | number, site?: string | number, revision: string | number } | [taxonomy: string | number, term: string | number, site: string | number, revision: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions/{revision}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:45
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions/{revision}'
*/
show.url = (args: { taxonomy: string | number, term: string | number, site?: string | number, revision: string | number } | [taxonomy: string | number, term: string | number, site: string | number, revision: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            taxonomy: args[0],
            term: args[1],
            site: args[2],
            revision: args[3],
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
        revision: args.revision,
    }

    return show.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{term}', parsedArgs.term.toString())
            .replace('{site?}', parsedArgs.site?.toString() ?? '')
            .replace('{revision}', parsedArgs.revision.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:45
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions/{revision}'
*/
show.get = (args: { taxonomy: string | number, term: string | number, site?: string | number, revision: string | number } | [taxonomy: string | number, term: string | number, site: string | number, revision: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:45
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions/{revision}'
*/
show.head = (args: { taxonomy: string | number, term: string | number, site?: string | number, revision: string | number } | [taxonomy: string | number, term: string | number, site: string | number, revision: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:45
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions/{revision}'
*/
const showForm = (args: { taxonomy: string | number, term: string | number, site?: string | number, revision: string | number } | [taxonomy: string | number, term: string | number, site: string | number, revision: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:45
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions/{revision}'
*/
showForm.get = (args: { taxonomy: string | number, term: string | number, site?: string | number, revision: string | number } | [taxonomy: string | number, term: string | number, site: string | number, revision: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermRevisionsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermRevisionsController.php:45
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/revisions/{revision}'
*/
showForm.head = (args: { taxonomy: string | number, term: string | number, site?: string | number, revision: string | number } | [taxonomy: string | number, term: string | number, site: string | number, revision: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const TermRevisionsController = { index, store, show }

export default TermRevisionsController