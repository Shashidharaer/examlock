import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\ForgotPasswordController::sendResetLinkEmail
* @see vendor/statamic/cms/src/Http/Controllers/ForgotPasswordController.php:30
* @route '/!/auth/password/email'
*/
export const sendResetLinkEmail = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendResetLinkEmail.url(options),
    method: 'post',
})

sendResetLinkEmail.definition = {
    methods: ["post"],
    url: '/!/auth/password/email',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\ForgotPasswordController::sendResetLinkEmail
* @see vendor/statamic/cms/src/Http/Controllers/ForgotPasswordController.php:30
* @route '/!/auth/password/email'
*/
sendResetLinkEmail.url = (options?: RouteQueryOptions) => {
    return sendResetLinkEmail.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\ForgotPasswordController::sendResetLinkEmail
* @see vendor/statamic/cms/src/Http/Controllers/ForgotPasswordController.php:30
* @route '/!/auth/password/email'
*/
sendResetLinkEmail.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendResetLinkEmail.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\ForgotPasswordController::sendResetLinkEmail
* @see vendor/statamic/cms/src/Http/Controllers/ForgotPasswordController.php:30
* @route '/!/auth/password/email'
*/
const sendResetLinkEmailForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendResetLinkEmail.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\ForgotPasswordController::sendResetLinkEmail
* @see vendor/statamic/cms/src/Http/Controllers/ForgotPasswordController.php:30
* @route '/!/auth/password/email'
*/
sendResetLinkEmailForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendResetLinkEmail.url(options),
    method: 'post',
})

sendResetLinkEmail.form = sendResetLinkEmailForm

const ForgotPasswordController = { sendResetLinkEmail }

export default ForgotPasswordController