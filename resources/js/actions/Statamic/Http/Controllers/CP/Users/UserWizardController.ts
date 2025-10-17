import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Users\UserWizardController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserWizardController.php:11
 * @route '/cp/user-exists'
 */
const UserWizardController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UserWizardController.url(options),
    method: 'post',
})

UserWizardController.definition = {
    methods: ["post"],
    url: '/cp/user-exists',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UserWizardController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserWizardController.php:11
 * @route '/cp/user-exists'
 */
UserWizardController.url = (options?: RouteQueryOptions) => {
    return UserWizardController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UserWizardController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserWizardController.php:11
 * @route '/cp/user-exists'
 */
UserWizardController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: UserWizardController.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Users\UserWizardController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserWizardController.php:11
 * @route '/cp/user-exists'
 */
    const UserWizardControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: UserWizardController.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Users\UserWizardController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserWizardController.php:11
 * @route '/cp/user-exists'
 */
        UserWizardControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: UserWizardController.url(options),
            method: 'post',
        })
    
    UserWizardController.form = UserWizardControllerForm
export default UserWizardController