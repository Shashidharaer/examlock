import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Auth\ForgotPasswordController::showLinkRequestForm
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ForgotPasswordController.php:23
 * @route '/cp/auth/password/reset'
 */
export const showLinkRequestForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLinkRequestForm.url(options),
    method: 'get',
})

showLinkRequestForm.definition = {
    methods: ["get","head"],
    url: '/cp/auth/password/reset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Auth\ForgotPasswordController::showLinkRequestForm
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ForgotPasswordController.php:23
 * @route '/cp/auth/password/reset'
 */
showLinkRequestForm.url = (options?: RouteQueryOptions) => {
    return showLinkRequestForm.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Auth\ForgotPasswordController::showLinkRequestForm
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ForgotPasswordController.php:23
 * @route '/cp/auth/password/reset'
 */
showLinkRequestForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLinkRequestForm.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Auth\ForgotPasswordController::showLinkRequestForm
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ForgotPasswordController.php:23
 * @route '/cp/auth/password/reset'
 */
showLinkRequestForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLinkRequestForm.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Auth\ForgotPasswordController::showLinkRequestForm
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ForgotPasswordController.php:23
 * @route '/cp/auth/password/reset'
 */
    const showLinkRequestFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showLinkRequestForm.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Auth\ForgotPasswordController::showLinkRequestForm
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ForgotPasswordController.php:23
 * @route '/cp/auth/password/reset'
 */
        showLinkRequestFormForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showLinkRequestForm.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Auth\ForgotPasswordController::showLinkRequestForm
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ForgotPasswordController.php:23
 * @route '/cp/auth/password/reset'
 */
        showLinkRequestFormForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showLinkRequestForm.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showLinkRequestForm.form = showLinkRequestFormForm
/**
* @see \Statamic\Http\Controllers\CP\Auth\ForgotPasswordController::sendResetLinkEmail
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ForgotPasswordController.php:18
 * @route '/cp/auth/password/email'
 */
export const sendResetLinkEmail = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendResetLinkEmail.url(options),
    method: 'post',
})

sendResetLinkEmail.definition = {
    methods: ["post"],
    url: '/cp/auth/password/email',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Auth\ForgotPasswordController::sendResetLinkEmail
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ForgotPasswordController.php:18
 * @route '/cp/auth/password/email'
 */
sendResetLinkEmail.url = (options?: RouteQueryOptions) => {
    return sendResetLinkEmail.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Auth\ForgotPasswordController::sendResetLinkEmail
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ForgotPasswordController.php:18
 * @route '/cp/auth/password/email'
 */
sendResetLinkEmail.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendResetLinkEmail.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Auth\ForgotPasswordController::sendResetLinkEmail
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ForgotPasswordController.php:18
 * @route '/cp/auth/password/email'
 */
    const sendResetLinkEmailForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sendResetLinkEmail.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Auth\ForgotPasswordController::sendResetLinkEmail
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ForgotPasswordController.php:18
 * @route '/cp/auth/password/email'
 */
        sendResetLinkEmailForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sendResetLinkEmail.url(options),
            method: 'post',
        })
    
    sendResetLinkEmail.form = sendResetLinkEmailForm
const ForgotPasswordController = { showLinkRequestForm, sendResetLinkEmail }

export default ForgotPasswordController