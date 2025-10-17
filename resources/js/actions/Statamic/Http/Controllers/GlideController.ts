import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\GlideController::generateByAsset
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:89
 * @route '/img/asset/{container}/{path?}'
 */
export const generateByAsset = (args: { container: string | number, path?: string | number } | [container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateByAsset.url(args, options),
    method: 'get',
})

generateByAsset.definition = {
    methods: ["get","head"],
    url: '/img/asset/{container}/{path?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\GlideController::generateByAsset
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:89
 * @route '/img/asset/{container}/{path?}'
 */
generateByAsset.url = (args: { container: string | number, path?: string | number } | [container: string | number, path: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    container: args[0],
                    path: args[1],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "path",
        ])

    const parsedArgs = {
                        container: args.container,
                                path: args.path,
                }

    return generateByAsset.definition.url
            .replace('{container}', parsedArgs.container.toString())
            .replace('{path?}', parsedArgs.path?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\GlideController::generateByAsset
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:89
 * @route '/img/asset/{container}/{path?}'
 */
generateByAsset.get = (args: { container: string | number, path?: string | number } | [container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateByAsset.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\GlideController::generateByAsset
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:89
 * @route '/img/asset/{container}/{path?}'
 */
generateByAsset.head = (args: { container: string | number, path?: string | number } | [container: string | number, path: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generateByAsset.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\GlideController::generateByAsset
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:89
 * @route '/img/asset/{container}/{path?}'
 */
    const generateByAssetForm = (args: { container: string | number, path?: string | number } | [container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: generateByAsset.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\GlideController::generateByAsset
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:89
 * @route '/img/asset/{container}/{path?}'
 */
        generateByAssetForm.get = (args: { container: string | number, path?: string | number } | [container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generateByAsset.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\GlideController::generateByAsset
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:89
 * @route '/img/asset/{container}/{path?}'
 */
        generateByAssetForm.head = (args: { container: string | number, path?: string | number } | [container: string | number, path: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generateByAsset.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    generateByAsset.form = generateByAssetForm
/**
* @see \Statamic\Http\Controllers\GlideController::generateByUrl
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:72
 * @route '/img/http/{url}/{filename?}'
 */
export const generateByUrl = (args: { url: string | number, filename?: string | number } | [url: string | number, filename: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateByUrl.url(args, options),
    method: 'get',
})

generateByUrl.definition = {
    methods: ["get","head"],
    url: '/img/http/{url}/{filename?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\GlideController::generateByUrl
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:72
 * @route '/img/http/{url}/{filename?}'
 */
generateByUrl.url = (args: { url: string | number, filename?: string | number } | [url: string | number, filename: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    url: args[0],
                    filename: args[1],
                }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
            "filename",
        ])

    const parsedArgs = {
                        url: args.url,
                                filename: args.filename,
                }

    return generateByUrl.definition.url
            .replace('{url}', parsedArgs.url.toString())
            .replace('{filename?}', parsedArgs.filename?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\GlideController::generateByUrl
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:72
 * @route '/img/http/{url}/{filename?}'
 */
generateByUrl.get = (args: { url: string | number, filename?: string | number } | [url: string | number, filename: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateByUrl.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\GlideController::generateByUrl
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:72
 * @route '/img/http/{url}/{filename?}'
 */
generateByUrl.head = (args: { url: string | number, filename?: string | number } | [url: string | number, filename: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generateByUrl.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\GlideController::generateByUrl
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:72
 * @route '/img/http/{url}/{filename?}'
 */
    const generateByUrlForm = (args: { url: string | number, filename?: string | number } | [url: string | number, filename: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: generateByUrl.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\GlideController::generateByUrl
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:72
 * @route '/img/http/{url}/{filename?}'
 */
        generateByUrlForm.get = (args: { url: string | number, filename?: string | number } | [url: string | number, filename: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generateByUrl.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\GlideController::generateByUrl
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:72
 * @route '/img/http/{url}/{filename?}'
 */
        generateByUrlForm.head = (args: { url: string | number, filename?: string | number } | [url: string | number, filename: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generateByUrl.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    generateByUrl.form = generateByUrlForm
/**
* @see \Statamic\Http\Controllers\GlideController::generateByPath
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:51
 * @route '/img/{path}'
 */
export const generateByPath = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateByPath.url(args, options),
    method: 'get',
})

generateByPath.definition = {
    methods: ["get","head"],
    url: '/img/{path}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\GlideController::generateByPath
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:51
 * @route '/img/{path}'
 */
generateByPath.url = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { path: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    path: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        path: args.path,
                }

    return generateByPath.definition.url
            .replace('{path}', parsedArgs.path.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\GlideController::generateByPath
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:51
 * @route '/img/{path}'
 */
generateByPath.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateByPath.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\GlideController::generateByPath
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:51
 * @route '/img/{path}'
 */
generateByPath.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generateByPath.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\GlideController::generateByPath
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:51
 * @route '/img/{path}'
 */
    const generateByPathForm = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: generateByPath.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\GlideController::generateByPath
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:51
 * @route '/img/{path}'
 */
        generateByPathForm.get = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generateByPath.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\GlideController::generateByPath
 * @see vendor/statamic/cms/src/Http/Controllers/GlideController.php:51
 * @route '/img/{path}'
 */
        generateByPathForm.head = (args: { path: string | number } | [path: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generateByPath.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    generateByPath.form = generateByPathForm
const GlideController = { generateByAsset, generateByUrl, generateByPath }

export default GlideController