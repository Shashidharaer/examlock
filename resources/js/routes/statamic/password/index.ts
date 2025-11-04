import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import reset0fffd7 from './reset'
/**
* @see \Statamic\Http\Controllers\ForgotPasswordController::email
* @see vendor/statamic/cms/src/Http/Controllers/ForgotPasswordController.php:30
* @route '/!/auth/password/email'
*/
export const email = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: email.url(options),
    method: 'post',
})

email.definition = {
    methods: ["post"],
    url: '/!/auth/password/email',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\ForgotPasswordController::email
* @see vendor/statamic/cms/src/Http/Controllers/ForgotPasswordController.php:30
* @route '/!/auth/password/email'
*/
email.url = (options?: RouteQueryOptions) => {
    return email.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\ForgotPasswordController::email
* @see vendor/statamic/cms/src/Http/Controllers/ForgotPasswordController.php:30
* @route '/!/auth/password/email'
*/
email.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: email.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\ForgotPasswordController::email
* @see vendor/statamic/cms/src/Http/Controllers/ForgotPasswordController.php:30
* @route '/!/auth/password/email'
*/
const emailForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: email.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\ForgotPasswordController::email
* @see vendor/statamic/cms/src/Http/Controllers/ForgotPasswordController.php:30
* @route '/!/auth/password/email'
*/
emailForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: email.url(options),
    method: 'post',
})

email.form = emailForm

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::reset
* @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:22
* @route '/!/auth/password/reset/{token}'
*/
export const reset = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reset.url(args, options),
    method: 'get',
})

reset.definition = {
    methods: ["get","head"],
    url: '/!/auth/password/reset/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::reset
* @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:22
* @route '/!/auth/password/reset/{token}'
*/
reset.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return reset.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::reset
* @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:22
* @route '/!/auth/password/reset/{token}'
*/
reset.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reset.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::reset
* @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:22
* @route '/!/auth/password/reset/{token}'
*/
reset.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reset.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::reset
* @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:22
* @route '/!/auth/password/reset/{token}'
*/
const resetForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reset.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::reset
* @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:22
* @route '/!/auth/password/reset/{token}'
*/
resetForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reset.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::reset
* @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:22
* @route '/!/auth/password/reset/{token}'
*/
resetForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reset.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

reset.form = resetForm

const password = {
    email: Object.assign(email, email),
    reset: Object.assign(reset, reset0fffd7),
}

export default password