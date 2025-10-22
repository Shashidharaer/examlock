import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Utilities\EmailController::send
* @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/EmailController.php:11
* @route '/cp/utilities/email'
*/
export const send = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

send.definition = {
    methods: ["post"],
    url: '/cp/utilities/email',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Utilities\EmailController::send
* @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/EmailController.php:11
* @route '/cp/utilities/email'
*/
send.url = (options?: RouteQueryOptions) => {
    return send.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Utilities\EmailController::send
* @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/EmailController.php:11
* @route '/cp/utilities/email'
*/
send.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Utilities\EmailController::send
* @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/EmailController.php:11
* @route '/cp/utilities/email'
*/
const sendForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: send.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Utilities\EmailController::send
* @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/EmailController.php:11
* @route '/cp/utilities/email'
*/
sendForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: send.url(options),
    method: 'post',
})

send.form = sendForm

const EmailController = { send }

export default EmailController