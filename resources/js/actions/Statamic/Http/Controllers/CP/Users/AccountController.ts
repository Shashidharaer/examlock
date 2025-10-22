import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Users\AccountController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/AccountController.php:11
* @route '/cp/account'
*/
const AccountController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AccountController.url(options),
    method: 'get',
})

AccountController.definition = {
    methods: ["get","head"],
    url: '/cp/account',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\AccountController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/AccountController.php:11
* @route '/cp/account'
*/
AccountController.url = (options?: RouteQueryOptions) => {
    return AccountController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\AccountController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/AccountController.php:11
* @route '/cp/account'
*/
AccountController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: AccountController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\AccountController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/AccountController.php:11
* @route '/cp/account'
*/
AccountController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: AccountController.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\AccountController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/AccountController.php:11
* @route '/cp/account'
*/
const AccountControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AccountController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\AccountController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/AccountController.php:11
* @route '/cp/account'
*/
AccountControllerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AccountController.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\AccountController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/AccountController.php:11
* @route '/cp/account'
*/
AccountControllerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: AccountController.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

AccountController.form = AccountControllerForm

export default AccountController