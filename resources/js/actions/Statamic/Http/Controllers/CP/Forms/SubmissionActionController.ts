import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Forms\SubmissionActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/SubmissionActionController.php:14
 * @route '/cp/forms/{form}/submissions/actions'
 */
export const run = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(args, options),
    method: 'post',
})

run.definition = {
    methods: ["post"],
    url: '/cp/forms/{form}/submissions/actions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\SubmissionActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/SubmissionActionController.php:14
 * @route '/cp/forms/{form}/submissions/actions'
 */
run.url = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return run.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\SubmissionActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/SubmissionActionController.php:14
 * @route '/cp/forms/{form}/submissions/actions'
 */
run.post = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Forms\SubmissionActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/SubmissionActionController.php:14
 * @route '/cp/forms/{form}/submissions/actions'
 */
    const runForm = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: run.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Forms\SubmissionActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/SubmissionActionController.php:14
 * @route '/cp/forms/{form}/submissions/actions'
 */
        runForm.post = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: run.url(args, options),
            method: 'post',
        })
    
    run.form = runForm
/**
* @see \Statamic\Http\Controllers\CP\Forms\SubmissionActionController::bulkActions
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/SubmissionActionController.php:71
 * @route '/cp/forms/{form}/submissions/actions/list'
 */
export const bulkActions = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkActions.url(args, options),
    method: 'post',
})

bulkActions.definition = {
    methods: ["post"],
    url: '/cp/forms/{form}/submissions/actions/list',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\SubmissionActionController::bulkActions
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/SubmissionActionController.php:71
 * @route '/cp/forms/{form}/submissions/actions/list'
 */
bulkActions.url = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return bulkActions.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\SubmissionActionController::bulkActions
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/SubmissionActionController.php:71
 * @route '/cp/forms/{form}/submissions/actions/list'
 */
bulkActions.post = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkActions.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Forms\SubmissionActionController::bulkActions
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/SubmissionActionController.php:71
 * @route '/cp/forms/{form}/submissions/actions/list'
 */
    const bulkActionsForm = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkActions.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Forms\SubmissionActionController::bulkActions
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/SubmissionActionController.php:71
 * @route '/cp/forms/{form}/submissions/actions/list'
 */
        bulkActionsForm.post = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkActions.url(args, options),
            method: 'post',
        })
    
    bulkActions.form = bulkActionsForm
const SubmissionActionController = { run, bulkActions }

export default SubmissionActionController