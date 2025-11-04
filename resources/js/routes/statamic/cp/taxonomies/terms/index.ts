import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
import actions from './actions'
import preview from './preview'
import published from './published'
import revisions from './revisions'
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:26
* @route '/cp/taxonomies/{taxonomy}/terms'
*/
export const index = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/taxonomies/{taxonomy}/terms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:26
* @route '/cp/taxonomies/{taxonomy}/terms'
*/
index.url = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { taxonomy: args }
    }

    if (Array.isArray(args)) {
        args = {
            taxonomy: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        taxonomy: args.taxonomy,
    }

    return index.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:26
* @route '/cp/taxonomies/{taxonomy}/terms'
*/
index.get = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:26
* @route '/cp/taxonomies/{taxonomy}/terms'
*/
index.head = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:26
* @route '/cp/taxonomies/{taxonomy}/terms'
*/
const indexForm = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:26
* @route '/cp/taxonomies/{taxonomy}/terms'
*/
indexForm.get = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:26
* @route '/cp/taxonomies/{taxonomy}/terms'
*/
indexForm.head = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:222
* @route '/cp/taxonomies/{taxonomy}/terms/create/{site}'
*/
export const create = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/taxonomies/{taxonomy}/terms/create/{site}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:222
* @route '/cp/taxonomies/{taxonomy}/terms/create/{site}'
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
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:222
* @route '/cp/taxonomies/{taxonomy}/terms/create/{site}'
*/
create.get = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:222
* @route '/cp/taxonomies/{taxonomy}/terms/create/{site}'
*/
create.head = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:222
* @route '/cp/taxonomies/{taxonomy}/terms/create/{site}'
*/
const createForm = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:222
* @route '/cp/taxonomies/{taxonomy}/terms/create/{site}'
*/
createForm.get = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:222
* @route '/cp/taxonomies/{taxonomy}/terms/create/{site}'
*/
createForm.head = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:277
* @route '/cp/taxonomies/{taxonomy}/terms/{site}'
*/
export const store = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/taxonomies/{taxonomy}/terms/{site}',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:277
* @route '/cp/taxonomies/{taxonomy}/terms/{site}'
*/
store.url = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{site}', parsedArgs.site.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:277
* @route '/cp/taxonomies/{taxonomy}/terms/{site}'
*/
store.post = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:277
* @route '/cp/taxonomies/{taxonomy}/terms/{site}'
*/
const storeForm = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:277
* @route '/cp/taxonomies/{taxonomy}/terms/{site}'
*/
storeForm.post = (args: { taxonomy: string | number, site: string | number } | [taxonomy: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:86
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
export const edit = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:86
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
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
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:86
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
edit.get = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:86
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
edit.head = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:86
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
const editForm = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:86
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
editForm.get = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:86
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
editForm.head = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\RestoreTermRevisionController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/RestoreTermRevisionController.php:11
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/restore-revision'
*/
export const restoreRevision = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: restoreRevision.url(args, options),
    method: 'post',
})

restoreRevision.definition = {
    methods: ["post"],
    url: '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/restore-revision',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\RestoreTermRevisionController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/RestoreTermRevisionController.php:11
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/restore-revision'
*/
restoreRevision.url = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions) => {
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

    return restoreRevision.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{term}', parsedArgs.term.toString())
            .replace('{site?}', parsedArgs.site?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\RestoreTermRevisionController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/RestoreTermRevisionController.php:11
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/restore-revision'
*/
restoreRevision.post = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: restoreRevision.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\RestoreTermRevisionController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/RestoreTermRevisionController.php:11
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/restore-revision'
*/
const restoreRevisionForm = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restoreRevision.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\RestoreTermRevisionController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/RestoreTermRevisionController.php:11
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}/restore-revision'
*/
restoreRevisionForm.post = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restoreRevision.url(args, options),
    method: 'post',
})

restoreRevision.form = restoreRevisionForm

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:163
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
export const update = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:163
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
update.url = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{term}', parsedArgs.term.toString())
            .replace('{site?}', parsedArgs.site?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:163
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
update.patch = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:163
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
const updateForm = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TermsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TermsController.php:163
* @route '/cp/taxonomies/{taxonomy}/terms/{term}/{site?}'
*/
updateForm.patch = (args: { taxonomy: string | number, term: string | number, site?: string | number } | [taxonomy: string | number, term: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const terms = {
    index: Object.assign(index, index),
    actions: Object.assign(actions, actions),
    create: Object.assign(create, create),
    preview: Object.assign(preview, preview),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    published: Object.assign(published, published),
    revisions: Object.assign(revisions, revisions),
    restoreRevision: Object.assign(restoreRevision, restoreRevision),
    update: Object.assign(update, update),
}

export default terms