import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\User\PasswordController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/PasswordController.php:11
 * @route '/!/auth/password'
 */
const PasswordController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: PasswordController.url(options),
    method: 'post',
})

PasswordController.definition = {
    methods: ["post"],
    url: '/!/auth/password',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\User\PasswordController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/PasswordController.php:11
 * @route '/!/auth/password'
 */
PasswordController.url = (options?: RouteQueryOptions) => {
    return PasswordController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\User\PasswordController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/PasswordController.php:11
 * @route '/!/auth/password'
 */
PasswordController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: PasswordController.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\User\PasswordController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/PasswordController.php:11
 * @route '/!/auth/password'
 */
    const PasswordControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: PasswordController.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\User\PasswordController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/PasswordController.php:11
 * @route '/!/auth/password'
 */
        PasswordControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: PasswordController.url(options),
            method: 'post',
        })
    
    PasswordController.form = PasswordControllerForm
export default PasswordController