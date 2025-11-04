import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\DictionaryFieldtypeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/DictionaryFieldtypeController.php:12
* @route '/cp/fieldtypes/dictionaries/{dictionary}'
*/
const DictionaryFieldtypeController = (args: { dictionary: string | number } | [dictionary: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DictionaryFieldtypeController.url(args, options),
    method: 'get',
})

DictionaryFieldtypeController.definition = {
    methods: ["get","head"],
    url: '/cp/fieldtypes/dictionaries/{dictionary}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\DictionaryFieldtypeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/DictionaryFieldtypeController.php:12
* @route '/cp/fieldtypes/dictionaries/{dictionary}'
*/
DictionaryFieldtypeController.url = (args: { dictionary: string | number } | [dictionary: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dictionary: args }
    }

    if (Array.isArray(args)) {
        args = {
            dictionary: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        dictionary: args.dictionary,
    }

    return DictionaryFieldtypeController.definition.url
            .replace('{dictionary}', parsedArgs.dictionary.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\DictionaryFieldtypeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/DictionaryFieldtypeController.php:12
* @route '/cp/fieldtypes/dictionaries/{dictionary}'
*/
DictionaryFieldtypeController.get = (args: { dictionary: string | number } | [dictionary: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: DictionaryFieldtypeController.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\DictionaryFieldtypeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/DictionaryFieldtypeController.php:12
* @route '/cp/fieldtypes/dictionaries/{dictionary}'
*/
DictionaryFieldtypeController.head = (args: { dictionary: string | number } | [dictionary: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: DictionaryFieldtypeController.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\DictionaryFieldtypeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/DictionaryFieldtypeController.php:12
* @route '/cp/fieldtypes/dictionaries/{dictionary}'
*/
const DictionaryFieldtypeControllerForm = (args: { dictionary: string | number } | [dictionary: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DictionaryFieldtypeController.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\DictionaryFieldtypeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/DictionaryFieldtypeController.php:12
* @route '/cp/fieldtypes/dictionaries/{dictionary}'
*/
DictionaryFieldtypeControllerForm.get = (args: { dictionary: string | number } | [dictionary: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DictionaryFieldtypeController.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\DictionaryFieldtypeController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/DictionaryFieldtypeController.php:12
* @route '/cp/fieldtypes/dictionaries/{dictionary}'
*/
DictionaryFieldtypeControllerForm.head = (args: { dictionary: string | number } | [dictionary: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: DictionaryFieldtypeController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

DictionaryFieldtypeController.form = DictionaryFieldtypeControllerForm

export default DictionaryFieldtypeController