import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\PhoneHomeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/PhoneHomeController.php:11
* @route '/et/phone/home/{token}'
*/
const PhoneHomeController = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PhoneHomeController.url(args, options),
    method: 'get',
})

PhoneHomeController.definition = {
    methods: ["get","head"],
    url: '/et/phone/home/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\PhoneHomeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/PhoneHomeController.php:11
* @route '/et/phone/home/{token}'
*/
PhoneHomeController.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return PhoneHomeController.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\PhoneHomeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/PhoneHomeController.php:11
* @route '/et/phone/home/{token}'
*/
PhoneHomeController.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: PhoneHomeController.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\PhoneHomeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/PhoneHomeController.php:11
* @route '/et/phone/home/{token}'
*/
PhoneHomeController.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: PhoneHomeController.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\PhoneHomeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/PhoneHomeController.php:11
* @route '/et/phone/home/{token}'
*/
const PhoneHomeControllerForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PhoneHomeController.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\PhoneHomeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/PhoneHomeController.php:11
* @route '/et/phone/home/{token}'
*/
PhoneHomeControllerForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PhoneHomeController.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\PhoneHomeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/PhoneHomeController.php:11
* @route '/et/phone/home/{token}'
*/
PhoneHomeControllerForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: PhoneHomeController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

PhoneHomeController.form = PhoneHomeControllerForm

export default PhoneHomeController