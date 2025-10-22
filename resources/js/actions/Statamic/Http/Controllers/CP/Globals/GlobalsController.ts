import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:18
* @route '/cp/globals'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/globals',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:18
* @route '/cp/globals'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:18
* @route '/cp/globals'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:18
* @route '/cp/globals'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:18
* @route '/cp/globals'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:18
* @route '/cp/globals'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:18
* @route '/cp/globals'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:135
* @route '/cp/globals/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/globals/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:135
* @route '/cp/globals/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:135
* @route '/cp/globals/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:135
* @route '/cp/globals/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:135
* @route '/cp/globals/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:135
* @route '/cp/globals/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:135
* @route '/cp/globals/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:142
* @route '/cp/globals'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/globals',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:142
* @route '/cp/globals'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:142
* @route '/cp/globals'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:142
* @route '/cp/globals'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:142
* @route '/cp/globals'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:46
* @route '/cp/globals/{global_set}/edit'
*/
export const edit = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/globals/{global_set}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:46
* @route '/cp/globals/{global_set}/edit'
*/
edit.url = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { global_set: args }
    }

    if (Array.isArray(args)) {
        args = {
            global_set: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        global_set: args.global_set,
    }

    return edit.definition.url
            .replace('{global_set}', parsedArgs.global_set.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:46
* @route '/cp/globals/{global_set}/edit'
*/
edit.get = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:46
* @route '/cp/globals/{global_set}/edit'
*/
edit.head = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:46
* @route '/cp/globals/{global_set}/edit'
*/
const editForm = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:46
* @route '/cp/globals/{global_set}/edit'
*/
editForm.get = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:46
* @route '/cp/globals/{global_set}/edit'
*/
editForm.head = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:96
* @route '/cp/globals/{global_set}'
*/
export const update = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/globals/{global_set}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:96
* @route '/cp/globals/{global_set}'
*/
update.url = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { global_set: args }
    }

    if (Array.isArray(args)) {
        args = {
            global_set: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        global_set: args.global_set,
    }

    return update.definition.url
            .replace('{global_set}', parsedArgs.global_set.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:96
* @route '/cp/globals/{global_set}'
*/
update.patch = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:96
* @route '/cp/globals/{global_set}'
*/
const updateForm = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:96
* @route '/cp/globals/{global_set}'
*/
updateForm.patch = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:174
* @route '/cp/globals/{global_set}'
*/
export const destroy = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/globals/{global_set}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:174
* @route '/cp/globals/{global_set}'
*/
destroy.url = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { global_set: args }
    }

    if (Array.isArray(args)) {
        args = {
            global_set: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        global_set: args.global_set,
    }

    return destroy.definition.url
            .replace('{global_set}', parsedArgs.global_set.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:174
* @route '/cp/globals/{global_set}'
*/
destroy.delete = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:174
* @route '/cp/globals/{global_set}'
*/
const destroyForm = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Globals\GlobalsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Globals/GlobalsController.php:174
* @route '/cp/globals/{global_set}'
*/
destroyForm.delete = (args: { global_set: string | number } | [global_set: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const GlobalsController = { index, create, store, edit, update, destroy }

export default GlobalsController