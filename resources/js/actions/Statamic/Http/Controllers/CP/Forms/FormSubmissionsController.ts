import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:15
* @route '/cp/forms/{form}/submissions'
*/
export const index = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/forms/{form}/submissions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:15
* @route '/cp/forms/{form}/submissions'
*/
index.url = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:15
* @route '/cp/forms/{form}/submissions'
*/
index.get = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:15
* @route '/cp/forms/{form}/submissions'
*/
index.head = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:15
* @route '/cp/forms/{form}/submissions'
*/
const indexForm = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:15
* @route '/cp/forms/{form}/submissions'
*/
indexForm.get = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:15
* @route '/cp/forms/{form}/submissions'
*/
indexForm.head = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/create'
*/
export const create = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cp/forms/{form}/submissions/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/create'
*/
create.url = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/create'
*/
create.get = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/create'
*/
create.head = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/create'
*/
const createForm = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/create'
*/
createForm.get = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/create'
*/
createForm.head = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions'
*/
export const store = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cp/forms/{form}/submissions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions'
*/
store.url = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions'
*/
store.post = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions'
*/
const storeForm = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::store
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions'
*/
storeForm.post = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:78
* @route '/cp/forms/{form}/submissions/{submission}'
*/
export const show = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/forms/{form}/submissions/{submission}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:78
* @route '/cp/forms/{form}/submissions/{submission}'
*/
show.url = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            form: args[0],
            submission: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: args.form,
        submission: args.submission,
    }

    return show.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:78
* @route '/cp/forms/{form}/submissions/{submission}'
*/
show.get = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:78
* @route '/cp/forms/{form}/submissions/{submission}'
*/
show.head = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:78
* @route '/cp/forms/{form}/submissions/{submission}'
*/
const showForm = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:78
* @route '/cp/forms/{form}/submissions/{submission}'
*/
showForm.get = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:78
* @route '/cp/forms/{form}/submissions/{submission}'
*/
showForm.head = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/{submission}/edit'
*/
export const edit = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/forms/{form}/submissions/{submission}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/{submission}/edit'
*/
edit.url = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            form: args[0],
            submission: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: args.form,
        submission: args.submission,
    }

    return edit.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/{submission}/edit'
*/
edit.get = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/{submission}/edit'
*/
edit.head = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/{submission}/edit'
*/
const editForm = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/{submission}/edit'
*/
editForm.get = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/{submission}/edit'
*/
editForm.head = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/{submission}'
*/
export const update = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/cp/forms/{form}/submissions/{submission}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/{submission}'
*/
update.url = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            form: args[0],
            submission: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: args.form,
        submission: args.submission,
    }

    return update.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/{submission}'
*/
update.put = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/{submission}'
*/
update.patch = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/{submission}'
*/
const updateForm = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/{submission}'
*/
updateForm.put = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::update
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:0
* @route '/cp/forms/{form}/submissions/{submission}'
*/
updateForm.patch = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:67
* @route '/cp/forms/{form}/submissions/{submission}'
*/
export const destroy = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/cp/forms/{form}/submissions/{submission}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:67
* @route '/cp/forms/{form}/submissions/{submission}'
*/
destroy.url = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            form: args[0],
            submission: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        form: args.form,
        submission: args.submission,
    }

    return destroy.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace('{submission}', parsedArgs.submission.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:67
* @route '/cp/forms/{form}/submissions/{submission}'
*/
destroy.delete = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:67
* @route '/cp/forms/{form}/submissions/{submission}'
*/
const destroyForm = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormSubmissionsController::destroy
* @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormSubmissionsController.php:67
* @route '/cp/forms/{form}/submissions/{submission}'
*/
destroyForm.delete = (args: { form: string | number, submission: string | number } | [form: string | number, submission: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const FormSubmissionsController = { index, create, store, show, edit, update, destroy }

export default FormSubmissionsController