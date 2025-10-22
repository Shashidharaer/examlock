import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Preferences\RolePreferenceController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/RolePreferenceController.php:15
* @route '/cp/preferences/roles/{role}/edit'
*/
export const edit = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/preferences/roles/{role}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Preferences\RolePreferenceController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/RolePreferenceController.php:15
* @route '/cp/preferences/roles/{role}/edit'
*/
edit.url = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    if (Array.isArray(args)) {
        args = {
            role: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        role: args.role,
    }

    return edit.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Preferences\RolePreferenceController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/RolePreferenceController.php:15
* @route '/cp/preferences/roles/{role}/edit'
*/
edit.get = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\RolePreferenceController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/RolePreferenceController.php:15
* @route '/cp/preferences/roles/{role}/edit'
*/
edit.head = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\RolePreferenceController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/RolePreferenceController.php:15
* @route '/cp/preferences/roles/{role}/edit'
*/
const editForm = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\RolePreferenceController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/RolePreferenceController.php:15
* @route '/cp/preferences/roles/{role}/edit'
*/
editForm.get = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\RolePreferenceController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/RolePreferenceController.php:15
* @route '/cp/preferences/roles/{role}/edit'
*/
editForm.head = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \Statamic\Http\Controllers\CP\Preferences\RolePreferenceController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/RolePreferenceController.php:30
* @route '/cp/preferences/roles/{role}'
*/
export const update = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/preferences/roles/{role}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Preferences\RolePreferenceController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/RolePreferenceController.php:30
* @route '/cp/preferences/roles/{role}'
*/
update.url = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    if (Array.isArray(args)) {
        args = {
            role: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        role: args.role,
    }

    return update.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Preferences\RolePreferenceController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/RolePreferenceController.php:30
* @route '/cp/preferences/roles/{role}'
*/
update.patch = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\RolePreferenceController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/RolePreferenceController.php:30
* @route '/cp/preferences/roles/{role}'
*/
const updateForm = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Preferences\RolePreferenceController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/RolePreferenceController.php:30
* @route '/cp/preferences/roles/{role}'
*/
updateForm.patch = (args: { role: string | number } | [role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const role = {
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
}

export default role