import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\FormController::submitContactForm
* @see app/Http/Controllers/FormController.php:22
* @route '/contact'
*/
export const submitContactForm = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitContactForm.url(options),
    method: 'post',
})

submitContactForm.definition = {
    methods: ["post"],
    url: '/contact',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FormController::submitContactForm
* @see app/Http/Controllers/FormController.php:22
* @route '/contact'
*/
submitContactForm.url = (options?: RouteQueryOptions) => {
    return submitContactForm.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::submitContactForm
* @see app/Http/Controllers/FormController.php:22
* @route '/contact'
*/
submitContactForm.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitContactForm.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::submitContactForm
* @see app/Http/Controllers/FormController.php:22
* @route '/contact'
*/
const submitContactFormForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submitContactForm.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::submitContactForm
* @see app/Http/Controllers/FormController.php:22
* @route '/contact'
*/
submitContactFormForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submitContactForm.url(options),
    method: 'post',
})

submitContactForm.form = submitContactFormForm

/**
* @see \App\Http\Controllers\FormController::submitRequestDemo
* @see app/Http/Controllers/FormController.php:101
* @route '/request-demo'
*/
export const submitRequestDemo = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitRequestDemo.url(options),
    method: 'post',
})

submitRequestDemo.definition = {
    methods: ["post"],
    url: '/request-demo',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FormController::submitRequestDemo
* @see app/Http/Controllers/FormController.php:101
* @route '/request-demo'
*/
submitRequestDemo.url = (options?: RouteQueryOptions) => {
    return submitRequestDemo.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::submitRequestDemo
* @see app/Http/Controllers/FormController.php:101
* @route '/request-demo'
*/
submitRequestDemo.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitRequestDemo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::submitRequestDemo
* @see app/Http/Controllers/FormController.php:101
* @route '/request-demo'
*/
const submitRequestDemoForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submitRequestDemo.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::submitRequestDemo
* @see app/Http/Controllers/FormController.php:101
* @route '/request-demo'
*/
submitRequestDemoForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submitRequestDemo.url(options),
    method: 'post',
})

submitRequestDemo.form = submitRequestDemoForm

/**
* @see \App\Http\Controllers\FormController::submitNewsletter
* @see app/Http/Controllers/FormController.php:191
* @route '/newsletter'
*/
export const submitNewsletter = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitNewsletter.url(options),
    method: 'post',
})

submitNewsletter.definition = {
    methods: ["post"],
    url: '/newsletter',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FormController::submitNewsletter
* @see app/Http/Controllers/FormController.php:191
* @route '/newsletter'
*/
submitNewsletter.url = (options?: RouteQueryOptions) => {
    return submitNewsletter.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FormController::submitNewsletter
* @see app/Http/Controllers/FormController.php:191
* @route '/newsletter'
*/
submitNewsletter.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitNewsletter.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::submitNewsletter
* @see app/Http/Controllers/FormController.php:191
* @route '/newsletter'
*/
const submitNewsletterForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submitNewsletter.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FormController::submitNewsletter
* @see app/Http/Controllers/FormController.php:191
* @route '/newsletter'
*/
submitNewsletterForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submitNewsletter.url(options),
    method: 'post',
})

submitNewsletter.form = submitNewsletterForm

const FormController = { submitContactForm, submitRequestDemo, submitNewsletter }

export default FormController