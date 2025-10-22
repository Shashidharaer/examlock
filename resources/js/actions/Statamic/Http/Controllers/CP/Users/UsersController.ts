import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:34
* @route '/cp/users'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:34
* @route '/cp/users'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:34
* @route '/cp/users'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:34
* @route '/cp/users'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:34
* @route '/cp/users'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:34
* @route '/cp/users'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:34
* @route '/cp/users'
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
* @see \Statamic\Http\Controllers\CP\Users\UsersController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:128
* @route '/cp/users/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:128
* @route '/cp/users/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:128
* @route '/cp/users/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:128
* @route '/cp/users/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:128
* @route '/cp/users/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:128
* @route '/cp/users/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:128
* @route '/cp/users/create'
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
* @see \Statamic\Http\Controllers\CP\Users\UsersController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:163
* @route '/cp/users'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/users',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:163
* @route '/cp/users'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:163
* @route '/cp/users'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:163
* @route '/cp/users'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:163
* @route '/cp/users'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:0
* @route '/cp/users/{user}'
*/
export const show = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/users/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:0
* @route '/cp/users/{user}'
*/
show.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: args.user,
    }

    return show.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:0
* @route '/cp/users/{user}'
*/
show.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:0
* @route '/cp/users/{user}'
*/
show.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:0
* @route '/cp/users/{user}'
*/
const showForm = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:0
* @route '/cp/users/{user}'
*/
showForm.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:0
* @route '/cp/users/{user}'
*/
showForm.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Users\UsersController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:221
* @route '/cp/users/{user}/edit'
*/
export const edit = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/users/{user}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:221
* @route '/cp/users/{user}/edit'
*/
edit.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: args.user,
    }

    return edit.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:221
* @route '/cp/users/{user}/edit'
*/
edit.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:221
* @route '/cp/users/{user}/edit'
*/
edit.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:221
* @route '/cp/users/{user}/edit'
*/
const editForm = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:221
* @route '/cp/users/{user}/edit'
*/
editForm.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:221
* @route '/cp/users/{user}/edit'
*/
editForm.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Users\UsersController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:266
* @route '/cp/users/{user}'
*/
export const update = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/cp/users/{user}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:266
* @route '/cp/users/{user}'
*/
update.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: args.user,
    }

    return update.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:266
* @route '/cp/users/{user}'
*/
update.put = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:266
* @route '/cp/users/{user}'
*/
update.patch = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:266
* @route '/cp/users/{user}'
*/
const updateForm = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:266
* @route '/cp/users/{user}'
*/
updateForm.put = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UsersController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UsersController.php:266
* @route '/cp/users/{user}'
*/
updateForm.patch = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const UsersController = { index, create, store, show, edit, update }

export default UsersController