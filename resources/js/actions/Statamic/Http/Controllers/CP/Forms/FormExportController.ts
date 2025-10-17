import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Forms\FormExportController::exportMethod
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormExportController.php:10
 * @route '/cp/forms/{form}/export/{type}'
 */
export const exportMethod = (args: { form: string | number, type: string | number } | [form: string | number, type: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(args, options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/cp/forms/{form}/export/{type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormExportController::exportMethod
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormExportController.php:10
 * @route '/cp/forms/{form}/export/{type}'
 */
exportMethod.url = (args: { form: string | number, type: string | number } | [form: string | number, type: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    form: args[0],
                    type: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        form: args.form,
                                type: args.type,
                }

    return exportMethod.definition.url
            .replace('{form}', parsedArgs.form.toString())
            .replace('{type}', parsedArgs.type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Forms\FormExportController::exportMethod
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormExportController.php:10
 * @route '/cp/forms/{form}/export/{type}'
 */
exportMethod.get = (args: { form: string | number, type: string | number } | [form: string | number, type: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Forms\FormExportController::exportMethod
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormExportController.php:10
 * @route '/cp/forms/{form}/export/{type}'
 */
exportMethod.head = (args: { form: string | number, type: string | number } | [form: string | number, type: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Forms\FormExportController::exportMethod
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormExportController.php:10
 * @route '/cp/forms/{form}/export/{type}'
 */
    const exportMethodForm = (args: { form: string | number, type: string | number } | [form: string | number, type: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportMethod.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormExportController::exportMethod
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormExportController.php:10
 * @route '/cp/forms/{form}/export/{type}'
 */
        exportMethodForm.get = (args: { form: string | number, type: string | number } | [form: string | number, type: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Forms\FormExportController::exportMethod
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Forms/FormExportController.php:10
 * @route '/cp/forms/{form}/export/{type}'
 */
        exportMethodForm.head = (args: { form: string | number, type: string | number } | [form: string | number, type: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exportMethod.form = exportMethodForm
const FormExportController = { exportMethod, export: exportMethod }

export default FormExportController