import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:101
* @route '/request-demo'
*/
export const submit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/request-demo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:101
* @route '/request-demo'
*/
submit.url = (options?: RouteQueryOptions) => {
    return submit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:101
* @route '/request-demo'
*/
submit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:101
* @route '/request-demo'
*/
const submitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:101
* @route '/request-demo'
*/
submitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(options),
    method: 'post',
})

submit.form = submitForm

const requestDemo = {
    submit: Object.assign(submit, submit),
}

export default requestDemo