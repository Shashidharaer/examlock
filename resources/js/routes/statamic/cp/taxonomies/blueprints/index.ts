import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:20
* @route '/cp/taxonomies/{taxonomy}/blueprints'
*/
export const index = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/taxonomies/{taxonomy}/blueprints',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:20
* @route '/cp/taxonomies/{taxonomy}/blueprints'
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
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:20
* @route '/cp/taxonomies/{taxonomy}/blueprints'
*/
index.get = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:20
* @route '/cp/taxonomies/{taxonomy}/blueprints'
*/
index.head = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:20
* @route '/cp/taxonomies/{taxonomy}/blueprints'
*/
const indexForm = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:20
* @route '/cp/taxonomies/{taxonomy}/blueprints'
*/
indexForm.get = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:20
* @route '/cp/taxonomies/{taxonomy}/blueprints'
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
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:58
* @route '/cp/taxonomies/{taxonomy}/blueprints/create'
*/
export const create = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/taxonomies/{taxonomy}/blueprints/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:58
* @route '/cp/taxonomies/{taxonomy}/blueprints/create'
*/
create.url = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:58
* @route '/cp/taxonomies/{taxonomy}/blueprints/create'
*/
create.get = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:58
* @route '/cp/taxonomies/{taxonomy}/blueprints/create'
*/
create.head = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:58
* @route '/cp/taxonomies/{taxonomy}/blueprints/create'
*/
const createForm = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:58
* @route '/cp/taxonomies/{taxonomy}/blueprints/create'
*/
createForm.get = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:58
* @route '/cp/taxonomies/{taxonomy}/blueprints/create'
*/
createForm.head = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:65
* @route '/cp/taxonomies/{taxonomy}/blueprints'
*/
export const store = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/taxonomies/{taxonomy}/blueprints',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:65
* @route '/cp/taxonomies/{taxonomy}/blueprints'
*/
store.url = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:65
* @route '/cp/taxonomies/{taxonomy}/blueprints'
*/
store.post = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:65
* @route '/cp/taxonomies/{taxonomy}/blueprints'
*/
const storeForm = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:65
* @route '/cp/taxonomies/{taxonomy}/blueprints'
*/
storeForm.post = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:0
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
export const show = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:0
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
show.url = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            taxonomy: args[0],
            blueprint: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        taxonomy: args.taxonomy,
        blueprint: args.blueprint,
    }

    return show.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{blueprint}', parsedArgs.blueprint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:0
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
show.get = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:0
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
show.head = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:0
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
const showForm = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:0
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
showForm.get = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:0
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
showForm.head = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:37
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}/edit'
*/
export const edit = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:37
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}/edit'
*/
edit.url = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            taxonomy: args[0],
            blueprint: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        taxonomy: args.taxonomy,
        blueprint: args.blueprint,
    }

    return edit.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{blueprint}', parsedArgs.blueprint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:37
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}/edit'
*/
edit.get = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:37
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}/edit'
*/
edit.head = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:37
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}/edit'
*/
const editForm = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:37
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}/edit'
*/
editForm.get = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:37
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}/edit'
*/
editForm.head = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:48
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
export const update = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:48
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
update.url = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            taxonomy: args[0],
            blueprint: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        taxonomy: args.taxonomy,
        blueprint: args.blueprint,
    }

    return update.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{blueprint}', parsedArgs.blueprint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:48
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
update.put = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:48
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
update.patch = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:48
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
const updateForm = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:48
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
updateForm.put = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:48
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
updateForm.patch = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:83
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
export const destroy = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:83
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
destroy.url = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            taxonomy: args[0],
            blueprint: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        taxonomy: args.taxonomy,
        blueprint: args.blueprint,
    }

    return destroy.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace('{blueprint}', parsedArgs.blueprint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:83
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
destroy.delete = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:83
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
const destroyForm = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\TaxonomyBlueprintsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/TaxonomyBlueprintsController.php:83
* @route '/cp/taxonomies/{taxonomy}/blueprints/{blueprint}'
*/
destroyForm.delete = (args: { taxonomy: string | number, blueprint: string | number } | [taxonomy: string | number, blueprint: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\ReorderTaxonomyBlueprintsController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/ReorderTaxonomyBlueprintsController.php:18
* @route '/cp/taxonomies/{taxonomy}/blueprints/reorder'
*/
export const reorder = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/cp/taxonomies/{taxonomy}/blueprints/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\ReorderTaxonomyBlueprintsController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/ReorderTaxonomyBlueprintsController.php:18
* @route '/cp/taxonomies/{taxonomy}/blueprints/reorder'
*/
reorder.url = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return reorder.definition.url
            .replace('{taxonomy}', parsedArgs.taxonomy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\ReorderTaxonomyBlueprintsController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/ReorderTaxonomyBlueprintsController.php:18
* @route '/cp/taxonomies/{taxonomy}/blueprints/reorder'
*/
reorder.post = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\ReorderTaxonomyBlueprintsController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/ReorderTaxonomyBlueprintsController.php:18
* @route '/cp/taxonomies/{taxonomy}/blueprints/reorder'
*/
const reorderForm = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Taxonomies\ReorderTaxonomyBlueprintsController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Taxonomies/ReorderTaxonomyBlueprintsController.php:18
* @route '/cp/taxonomies/{taxonomy}/blueprints/reorder'
*/
reorderForm.post = (args: { taxonomy: string | number } | [taxonomy: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(args, options),
    method: 'post',
})

reorder.form = reorderForm

const blueprints = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    reorder: Object.assign(reorder, reorder),
}

export default blueprints