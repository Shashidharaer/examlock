import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\LocalizeEntryController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/LocalizeEntryController.php:11
* @route '/cp/collections/{collection}/entries/{entry}/localize'
*/
const LocalizeEntryController = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LocalizeEntryController.url(args, options),
    method: 'post',
})

LocalizeEntryController.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/entries/{entry}/localize',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\LocalizeEntryController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/LocalizeEntryController.php:11
* @route '/cp/collections/{collection}/entries/{entry}/localize'
*/
LocalizeEntryController.url = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            collection: args[0],
            entry: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        collection: args.collection,
        entry: args.entry,
    }

    return LocalizeEntryController.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{entry}', parsedArgs.entry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\LocalizeEntryController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/LocalizeEntryController.php:11
* @route '/cp/collections/{collection}/entries/{entry}/localize'
*/
LocalizeEntryController.post = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: LocalizeEntryController.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\LocalizeEntryController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/LocalizeEntryController.php:11
* @route '/cp/collections/{collection}/entries/{entry}/localize'
*/
const LocalizeEntryControllerForm = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LocalizeEntryController.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\LocalizeEntryController::__invoke
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/LocalizeEntryController.php:11
* @route '/cp/collections/{collection}/entries/{entry}/localize'
*/
LocalizeEntryControllerForm.post = (args: { collection: string | number, entry: string | number } | [collection: string | number, entry: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: LocalizeEntryController.url(args, options),
    method: 'post',
})

LocalizeEntryController.form = LocalizeEntryControllerForm

export default LocalizeEntryController