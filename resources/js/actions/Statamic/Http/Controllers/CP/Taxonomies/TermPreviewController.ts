import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/create/{site}/preview'
*/
export const create = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(args, options),
    method: 'post',
})

create.definition = {
    methods: ["post"],
    url: '/cp/taxonomies/{taxonomy}/terms/create/{site}/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/create/{site}/preview'
*/
create.url = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            taxonomy: args[0],
            site: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        taxonomy: args.taxonomy,
        site: args.site,
    }

    return create.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{site}', parsedArgs.site.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/create/{site}/preview'
*/
create.post = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/create/{site}/preview'
*/
const createForm = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: create.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/create/{site}/preview'
*/
createForm.post = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: create.url(args, options),
    method: 'post',
})

create.form = createForm

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:18
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview'
*/
export const edit = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: edit.url(args, options),
    method: 'post',
})

edit.definition = {
    methods: ["post"],
    url: '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:18
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview'
*/
edit.url = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{term}', parsedArgs.term.toString())
            .replace('{site?}', parsedArgs.site?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:18
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview'
*/
edit.post = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: edit.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:18
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview'
*/
const editForm = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: edit.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:18
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview'
*/
editForm.post = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: edit.url(args, options),
    method: 'post',
})

edit.form = editForm

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview'
*/
export const show = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview'
*/
show.url = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{term}', parsedArgs.term.toString())
            .replace('{site?}', parsedArgs.site?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview'
*/
show.get = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview'
*/
show.head = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview'
*/
const showForm = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview'
*/
showForm.get = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermPreviewController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermPreviewController.php:13
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/preview'
*/
showForm.head = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const TermPreviewController = { create, edit, show }

export default TermPreviewController