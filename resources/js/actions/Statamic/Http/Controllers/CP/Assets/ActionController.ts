import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::run
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:14
* @route '/cp/assets/actions'
*/
export const run = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(options),
    method: 'post',
})

run.definition = {
    methods: ["post"],
    url: '/cp/assets/actions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::run
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:14
* @route '/cp/assets/actions'
*/
run.url = (options?: RouteQueryOptions) => {
    return run.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::run
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:14
* @route '/cp/assets/actions'
*/
run.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::run
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:14
* @route '/cp/assets/actions'
*/
const runForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: run.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::run
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:14
* @route '/cp/assets/actions'
*/
runForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: run.url(options),
    method: 'post',
})

run.form = runForm

/**
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::bulkActions
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:71
* @route '/cp/assets/actions/list'
*/
export const bulkActions = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkActions.url(options),
    method: 'post',
})

bulkActions.definition = {
    methods: ["post"],
    url: '/cp/assets/actions/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::bulkActions
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:71
* @route '/cp/assets/actions/list'
*/
bulkActions.url = (options?: RouteQueryOptions) => {
    return bulkActions.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::bulkActions
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:71
* @route '/cp/assets/actions/list'
*/
bulkActions.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkActions.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::bulkActions
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:71
* @route '/cp/assets/actions/list'
*/
const bulkActionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkActions.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::bulkActions
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:71
* @route '/cp/assets/actions/list'
*/
bulkActionsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkActions.url(options),
    method: 'post',
})

bulkActions.form = bulkActionsForm

const ActionController = { run, bulkActions }

export default ActionController