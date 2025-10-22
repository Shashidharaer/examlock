import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:19
* @route '/cp/collections/{collection}/scaffold'
*/
export const create = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(args, options),
    method: 'post',
})

create.definition = {
    methods: ["post"],
    url: '/cp/collections/{collection}/scaffold',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:19
* @route '/cp/collections/{collection}/scaffold'
*/
create.url = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { collection: args }
    }

    if (Array.isArray(args)) {
        args = {
            collection: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        collection: args.collection,
    }

    return create.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:19
* @route '/cp/collections/{collection}/scaffold'
*/
create.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:19
* @route '/cp/collections/{collection}/scaffold'
*/
const createForm = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: create.url(args, options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Collections\ScaffoldCollectionController::create
* @see vendor/statamic/cms/src/Http/Controllers/CP/Collections/ScaffoldCollectionController.php:19
* @route '/cp/collections/{collection}/scaffold'
*/
createForm.post = (args: { collection: string | number } | [collection: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: create.url(args, options),
    method: 'post',
})

create.form = createForm

const scaffold = {
    create: Object.assign(create, create),
}

export default scaffold