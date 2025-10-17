import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
import cacheB9721a from './cache'
import searchD2f59a from './search'
import licensingC7d7be from './licensing'
/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:11
 * @route '/cp/utilities'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp/utilities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:11
 * @route '/cp/utilities'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:11
 * @route '/cp/utilities'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:11
 * @route '/cp/utilities'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:11
 * @route '/cp/utilities'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:11
 * @route '/cp/utilities'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::index
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:11
 * @route '/cp/utilities'
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
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::cache
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:15
 * @route '/cp/utilities/cache'
 */
export const cache = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cache.url(options),
    method: 'get',
})

cache.definition = {
    methods: ["get","head"],
    url: '/cp/utilities/cache',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::cache
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:15
 * @route '/cp/utilities/cache'
 */
cache.url = (options?: RouteQueryOptions) => {
    return cache.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::cache
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:15
 * @route '/cp/utilities/cache'
 */
cache.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cache.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::cache
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:15
 * @route '/cp/utilities/cache'
 */
cache.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cache.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::cache
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:15
 * @route '/cp/utilities/cache'
 */
    const cacheForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cache.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::cache
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:15
 * @route '/cp/utilities/cache'
 */
        cacheForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cache.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Utilities\CacheController::cache
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/CacheController.php:15
 * @route '/cp/utilities/cache'
 */
        cacheForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cache.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cache.form = cacheForm
/**
* @see \Statamic\Http\Controllers\CP\Utilities\PhpInfoController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/PhpInfoController.php:10
 * @route '/cp/utilities/phpinfo'
 */
export const phpinfo = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: phpinfo.url(options),
    method: 'get',
})

phpinfo.definition = {
    methods: ["get","head"],
    url: '/cp/utilities/phpinfo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Utilities\PhpInfoController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/PhpInfoController.php:10
 * @route '/cp/utilities/phpinfo'
 */
phpinfo.url = (options?: RouteQueryOptions) => {
    return phpinfo.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Utilities\PhpInfoController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/PhpInfoController.php:10
 * @route '/cp/utilities/phpinfo'
 */
phpinfo.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: phpinfo.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Utilities\PhpInfoController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/PhpInfoController.php:10
 * @route '/cp/utilities/phpinfo'
 */
phpinfo.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: phpinfo.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Utilities\PhpInfoController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/PhpInfoController.php:10
 * @route '/cp/utilities/phpinfo'
 */
    const phpinfoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: phpinfo.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Utilities\PhpInfoController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/PhpInfoController.php:10
 * @route '/cp/utilities/phpinfo'
 */
        phpinfoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: phpinfo.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Utilities\PhpInfoController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/PhpInfoController.php:10
 * @route '/cp/utilities/phpinfo'
 */
        phpinfoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: phpinfo.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    phpinfo.form = phpinfoForm
/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::search
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/cp/utilities/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::search
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::search
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/search'
 */
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::search
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/search'
 */
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::search
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: search.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::search
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/search'
 */
        searchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::search
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/search'
 */
        searchForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    search.form = searchForm
/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::email
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/email'
 */
export const email = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: email.url(options),
    method: 'get',
})

email.definition = {
    methods: ["get","head"],
    url: '/cp/utilities/email',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::email
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/email'
 */
email.url = (options?: RouteQueryOptions) => {
    return email.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::email
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/email'
 */
email.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: email.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::email
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/email'
 */
email.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: email.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::email
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/email'
 */
    const emailForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: email.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::email
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/email'
 */
        emailForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: email.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Utilities\UtilitiesController::email
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Utilities/UtilitiesController.php:18
 * @route '/cp/utilities/email'
 */
        emailForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: email.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    email.form = emailForm
/**
* @see \Statamic\Http\Controllers\CP\LicensingController::licensing
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:9
 * @route '/cp/utilities/licensing'
 */
export const licensing = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: licensing.url(options),
    method: 'get',
})

licensing.definition = {
    methods: ["get","head"],
    url: '/cp/utilities/licensing',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\LicensingController::licensing
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:9
 * @route '/cp/utilities/licensing'
 */
licensing.url = (options?: RouteQueryOptions) => {
    return licensing.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\LicensingController::licensing
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:9
 * @route '/cp/utilities/licensing'
 */
licensing.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: licensing.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\LicensingController::licensing
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:9
 * @route '/cp/utilities/licensing'
 */
licensing.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: licensing.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\LicensingController::licensing
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:9
 * @route '/cp/utilities/licensing'
 */
    const licensingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: licensing.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\LicensingController::licensing
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:9
 * @route '/cp/utilities/licensing'
 */
        licensingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: licensing.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\LicensingController::licensing
 * @see vendor/statamic/cms/src/Http/Controllers/CP/LicensingController.php:9
 * @route '/cp/utilities/licensing'
 */
        licensingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: licensing.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    licensing.form = licensingForm
const utilities = {
    index: Object.assign(index, index),
cache: Object.assign(cache, cacheB9721a),
phpinfo: Object.assign(phpinfo, phpinfo),
search: Object.assign(search, searchD2f59a),
email: Object.assign(email, email),
licensing: Object.assign(licensing, licensingC7d7be),
}

export default utilities