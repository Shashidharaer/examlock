import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\User\RegisterController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/RegisterController.php:17
 * @route '/!/auth/register'
 */
const RegisterController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RegisterController.url(options),
    method: 'post',
})

RegisterController.definition = {
    methods: ["post"],
    url: '/!/auth/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\User\RegisterController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/RegisterController.php:17
 * @route '/!/auth/register'
 */
RegisterController.url = (options?: RouteQueryOptions) => {
    return RegisterController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\User\RegisterController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/RegisterController.php:17
 * @route '/!/auth/register'
 */
RegisterController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RegisterController.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\User\RegisterController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/RegisterController.php:17
 * @route '/!/auth/register'
 */
    const RegisterControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: RegisterController.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\User\RegisterController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/RegisterController.php:17
 * @route '/!/auth/register'
 */
        RegisterControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RegisterController.url(options),
            method: 'post',
        })
    
    RegisterController.form = RegisterControllerForm
export default RegisterController