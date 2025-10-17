import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\EditRedirectController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EditRedirectController.php:12
 * @route '/cp/edit/{id}'
 */
const EditRedirectController = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRedirectController.url(args, options),
    method: 'get',
})

EditRedirectController.definition = {
    methods: ["get","head"],
    url: '/cp/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\EditRedirectController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EditRedirectController.php:12
 * @route '/cp/edit/{id}'
 */
EditRedirectController.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return EditRedirectController.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\EditRedirectController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EditRedirectController.php:12
 * @route '/cp/edit/{id}'
 */
EditRedirectController.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRedirectController.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Collections\EditRedirectController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EditRedirectController.php:12
 * @route '/cp/edit/{id}'
 */
EditRedirectController.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRedirectController.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Collections\EditRedirectController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EditRedirectController.php:12
 * @route '/cp/edit/{id}'
 */
    const EditRedirectControllerForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditRedirectController.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Collections\EditRedirectController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EditRedirectController.php:12
 * @route '/cp/edit/{id}'
 */
        EditRedirectControllerForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditRedirectController.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Collections\EditRedirectController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/EditRedirectController.php:12
 * @route '/cp/edit/{id}'
 */
        EditRedirectControllerForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditRedirectController.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditRedirectController.form = EditRedirectControllerForm
export default EditRedirectController