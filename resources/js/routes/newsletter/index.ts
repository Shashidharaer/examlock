import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:191
* @route '/newsletter'
*/
export const submit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/newsletter',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:191
* @route '/newsletter'
*/
submit.url = (options?: RouteQueryOptions) => {
    return submit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:191
* @route '/newsletter'
*/
submit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:191
* @route '/newsletter'
*/
const submitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::submit
* @see app/Http/Controllers/FormController.php:191
* @route '/newsletter'
*/
submitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(options),
    method: 'post',
})

submit.form = submitForm

const newsletter = {
    submit: Object.assign(submit, submit),
}

export default newsletter