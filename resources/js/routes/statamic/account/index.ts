import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import activate247610 from './activate'
/**
* @see \Statamic\Http\Controllers\ActivateAccountController::activate
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:22
 * @route '/!/auth/activate/{token}'
 */
export const activate = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activate.url(args, options),
    method: 'get',
})

activate.definition = {
    methods: ["get","head"],
    url: '/!/auth/activate/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\ActivateAccountController::activate
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:22
 * @route '/!/auth/activate/{token}'
 */
activate.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return activate.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\ActivateAccountController::activate
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:22
 * @route '/!/auth/activate/{token}'
 */
activate.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activate.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\ActivateAccountController::activate
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:22
 * @route '/!/auth/activate/{token}'
 */
activate.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activate.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\ActivateAccountController::activate
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:22
 * @route '/!/auth/activate/{token}'
 */
    const activateForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: activate.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\ActivateAccountController::activate
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:22
 * @route '/!/auth/activate/{token}'
 */
        activateForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: activate.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\ActivateAccountController::activate
 * @see vendor/statamic/cms/src/Http/Controllers/ActivateAccountController.php:22
 * @route '/!/auth/activate/{token}'
 */
        activateForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: activate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    activate.form = activateForm
const account = {
    activate: Object.assign(activate, activate247610),
}

export default account