import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Sites\SitesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Sites/SitesController.php:16
* @route '/cp/sites'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/sites',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Sites\SitesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Sites/SitesController.php:16
* @route '/cp/sites'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Sites\SitesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Sites/SitesController.php:16
* @route '/cp/sites'
*/
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Sites\SitesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Sites/SitesController.php:16
* @route '/cp/sites'
*/
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Sites\SitesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Sites/SitesController.php:16
* @route '/cp/sites'
*/
const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Sites\SitesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Sites/SitesController.php:16
* @route '/cp/sites'
*/
editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Sites\SitesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Sites/SitesController.php:16
* @route '/cp/sites'
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
* @see \Statamic\Http\Controllers\CP\Sites\SitesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Sites/SitesController.php:46
* @route '/cp/sites'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/sites',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Sites\SitesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Sites/SitesController.php:46
* @route '/cp/sites'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Sites\SitesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Sites/SitesController.php:46
* @route '/cp/sites'
*/
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Sites\SitesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Sites/SitesController.php:46
* @route '/cp/sites'
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
* @see \Statamic\Http\Controllers\CP\Sites\SitesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Sites/SitesController.php:46
* @route '/cp/sites'
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

const sites = {
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
}

export default sites