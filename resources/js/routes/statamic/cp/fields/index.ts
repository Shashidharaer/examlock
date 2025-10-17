import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:23
 * @route '/cp/fields'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/fields',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:23
 * @route '/cp/fields'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:23
 * @route '/cp/fields'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:23
 * @route '/cp/fields'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:23
 * @route '/cp/fields'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:23
 * @route '/cp/fields'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:23
 * @route '/cp/fields'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:28
 * @route '/cp/fields/edit'
 */
export const edit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: edit.url(options),
    method: 'post',
})

edit.definition = {
    methods: ["post"],
    url: '/cp/fields/edit',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:28
 * @route '/cp/fields/edit'
 */
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:28
 * @route '/cp/fields/edit'
 */
edit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: edit.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:28
 * @route '/cp/fields/edit'
 */
    const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: edit.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::edit
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:28
 * @route '/cp/fields/edit'
 */
        editForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: edit.url(options),
            method: 'post',
        })
    
    edit.form = editForm
/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:52
 * @route '/cp/fields/update'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/cp/fields/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:52
 * @route '/cp/fields/update'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:52
 * @route '/cp/fields/update'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:52
 * @route '/cp/fields/update'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fields\FieldsController::update
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fields/FieldsController.php:52
 * @route '/cp/fields/update'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const fields = {
    index: Object.assign(index, index),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
}

export default fields