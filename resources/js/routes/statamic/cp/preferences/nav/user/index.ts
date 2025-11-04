import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:19
* @route '/cp/nav/edit'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/nav/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:19
* @route '/cp/nav/edit'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:19
* @route '/cp/nav/edit'
*/
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:19
* @route '/cp/nav/edit'
*/
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:19
* @route '/cp/nav/edit'
*/
const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:19
* @route '/cp/nav/edit'
*/
editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:19
* @route '/cp/nav/edit'
*/
editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:24
* @route '/cp/nav'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/nav',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:24
* @route '/cp/nav'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:24
* @route '/cp/nav'
*/
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:24
* @route '/cp/nav'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:24
* @route '/cp/nav'
*/
updateForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:37
* @route '/cp/nav'
*/
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/nav',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:37
* @route '/cp/nav'
*/
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:37
* @route '/cp/nav'
*/
destroy.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:37
* @route '/cp/nav'
*/
const destroyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\Nav\UserNavController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/Nav/UserNavController.php:37
* @route '/cp/nav'
*/
destroyForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const user = {
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default user