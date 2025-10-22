import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\User\ProfileController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/User/ProfileController.php:10
* @route '/!/auth/profile'
*/
const ProfileController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ProfileController.url(options),
    method: 'post',
})

ProfileController.definition = {
    methods: ["post"],
    url: '/!/auth/profile',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\User\ProfileController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/User/ProfileController.php:10
* @route '/!/auth/profile'
*/
ProfileController.url = (options?: RouteQueryOptions) => {
    return ProfileController.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\User\ProfileController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/User/ProfileController.php:10
* @route '/!/auth/profile'
*/
ProfileController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ProfileController.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\User\ProfileController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/User/ProfileController.php:10
* @route '/!/auth/profile'
*/
const ProfileControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ProfileController.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\User\ProfileController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/User/ProfileController.php:10
* @route '/!/auth/profile'
*/
ProfileControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ProfileController.url(options),
    method: 'post',
})

ProfileController.form = ProfileControllerForm

export default ProfileController