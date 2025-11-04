import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::run
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:14
* @route '/cp/users/actions'
*/
export const run = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(options),
    method: 'post',
})

run.definition = {
    methods: ["post"],
    url: '/cp/users/actions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::run
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:14
* @route '/cp/users/actions'
*/
run.url = (options?: RouteQueryOptions) => {
    return run.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::run
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:14
* @route '/cp/users/actions'
*/
run.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::run
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:14
* @route '/cp/users/actions'
*/
const runForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: run.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::run
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:14
* @route '/cp/users/actions'
*/
runForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: run.url(options),
    method: 'post',
})

run.form = runForm

/**
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::bulk
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:71
* @route '/cp/users/actions/list'
*/
export const bulk = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulk.url(options),
    method: 'post',
})

bulk.definition = {
    methods: ["post"],
    url: '/cp/users/actions/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::bulk
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:71
* @route '/cp/users/actions/list'
*/
bulk.url = (options?: RouteQueryOptions) => {
    return bulk.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::bulk
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:71
* @route '/cp/users/actions/list'
*/
bulk.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulk.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::bulk
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:71
* @route '/cp/users/actions/list'
*/
const bulkForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulk.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::bulk
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:71
* @route '/cp/users/actions/list'
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