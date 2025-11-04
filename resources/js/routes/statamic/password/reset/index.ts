import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\ResetPasswordController::action
* @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:47
* @route '/!/auth/password/reset'
*/
export const action = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: action.url(options),
    method: 'post',
})

action.definition = {
    methods: ["post"],
    url: '/!/auth/password/reset',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::action
* @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:47
* @route '/!/auth/password/reset'
*/
action.url = (options?: RouteQueryOptions) => {
    return action.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::action
* @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:47
* @route '/!/auth/password/reset'
*/
action.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: action.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::action
* @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:47
* @route '/!/auth/password/reset'
*/
const actionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: action.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::action
* @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:47
* @route '/!/auth/password/reset'
*/
actionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: action.url(options),
    method: 'post',
})

action.form = actionForm

const reset = {
    action: Object.assign(action, action),
}

export default reset