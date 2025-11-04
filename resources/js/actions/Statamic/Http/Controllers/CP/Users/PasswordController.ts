import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Users\PasswordController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/PasswordController.php:16
* @route '/cp/users/{user}/password'
*/
export const update = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/users/{user}/password',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\PasswordController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/PasswordController.php:16
* @route '/cp/users/{user}/password'
*/
update.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: args.user,
    }

    return update.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\PasswordController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/PasswordController.php:16
* @route '/cp/users/{user}/password'
*/
update.patch = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\PasswordController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/PasswordController.php:16
* @route '/cp/users/{user}/password'
*/
const updateForm = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Users\PasswordController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Users/PasswordController.php:16
* @route '/cp/users/{user}/password'
*/
updateForm.patch = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const PasswordController = { update }

export default PasswordController