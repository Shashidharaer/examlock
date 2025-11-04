import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:23
* @route '/cp/assets/browse'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/assets/browse',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:23
* @route '/cp/assets/browse'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:23
* @route '/cp/assets/browse'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:23
* @route '/cp/assets/browse'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:23
* @route '/cp/assets/browse'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:23
* @route '/cp/assets/browse'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::index
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:23
* @route '/cp/assets/browse'
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
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::search
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:144
* @route '/cp/assets/browse/search/{asset_container}/{path?}'
*/
export const search = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(args, options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/cp/assets/browse/search/{asset_container}/{path?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::search
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:144
* @route '/cp/assets/browse/search/{asset_container}/{path?}'
*/
search.url = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            asset_container: args[0],
            path: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "path",
    ])

    const parsedArgs = {
        asset_container: args.asset_container,
        path: args.path,
    }

    return search.definition.url
            .replace('{asset_container}', parsedArgs.asset_container.toString())
            .replace('{path?}', parsedArgs.path?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::search
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:144
* @route '/cp/assets/browse/search/{asset_container}/{path?}'
*/
search.get = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::search
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:144
* @route '/cp/assets/browse/search/{asset_container}/{path?}'
*/
search.head = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::search
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:144
* @route '/cp/assets/browse/search/{asset_container}/{path?}'
*/
const searchForm = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::search
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:144
* @route '/cp/assets/browse/search/{asset_container}/{path?}'
*/
searchForm.get = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::search
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:144
* @route '/cp/assets/browse/search/{asset_container}/{path?}'
*/
searchForm.head = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

search.form = searchForm

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::folder
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:75
* @route '/cp/assets/browse/folders/{asset_container}/{path?}'
*/
export const folder = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: folder.url(args, options),
    method: 'get',
})

folder.definition = {
    methods: ["get","head"],
    url: '/cp/assets/browse/folders/{asset_container}/{path?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::folder
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:75
* @route '/cp/assets/browse/folders/{asset_container}/{path?}'
*/
folder.url = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            asset_container: args[0],
            path: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "path",
    ])

    const parsedArgs = {
        asset_container: args.asset_container,
        path: args.path,
    }

    return folder.definition.url
            .replace('{asset_container}', parsedArgs.asset_container.toString())
            .replace('{path?}', parsedArgs.path?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::folder
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:75
* @route '/cp/assets/browse/folders/{asset_container}/{path?}'
*/
folder.get = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: folder.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::folder
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:75
* @route '/cp/assets/browse/folders/{asset_container}/{path?}'
*/
folder.head = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: folder.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::folder
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:75
* @route '/cp/assets/browse/folders/{asset_container}/{path?}'
*/
const folderForm = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: folder.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::folder
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:75
* @route '/cp/assets/browse/folders/{asset_container}/{path?}'
*/
folderForm.get = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: folder.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::folder
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:75
* @route '/cp/assets/browse/folders/{asset_container}/{path?}'
*/
folderForm.head = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: folder.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

folder.form = folderForm

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:54
* @route '/cp/assets/browse/{asset_container}/{path?}/edit'
*/
export const edit = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cp/assets/browse/{asset_container}/{path?}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:54
* @route '/cp/assets/browse/{asset_container}/{path?}/edit'
*/
edit.url = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            asset_container: args[0],
            path: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "path",
    ])

    const parsedArgs = {
        asset_container: args.asset_container,
        path: args.path,
    }

    return edit.definition.url
            .replace('{asset_container}', parsedArgs.asset_container.toString())
            .replace('{path?}', parsedArgs.path?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:54
* @route '/cp/assets/browse/{asset_container}/{path?}/edit'
*/
edit.get = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:54
* @route '/cp/assets/browse/{asset_container}/{path?}/edit'
*/
edit.head = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:54
* @route '/cp/assets/browse/{asset_container}/{path?}/edit'
*/
const editForm = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:54
* @route '/cp/assets/browse/{asset_container}/{path?}/edit'
*/
editForm.get = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::edit
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:54
* @route '/cp/assets/browse/{asset_container}/{path?}/edit'
*/
editForm.head = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:34
* @route '/cp/assets/browse/{asset_container}/{path?}'
*/
export const show = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/cp/assets/browse/{asset_container}/{path?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:34
* @route '/cp/assets/browse/{asset_container}/{path?}'
*/
show.url = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            asset_container: args[0],
            path: args[1],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "path",
    ])

    const parsedArgs = {
        asset_container: args.asset_container,
        path: args.path,
    }

    return show.definition.url
            .replace('{asset_container}', parsedArgs.asset_container.toString())
            .replace('{path?}', parsedArgs.path?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:34
* @route '/cp/assets/browse/{asset_container}/{path?}'
*/
show.get = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:34
* @route '/cp/assets/browse/{asset_container}/{path?}'
*/
show.head = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:34
* @route '/cp/assets/browse/{asset_container}/{path?}'
*/
const showForm = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:34
* @route '/cp/assets/browse/{asset_container}/{path?}'
*/
showForm.get = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Statamic\Http\Controllers\CP\Assets\BrowserController::show
* @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/BrowserController.php:34
* @route '/cp/assets/browse/{asset_container}/{path?}'
*/
showForm.head = (args: { asset_container: string | number, path?: string | number } | [asset_container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const BrowserController = { index, search, folder, edit, show }

export default BrowserController