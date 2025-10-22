import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:17
* @route '/cp/navigation'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/navigation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:17
* @route '/cp/navigation'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:17
* @route '/cp/navigation'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:17
* @route '/cp/navigation'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:17
* @route '/cp/navigation'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:17
* @route '/cp/navigation'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:17
* @route '/cp/navigation'
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
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:147
* @route '/cp/navigation/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/navigation/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:147
* @route '/cp/navigation/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:147
* @route '/cp/navigation/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:147
* @route '/cp/navigation/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:147
* @route '/cp/navigation/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:147
* @route '/cp/navigation/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:147
* @route '/cp/navigation/create'
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
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:154
* @route '/cp/navigation'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/navigation',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:154
* @route '/cp/navigation'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:154
* @route '/cp/navigation'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:154
* @route '/cp/navigation'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:154
* @route '/cp/navigation'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:68
* @route '/cp/navigation/{navigation}'
*/
export const show = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/navigation/{navigation}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:68
* @route '/cp/navigation/{navigation}'
*/
show.url = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { navigation: args }
    }

    if (Array.isArray(args)) {
        args = {
            navigation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        navigation: args.navigation,
    }

    return show.definition.url
            .replace('{navigation}', parsedArgs.navigation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:68
* @route '/cp/navigation/{navigation}'
*/
show.get = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:68
* @route '/cp/navigation/{navigation}'
*/
show.head = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:68
* @route '/cp/navigation/{navigation}'
*/
const showForm = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:68
* @route '/cp/navigation/{navigation}'
*/
showForm.get = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:68
* @route '/cp/navigation/{navigation}'
*/
showForm.head = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:39
* @route '/cp/navigation/{navigation}/edit'
*/
export const edit = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/navigation/{navigation}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:39
* @route '/cp/navigation/{navigation}/edit'
*/
edit.url = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { navigation: args }
    }

    if (Array.isArray(args)) {
        args = {
            navigation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        navigation: args.navigation,
    }

    return edit.definition.url
            .replace('{navigation}', parsedArgs.navigation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:39
* @route '/cp/navigation/{navigation}/edit'
*/
edit.get = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:39
* @route '/cp/navigation/{navigation}/edit'
*/
edit.head = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:39
* @route '/cp/navigation/{navigation}/edit'
*/
const editForm = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:39
* @route '/cp/navigation/{navigation}/edit'
*/
editForm.get = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:39
* @route '/cp/navigation/{navigation}/edit'
*/
editForm.head = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:107
* @route '/cp/navigation/{navigation}'
*/
export const update = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/cp/navigation/{navigation}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:107
* @route '/cp/navigation/{navigation}'
*/
update.url = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { navigation: args }
    }

    if (Array.isArray(args)) {
        args = {
            navigation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        navigation: args.navigation,
    }

    return update.definition.url
            .replace('{navigation}', parsedArgs.navigation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:107
* @route '/cp/navigation/{navigation}'
*/
update.put = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:107
* @route '/cp/navigation/{navigation}'
*/
update.patch = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:107
* @route '/cp/navigation/{navigation}'
*/
const updateForm = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:107
* @route '/cp/navigation/{navigation}'
*/
updateForm.put = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:107
* @route '/cp/navigation/{navigation}'
*/
updateForm.patch = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:248
* @route '/cp/navigation/{navigation}'
*/
export const destroy = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/navigation/{navigation}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:248
* @route '/cp/navigation/{navigation}'
*/
destroy.url = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { navigation: args }
    }

    if (Array.isArray(args)) {
        args = {
            navigation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        navigation: args.navigation,
    }

    return destroy.definition.url
            .replace('{navigation}', parsedArgs.navigation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:248
* @route '/cp/navigation/{navigation}'
*/
destroy.delete = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:248
* @route '/cp/navigation/{navigation}'
*/
const destroyForm = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationController.php:248
* @route '/cp/navigation/{navigation}'
*/
destroyForm.delete = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const NavigationController = { index, create, store, show, edit, update, destroy }

export default NavigationController