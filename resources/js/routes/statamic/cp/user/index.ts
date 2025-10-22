import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Users\UserWizardController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserWizardController.php:11
* @route '/cp/user-exists'
*/
export const exists = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: exists.url(options),
    method: 'post',
})

exists.definition = {
    methods: ["post"],
    url: '/cp/user-exists',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\UserWizardController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserWizardController.php:11
* @route '/cp/user-exists'
*/
exists.url = (options?: RouteQueryOptions) => {
    return exists.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\UserWizardController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserWizardController.php:11
* @route '/cp/user-exists'
*/
exists.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: exists.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserWizardController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserWizardController.php:11
* @route '/cp/user-exists'
*/
const existsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: exists.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\UserWizardController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/UserWizardController.php:11
* @route '/cp/user-exists'
*/
existsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: exists.url(options),
    method: 'post',
})

exists.form = existsForm

const user = {
    exists: Object.assign(exists, exists),
}

export default user