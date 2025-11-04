import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Forms\FormBlueprintController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormBlueprintController.php:18
* @route '/cp/forms/{form}/blueprint'
*/
export const edit = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/forms/{form}/blueprint',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormBlueprintController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormBlueprintController.php:18
* @route '/cp/forms/{form}/blueprint'
*/
edit.url = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: args.form,
    }

    return edit.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormBlueprintController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormBlueprintController.php:18
* @route '/cp/forms/{form}/blueprint'
*/
edit.get = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormBlueprintController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormBlueprintController.php:18
* @route '/cp/forms/{form}/blueprint'
*/
edit.head = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormBlueprintController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormBlueprintController.php:18
* @route '/cp/forms/{form}/blueprint'
*/
const editForm = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormBlueprintController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormBlueprintController.php:18
* @route '/cp/forms/{form}/blueprint'
*/
editForm.get = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormBlueprintController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormBlueprintController.php:18
* @route '/cp/forms/{form}/blueprint'
*/
editForm.head = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Forms\FormBlueprintController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormBlueprintController.php:29
* @route '/cp/forms/{form}/blueprint'
*/
export const update = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/cp/forms/{form}/blueprint',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormBlueprintController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormBlueprintController.php:29
* @route '/cp/forms/{form}/blueprint'
*/
update.url = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { form: args }
    }

    if (Array.isArray(args)) {
        args = {
            form: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: args.form,
    }

    return update.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormBlueprintController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormBlueprintController.php:29
* @route '/cp/forms/{form}/blueprint'
*/
update.patch = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormBlueprintController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormBlueprintController.php:29
* @route '/cp/forms/{form}/blueprint'
*/
const updateForm = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormBlueprintController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormBlueprintController.php:29
* @route '/cp/forms/{form}/blueprint'
*/
updateForm.patch = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const FormBlueprintController = { edit, update }

export default FormBlueprintController