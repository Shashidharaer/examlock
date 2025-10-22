import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
import blueprint from './blueprint'
/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:20
* @route '/cp/user-groups'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/user-groups',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:20
* @route '/cp/user-groups'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:20
* @route '/cp/user-groups'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:20
* @route '/cp/user-groups'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:20
* @route '/cp/user-groups'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:20
* @route '/cp/user-groups'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:20
* @route '/cp/user-groups'
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
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:137
* @route '/cp/user-groups/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/user-groups/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:137
* @route '/cp/user-groups/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:137
* @route '/cp/user-groups/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:137
* @route '/cp/user-groups/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:137
* @route '/cp/user-groups/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:137
* @route '/cp/user-groups/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:137
* @route '/cp/user-groups/create'
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
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:163
* @route '/cp/user-groups'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/user-groups',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:163
* @route '/cp/user-groups'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:163
* @route '/cp/user-groups'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:163
* @route '/cp/user-groups'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:163
* @route '/cp/user-groups'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:46
* @route '/cp/user-groups/{user_group}'
*/
export const show = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/user-groups/{user_group}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:46
* @route '/cp/user-groups/{user_group}'
*/
show.url = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_group: args }
    }

    if (Array.isArray(args)) {
        args = {
            user_group: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user_group: args.user_group,
    }

    return show.definition.url
            .replace('{user_group}', parsedArgs.user_group.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:46
* @route '/cp/user-groups/{user_group}'
*/
show.get = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:46
* @route '/cp/user-groups/{user_group}'
*/
show.head = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:46
* @route '/cp/user-groups/{user_group}'
*/
const showForm = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:46
* @route '/cp/user-groups/{user_group}'
*/
showForm.get = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:46
* @route '/cp/user-groups/{user_group}'
*/
showForm.head = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:62
* @route '/cp/user-groups/{user_group}/edit'
*/
export const edit = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/user-groups/{user_group}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:62
* @route '/cp/user-groups/{user_group}/edit'
*/
edit.url = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_group: args }
    }

    if (Array.isArray(args)) {
        args = {
            user_group: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user_group: args.user_group,
    }

    return edit.definition.url
            .replace('{user_group}', parsedArgs.user_group.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:62
* @route '/cp/user-groups/{user_group}/edit'
*/
edit.get = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:62
* @route '/cp/user-groups/{user_group}/edit'
*/
edit.head = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:62
* @route '/cp/user-groups/{user_group}/edit'
*/
const editForm = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:62
* @route '/cp/user-groups/{user_group}/edit'
*/
editForm.get = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:62
* @route '/cp/user-groups/{user_group}/edit'
*/
editForm.head = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:104
* @route '/cp/user-groups/{user_group}'
*/
export const update = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/cp/user-groups/{user_group}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:104
* @route '/cp/user-groups/{user_group}'
*/
update.url = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_group: args }
    }

    if (Array.isArray(args)) {
        args = {
            user_group: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user_group: args.user_group,
    }

    return update.definition.url
            .replace('{user_group}', parsedArgs.user_group.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:104
* @route '/cp/user-groups/{user_group}'
*/
update.put = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:104
* @route '/cp/user-groups/{user_group}'
*/
update.patch = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:104
* @route '/cp/user-groups/{user_group}'
*/
const updateForm = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:104
* @route '/cp/user-groups/{user_group}'
*/
updateForm.put = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:104
* @route '/cp/user-groups/{user_group}'
*/
updateForm.patch = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:201
* @route '/cp/user-groups/{user_group}'
*/
export const destroy = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/user-groups/{user_group}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:201
* @route '/cp/user-groups/{user_group}'
*/
destroy.url = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_group: args }
    }

    if (Array.isArray(args)) {
        args = {
            user_group: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user_group: args.user_group,
    }

    return destroy.definition.url
            .replace('{user_group}', parsedArgs.user_group.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:201
* @route '/cp/user-groups/{user_group}'
*/
destroy.delete = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:201
* @route '/cp/user-groups/{user_group}'
*/
const destroyForm = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupsController.php:201
* @route '/cp/user-groups/{user_group}'
*/
destroyForm.delete = (args: { user_group: string | number } | [user_group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const userGroups = {
    blueprint: Object.assign(blueprint, blueprint),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default userGroups