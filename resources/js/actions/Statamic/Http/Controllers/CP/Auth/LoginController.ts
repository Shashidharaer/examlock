import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::showLoginForm
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:35
* @route '/cp/auth/login'
*/
export const showLoginForm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLoginForm.url(options),
    method: 'get',
})

showLoginForm.definition = {
    methods: ["get","head"],
    url: '/cp/auth/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::showLoginForm
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:35
* @route '/cp/auth/login'
*/
showLoginForm.url = (options?: RouteQueryOptions) => {
    return showLoginForm.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::showLoginForm
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:35
* @route '/cp/auth/login'
*/
showLoginForm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showLoginForm.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::showLoginForm
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:35
* @route '/cp/auth/login'
*/
showLoginForm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showLoginForm.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::showLoginForm
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:35
* @route '/cp/auth/login'
*/
const showLoginFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLoginForm.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::showLoginForm
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:35
* @route '/cp/auth/login'
*/
showLoginFormForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLoginForm.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::showLoginForm
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:35
* @route '/cp/auth/login'
*/
showLoginFormForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showLoginForm.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showLoginForm.form = showLoginFormForm

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::login
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:55
* @route '/cp/auth/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/cp/auth/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::login
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:55
* @route '/cp/auth/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::login
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:55
* @route '/cp/auth/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::login
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:55
* @route '/cp/auth/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::login
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:55
* @route '/cp/auth/login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

login.form = loginForm

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::logout
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:130
* @route '/cp/auth/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

logout.definition = {
    methods: ["get","head"],
    url: '/cp/auth/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::logout
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:130
* @route '/cp/auth/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::logout
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:130
* @route '/cp/auth/logout'
*/
logout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::logout
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:130
* @route '/cp/auth/logout'
*/
logout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::logout
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:130
* @route '/cp/auth/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::logout
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:130
* @route '/cp/auth/logout'
*/
logoutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logout.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::logout
* @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:130
* @route '/cp/auth/logout'
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

const LoginController = { showLoginForm, login, logout }

export default LoginController