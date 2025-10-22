import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:14
* @route '/cp/fieldtypes/relationship'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/fieldtypes/relationship',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:14
* @route '/cp/fieldtypes/relationship'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:14
* @route '/cp/fieldtypes/relationship'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:14
* @route '/cp/fieldtypes/relationship'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:14
* @route '/cp/fieldtypes/relationship'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:14
* @route '/cp/fieldtypes/relationship'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:14
* @route '/cp/fieldtypes/relationship'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::data
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:27
* @route '/cp/fieldtypes/relationship/data'
*/
export const data = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: data.url(options),
    method: 'post',
})

data.definition = {
    methods: ["post"],
    url: '/cp/fieldtypes/relationship/data',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::data
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:27
* @route '/cp/fieldtypes/relationship/data'
*/
data.url = (options?: RouteQueryOptions) => {
    return data.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::data
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:27
* @route '/cp/fieldtypes/relationship/data'
*/
data.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: data.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::data
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:27
* @route '/cp/fieldtypes/relationship/data'
*/
const dataForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: data.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::data
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:27
* @route '/cp/fieldtypes/relationship/data'
*/
dataForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: data.url(options),
    method: 'post',
})

data.form = dataForm

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::filters
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:38
* @route '/cp/fieldtypes/relationship/filters'
*/
export const filters = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: filters.url(options),
    method: 'get',
})

filters.definition = {
    methods: ["get","head"],
    url: '/cp/fieldtypes/relationship/filters',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::filters
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:38
* @route '/cp/fieldtypes/relationship/filters'
*/
filters.url = (options?: RouteQueryOptions) => {
    return filters.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::filters
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:38
* @route '/cp/fieldtypes/relationship/filters'
*/
filters.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: filters.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::filters
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:38
* @route '/cp/fieldtypes/relationship/filters'
*/
filters.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: filters.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::filters
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:38
* @route '/cp/fieldtypes/relationship/filters'
*/
const filtersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: filters.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::filters
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:38
* @route '/cp/fieldtypes/relationship/filters'
*/
filtersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: filters.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\RelationshipFieldtypeController::filters
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/RelationshipFieldtypeController.php:38
* @route '/cp/fieldtypes/relationship/filters'
*/
filtersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: filters.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

filters.form = filtersForm

const RelationshipFieldtypeController = { index, data, filters }

export default RelationshipFieldtypeController