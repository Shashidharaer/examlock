import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\ActivateAccountController::showResetForm
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:22
 * @route '/!/auth/activate/{token}'
 */
export const showResetForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showResetForm.url(args, options),
    method: 'get',
})

showResetForm.definition = {
    methods: ["get","head"],
    url: '/!/auth/activate/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\ActivateAccountController::showResetForm
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:22
 * @route '/!/auth/activate/{token}'
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
* @see \Statamic\Http\Controllers\ActivateAccountController::showResetForm
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:22
 * @route '/!/auth/activate/{token}'
 */
showResetForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showResetForm.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\ActivateAccountController::showResetForm
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:22
 * @route '/!/auth/activate/{token}'
 */
showResetForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showResetForm.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\ActivateAccountController::showResetForm
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:22
 * @route '/!/auth/activate/{token}'
 */
    const showResetFormForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showResetForm.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\ActivateAccountController::showResetForm
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:22
 * @route '/!/auth/activate/{token}'
 */
        showResetFormForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showResetForm.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\ActivateAccountController::showResetForm
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:22
 * @route '/!/auth/activate/{token}'
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
* @see \Statamic\Http\Controllers\ActivateAccountController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:47
 * @route '/!/auth/activate'
 */
export const reset = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

reset.definition = {
    methods: ["post"],
    url: '/!/auth/activate',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\ActivateAccountController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:47
 * @route '/!/auth/activate'
 */
reset.url = (options?: RouteQueryOptions) => {
    return reset.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\ActivateAccountController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:47
 * @route '/!/auth/activate'
 */
reset.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reset.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\ActivateAccountController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:47
 * @route '/!/auth/activate'
 */
    const resetForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reset.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\ActivateAccountController::reset
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:47
 * @route '/!/auth/activate'
 */
        resetForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reset.url(options),
            method: 'post',
        })
    
    reset.form = resetForm
const ActivateAccountController = { showResetForm, reset }

export default ActivateAccountController