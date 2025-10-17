import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
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
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::bulkActions
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:71
 * @route '/cp/users/actions/list'
 */
export const bulkActions = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkActions.url(options),
    method: 'post',
})

bulkActions.definition = {
    methods: ["post"],
    url: '/cp/users/actions/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::bulkActions
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:71
 * @route '/cp/users/actions/list'
 */
bulkActions.url = (options?: RouteQueryOptions) => {
    return bulkActions.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::bulkActions
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:71
 * @route '/cp/users/actions/list'
 */
bulkActions.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkActions.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::bulkActions
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:71
 * @route '/cp/users/actions/list'
 */
    const bulkActionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkActions.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Users\UserActionController::bulkActions
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserActionController.php:71
 * @route '/cp/users/actions/list'
 */
        bulkActionsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkActions.url(options),
            method: 'post',
        })
    
    bulkActions.form = bulkActionsForm
const UserActionController = { run, bulkActions }

export default UserActionController