import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
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
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::bulk
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:71
* @route '/cp/assets/actions/list'
*/
export const bulk = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulk.url(options),
    method: 'post',
})

bulk.definition = {
    methods: ["post"],
    url: '/cp/assets/actions/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::bulk
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:71
* @route '/cp/assets/actions/list'
*/
bulk.url = (options?: RouteQueryOptions) => {
    return bulk.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::bulk
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:71
* @route '/cp/assets/actions/list'
*/
bulk.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulk.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::bulk
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:71
* @route '/cp/assets/actions/list'
*/
const bulkForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulk.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\ActionController::bulk
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/ActionController.php:71
* @route '/cp/assets/actions/list'
*/
bulkForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulk.url(options),
    method: 'post',
})

bulk.form = bulkForm

const actions = {
    run: Object.assign(run, run),
    bulk: Object.assign(bulk, bulk),
}

export default actions