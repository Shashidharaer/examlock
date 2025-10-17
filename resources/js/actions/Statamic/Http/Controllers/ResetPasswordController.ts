import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\ResetPasswordController::showResetForm
 * @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:22
 * @route '/!/auth/password/reset/{token}'
 */
export const showResetForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showResetForm.url(args, options),
    method: 'get',
})

showResetForm.definition = {
    methods: ["get","head"],
    url: '/!/auth/password/reset/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::showResetForm
 * @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:22
 * @route '/!/auth/password/reset/{token}'
 */
showResetForm.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showResetForm.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::showResetForm
 * @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:22
 * @route '/!/auth/password/reset/{token}'
 */
showResetForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showResetForm.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\ResetPasswordController::showResetForm
 * @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:22
 * @route '/!/auth/password/reset/{token}'
 */
showResetForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showResetForm.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\ResetPasswordController::showResetForm
 * @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:22
 * @route '/!/auth/password/reset/{token}'
 */
    const showResetFormForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showResetForm.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\ResetPasswordController::showResetForm
 * @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:22
 * @route '/!/auth/password/reset/{token}'
 */
        showResetFormForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showResetForm.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\ResetPasswordController::showResetForm
 * @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:22
 * @route '/!/auth/password/reset/{token}'
 */
        showResetFormForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showResetForm.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showResetForm.form = showResetFormForm
/**
* @see \Statamic\Http\Controllers\ResetPasswordController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:47
 * @route '/!/auth/password/reset'
 */
export const reset = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

reset.definition = {
    methods: ["post"],
    url: '/!/auth/password/reset',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:47
 * @route '/!/auth/password/reset'
 */
reset.url = (options?: RouteQueryOptions) => {
    return reset.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\ResetPasswordController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:47
 * @route '/!/auth/password/reset'
 */
reset.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\ResetPasswordController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:47
 * @route '/!/auth/password/reset'
 */
    const resetForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reset.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\ResetPasswordController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/ResetPasswordController.php:47
 * @route '/!/auth/password/reset'
 */
        resetForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reset.url(options),
            method: 'post',
        })
    
    reset.form = resetForm
const ResetPasswordController = { showResetForm, reset }

export default ResetPasswordController