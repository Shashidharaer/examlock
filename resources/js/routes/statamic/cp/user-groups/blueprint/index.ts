import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupBlueprintController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupBlueprintController.php:19
* @route '/cp/user-groups/blueprint'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/user-groups/blueprint',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupBlueprintController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupBlueprintController.php:19
* @route '/cp/user-groups/blueprint'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupBlueprintController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupBlueprintController.php:19
* @route '/cp/user-groups/blueprint'
*/
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupBlueprintController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupBlueprintController.php:19
* @route '/cp/user-groups/blueprint'
*/
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupBlueprintController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupBlueprintController.php:19
* @route '/cp/user-groups/blueprint'
*/
const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupBlueprintController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupBlueprintController.php:19
* @route '/cp/user-groups/blueprint'
*/
editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupBlueprintController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupBlueprintController.php:19
* @route '/cp/user-groups/blueprint'
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
* @see \Statamic\Http\Controllers\CP\Users\UserGroupBlueprintController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupBlueprintController.php:29
* @route '/cp/user-groups/blueprint'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/user-groups/blueprint',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupBlueprintController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupBlueprintController.php:29
* @route '/cp/user-groups/blueprint'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupBlueprintController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupBlueprintController.php:29
* @route '/cp/user-groups/blueprint'
*/
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserGroupBlueprintController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupBlueprintController.php:29
* @route '/cp/user-groups/blueprint'
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
* @see \Statamic\Http\Controllers\CP\Users\UserGroupBlueprintController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserGroupBlueprintController.php:29
* @route '/cp/user-groups/blueprint'
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

const blueprint = {
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
}

export default blueprint