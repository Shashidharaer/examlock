import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\User\LoginController::logout
* @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:33
* @route '/!/auth/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

logout.definition = {
    methods: ["get","head"],
    url: '/!/auth/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\User\LoginController::logout
* @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:33
* @route '/!/auth/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\User\LoginController::logout
* @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:33
* @route '/!/auth/logout'
*/
logout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\User\LoginController::logout
* @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:33
* @route '/!/auth/logout'
*/
logout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\User\LoginController::logout
* @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:33
* @route '/!/auth/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\User\LoginController::logout
* @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:33
* @route '/!/auth/logout'
*/
logoutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\User\LoginController::logout
* @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:33
* @route '/!/auth/logout'
*/
logoutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

logout.form = logoutForm

/**
* @see \Statamic\Http\Controllers\User\LoginController::login
* @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:14
* @route '/!/auth/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/!/auth/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\User\LoginController::login
* @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:14
* @route '/!/auth/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\User\LoginController::login
* @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:14
* @route '/!/auth/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\User\LoginController::login
* @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:14
* @route '/!/auth/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\User\LoginController::login
* @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:14
* @route '/!/auth/login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

login.form = loginForm

const LoginController = { logout, login }

export default LoginController