import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:31
* @route '/cp/collections/{collection}/entries'
*/
export const index = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/collections/{collection}/entries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:31
* @route '/cp/collections/{collection}/entries'
*/
index.url = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { collection: args }
    }

    if (Array.isArray(args)) {
        args = {
            collection: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        collection: args.collection,
    }

    return index.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:31
* @route '/cp/collections/{collection}/entries'
*/
index.get = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:31
* @route '/cp/collections/{collection}/entries'
*/
index.head = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:31
* @route '/cp/collections/{collection}/entries'
*/
const indexForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:31
* @route '/cp/collections/{collection}/entries'
*/
indexForm.get = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:31
* @route '/cp/collections/{collection}/entries'
*/
indexForm.head = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:291
* @route '/cp/collections/{collection}/entries/create/{site}'
*/
export const create = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/collections/{collection}/entries/create/{site}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:291
* @route '/cp/collections/{collection}/entries/create/{site}'
*/
create.url = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            collection: args[0],
            site: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        collection: args.collection,
        site: args.site,
    }

    return create.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{site}', parsedArgs.site.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:291
* @route '/cp/collections/{collection}/entries/create/{site}'
*/
create.get = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:291
* @route '/cp/collections/{collection}/entries/create/{site}'
*/
create.head = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:291
* @route '/cp/collections/{collection}/entries/create/{site}'
*/
const createForm = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:291
* @route '/cp/collections/{collection}/entries/create/{site}'
*/
createForm.get = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:291
* @route '/cp/collections/{collection}/entries/create/{site}'
*/
createForm.head = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:368
* @route '/cp/collections/{collection}/entries/{site}'
*/
export const store = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/entries/{site}',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:368
* @route '/cp/collections/{collection}/entries/{site}'
*/
store.url = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            collection: args[0],
            site: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        collection: args.collection,
        site: args.site,
    }

    return store.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{site}', parsedArgs.site.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:368
* @route '/cp/collections/{collection}/entries/{site}'
*/
store.post = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:368
* @route '/cp/collections/{collection}/entries/{site}'
*/
const storeForm = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:368
* @route '/cp/collections/{collection}/entries/{site}'
*/
storeForm.post = (args: { collection: string | number, site: string | number } | [collection: string | number, site: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:91
* @route '/cp/collections/{collection}/entries/{entry}'
*/
export const edit = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/collections/{collection}/entries/{entry}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:91
* @route '/cp/collections/{collection}/entries/{entry}'
*/
edit.url = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            collection: args[0],
            entry: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        collection: args.collection,
        entry: args.entry,
    }

    return edit.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{entry}', parsedArgs.entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:91
* @route '/cp/collections/{collection}/entries/{entry}'
*/
edit.get = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:91
* @route '/cp/collections/{collection}/entries/{entry}'
*/
edit.head = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:91
* @route '/cp/collections/{collection}/entries/{entry}'
*/
const editForm = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:91
* @route '/cp/collections/{collection}/entries/{entry}'
*/
editForm.get = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:91
* @route '/cp/collections/{collection}/entries/{entry}'
*/
editForm.head = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:184
* @route '/cp/collections/{collection}/entries/{entry}'
*/
export const update = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/collections/{collection}/entries/{entry}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:184
* @route '/cp/collections/{collection}/entries/{entry}'
*/
update.url = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            collection: args[0],
            entry: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        collection: args.collection,
        entry: args.entry,
    }

    return update.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{entry}', parsedArgs.entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:184
* @route '/cp/collections/{collection}/entries/{entry}'
*/
update.patch = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:184
* @route '/cp/collections/{collection}/entries/{entry}'
*/
const updateForm = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\EntriesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EntriesController.php:184
* @route '/cp/collections/{collection}/entries/{entry}'
*/
updateForm.patch = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const EntriesController = { index, create, store, edit, update }

export default EntriesController