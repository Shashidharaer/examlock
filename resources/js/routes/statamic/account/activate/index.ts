import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\ActivateAccountController::action
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:47
 * @route '/!/auth/activate'
 */
export const action = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: action.url(options),
    method: 'post',
})

action.definition = {
    methods: ["post"],
    url: '/!/auth/activate',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\ActivateAccountController::action
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:47
 * @route '/!/auth/activate'
 */
action.url = (options?: RouteQueryOptions) => {
    return action.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\ActivateAccountController::action
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:47
 * @route '/!/auth/activate'
 */
action.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: action.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\ActivateAccountController::action
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:47
 * @route '/!/auth/activate'
 */
    const actionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: action.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\ActivateAccountController::action
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:47
 * @route '/!/auth/activate'
 */
        actionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: action.url(options),
            method: 'post',
        })
    
    action.form = actionForm
const activate = {
    action: Object.assign(action, action),
}

export default activate