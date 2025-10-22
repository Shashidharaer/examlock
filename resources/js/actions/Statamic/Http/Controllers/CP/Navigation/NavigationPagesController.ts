import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:157
* @route '/cp/navigation/{navigation}/pages'
*/
export const update = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/cp/navigation/{navigation}/pages',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:157
* @route '/cp/navigation/{navigation}/pages'
*/
update.url = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { navigation: args }
    }

    if (Array.isArray(args)) {
        args = {
            navigation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        navigation: args.navigation,
    }

    return update.definition.url
            .replace('{navigation}', parsedArgs.navigation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:157
* @route '/cp/navigation/{navigation}/pages'
*/
update.post = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:157
* @route '/cp/navigation/{navigation}/pages'
*/
const updateForm = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:157
* @route '/cp/navigation/{navigation}/pages'
*/
updateForm.post = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, options),
    method: 'post',
})

update.form = updateForm

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:17
* @route '/cp/navigation/{navigation}/pages/create'
*/
export const create = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/navigation/{navigation}/pages/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:17
* @route '/cp/navigation/{navigation}/pages/create'
*/
create.url = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { navigation: args }
    }

    if (Array.isArray(args)) {
        args = {
            navigation: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        navigation: args.navigation,
    }

    return create.definition.url
            .replace('{navigation}', parsedArgs.navigation.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:17
* @route '/cp/navigation/{navigation}/pages/create'
*/
create.get = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:17
* @route '/cp/navigation/{navigation}/pages/create'
*/
create.head = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:17
* @route '/cp/navigation/{navigation}/pages/create'
*/
const createForm = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:17
* @route '/cp/navigation/{navigation}/pages/create'
*/
createForm.get = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:17
* @route '/cp/navigation/{navigation}/pages/create'
*/
createForm.head = (args: { navigation: string | number } | [navigation: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:47
* @route '/cp/navigation/{navigation}/pages/{edit}/edit'
*/
export const edit = (args: { navigation: string | number, edit: string | number } | [navigation: string | number, edit: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/navigation/{navigation}/pages/{edit}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:47
* @route '/cp/navigation/{navigation}/pages/{edit}/edit'
*/
edit.url = (args: { navigation: string | number, edit: string | number } | [navigation: string | number, edit: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            navigation: args[0],
            edit: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        navigation: args.navigation,
        edit: args.edit,
    }

    return edit.definition.url
            .replace('{navigation}', parsedArgs.navigation.toString())
            .replace('{edit}', parsedArgs.edit.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:47
* @route '/cp/navigation/{navigation}/pages/{edit}/edit'
*/
edit.get = (args: { navigation: string | number, edit: string | number } | [navigation: string | number, edit: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:47
* @route '/cp/navigation/{navigation}/pages/{edit}/edit'
*/
edit.head = (args: { navigation: string | number, edit: string | number } | [navigation: string | number, edit: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:47
* @route '/cp/navigation/{navigation}/pages/{edit}/edit'
*/
const editForm = (args: { navigation: string | number, edit: string | number } | [navigation: string | number, edit: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:47
* @route '/cp/navigation/{navigation}/pages/{edit}/edit'
*/
editForm.get = (args: { navigation: string | number, edit: string | number } | [navigation: string | number, edit: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Navigation\NavigationPagesController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Navigation/NavigationPagesController.php:47
* @route '/cp/navigation/{navigation}/pages/{edit}/edit'
*/
editForm.head = (args: { navigation: string | number, edit: string | number } | [navigation: string | number, edit: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const NavigationPagesController = { update, create, edit }

export default NavigationPagesController