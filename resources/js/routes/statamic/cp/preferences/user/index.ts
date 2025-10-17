import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Preferences\UserPreferenceController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/UserPreferenceController.php:13
 * @route '/cp/preferences/edit'
 */
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/preferences/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Preferences\UserPreferenceController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/UserPreferenceController.php:13
 * @route '/cp/preferences/edit'
 */
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Preferences\UserPreferenceController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/UserPreferenceController.php:13
 * @route '/cp/preferences/edit'
 */
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Preferences\UserPreferenceController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/UserPreferenceController.php:13
 * @route '/cp/preferences/edit'
 */
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Preferences\UserPreferenceController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/UserPreferenceController.php:13
 * @route '/cp/preferences/edit'
 */
    const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Preferences\UserPreferenceController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/UserPreferenceController.php:13
 * @route '/cp/preferences/edit'
 */
        editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Preferences\UserPreferenceController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/UserPreferenceController.php:13
 * @route '/cp/preferences/edit'
 */
        editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \Statamic\Http\Controllers\CP\Preferences\UserPreferenceController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/UserPreferenceController.php:22
 * @route '/cp/preferences'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/preferences',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Preferences\UserPreferenceController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/UserPreferenceController.php:22
 * @route '/cp/preferences'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Preferences\UserPreferenceController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/UserPreferenceController.php:22
 * @route '/cp/preferences'
 */
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

    /**
* @see \Statamic\Http\Controllers\CP\Preferences\UserPreferenceController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/UserPreferenceController.php:22
 * @route '/cp/preferences'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Preferences\UserPreferenceController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Preferences/UserPreferenceController.php:22
 * @route '/cp/preferences'
 */
        updateForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const user = {
    edit: Object.assign(edit, edit),
update: Object.assign(update, update),
}

export default user