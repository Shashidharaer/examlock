import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Preferences\DefaultPreferenceController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/DefaultPreferenceController.php:13
* @route '/cp/preferences/default/edit'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/preferences/default/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Preferences\DefaultPreferenceController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/DefaultPreferenceController.php:13
* @route '/cp/preferences/default/edit'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Preferences\DefaultPreferenceController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/DefaultPreferenceController.php:13
* @route '/cp/preferences/default/edit'
*/
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\DefaultPreferenceController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/DefaultPreferenceController.php:13
* @route '/cp/preferences/default/edit'
*/
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\DefaultPreferenceController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/DefaultPreferenceController.php:13
* @route '/cp/preferences/default/edit'
*/
const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\DefaultPreferenceController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/DefaultPreferenceController.php:13
* @route '/cp/preferences/default/edit'
*/
editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\DefaultPreferenceController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/DefaultPreferenceController.php:13
* @route '/cp/preferences/default/edit'
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
* @see \Statamic\Http\Controllers\CP\Preferences\DefaultPreferenceController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/DefaultPreferenceController.php:22
* @route '/cp/preferences/default'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/preferences/default',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Preferences\DefaultPreferenceController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/DefaultPreferenceController.php:22
* @route '/cp/preferences/default'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Preferences\DefaultPreferenceController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/DefaultPreferenceController.php:22
* @route '/cp/preferences/default'
*/
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\DefaultPreferenceController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/DefaultPreferenceController.php:22
* @route '/cp/preferences/default'
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
* @see \Statamic\Http\Controllers\CP\Preferences\DefaultPreferenceController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/DefaultPreferenceController.php:22
* @route '/cp/preferences/default'
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

const defaultMethod = {
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
}

export default defaultMethod