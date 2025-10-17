import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\FormController::submit
 * @see vendor/statamic/cms/src/Http/Controllers/FormController.php:29
 * @route '/!/forms/{form}'
 */
export const submit = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/!/forms/{form}',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\FormController::submit
 * @see vendor/statamic/cms/src/Http/Controllers/FormController.php:29
 * @route '/!/forms/{form}'
 */
submit.url = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return submit.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\FormController::submit
 * @see vendor/statamic/cms/src/Http/Controllers/FormController.php:29
 * @route '/!/forms/{form}'
 */
submit.post = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\FormController::submit
 * @see vendor/statamic/cms/src/Http/Controllers/FormController.php:29
 * @route '/!/forms/{form}'
 */
    const submitForm = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: submit.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\FormController::submit
 * @see vendor/statamic/cms/src/Http/Controllers/FormController.php:29
 * @route '/!/forms/{form}'
 */
        submitForm.post = (args: { form: string | number } | [form: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: submit.url(args, options),
            method: 'post',
        })
    
    submit.form = submitForm
const forms = {
    submit: Object.assign(submit, submit),
}

export default forms