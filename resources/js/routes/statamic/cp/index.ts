import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import password from './password'
import impersonation from './impersonation'
import navigation from './navigation'
import collections from './collections'
import taxonomies from './taxonomies'
import globals from './globals'
import assetContainers from './asset-containers'
import assets from './assets'
import sites from './sites'
import fields from './fields'
import fieldsets from './fieldsets'
import blueprints from './blueprints'
import updater7f3d05 from './updater'
import duplicatesA7087f from './duplicates'
import addons from './addons'
import forms from './forms'
import users from './users'
import userGroups from './user-groups'
import roles from './roles'
import user from './user'
import utilities from './utilities'
import relationship from './relationship'
import markdown from './markdown'
import files from './files'
import api from './api'
import preferences from './preferences'
import session from './session'
/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::login
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:35
 * @route '/cp/auth/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/cp/auth/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::login
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:35
 * @route '/cp/auth/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::login
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:35
 * @route '/cp/auth/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::login
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:35
 * @route '/cp/auth/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::login
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:35
 * @route '/cp/auth/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::login
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:35
 * @route '/cp/auth/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::login
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:35
 * @route '/cp/auth/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::logout
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:130
 * @route '/cp/auth/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

logout.definition = {
    methods: ["get","head"],
    url: '/cp/auth/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::logout
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:130
 * @route '/cp/auth/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::logout
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:130
 * @route '/cp/auth/logout'
 */
logout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::logout
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:130
 * @route '/cp/auth/logout'
 */
logout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::logout
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:130
 * @route '/cp/auth/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: logout.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::logout
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:130
 * @route '/cp/auth/logout'
 */
        logoutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: logout.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Auth\LoginController::logout
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/LoginController.php:130
 * @route '/cp/auth/logout'
 */
        logoutForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: logout.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    logout.form = logoutForm
/**
* @see \Statamic\Http\Controllers\CP\Auth\CsrfTokenController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/CsrfTokenController.php:9
 * @route '/cp/auth/token'
 */
export const token = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: token.url(options),
    method: 'get',
})

token.definition = {
    methods: ["get","head"],
    url: '/cp/auth/token',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Auth\CsrfTokenController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/CsrfTokenController.php:9
 * @route '/cp/auth/token'
 */
token.url = (options?: RouteQueryOptions) => {
    return token.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Auth\CsrfTokenController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/CsrfTokenController.php:9
 * @route '/cp/auth/token'
 */
token.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: token.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Auth\CsrfTokenController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/CsrfTokenController.php:9
 * @route '/cp/auth/token'
 */
token.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: token.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Auth\CsrfTokenController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/CsrfTokenController.php:9
 * @route '/cp/auth/token'
 */
    const tokenForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: token.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Auth\CsrfTokenController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/CsrfTokenController.php:9
 * @route '/cp/auth/token'
 */
        tokenForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: token.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Auth\CsrfTokenController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/CsrfTokenController.php:9
 * @route '/cp/auth/token'
 */
        tokenForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: token.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    token.form = tokenForm
/**
* @see \Statamic\Http\Controllers\CP\Auth\ExtendSessionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ExtendSessionController.php:9
 * @route '/cp/auth/extend'
 */
export const extend = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: extend.url(options),
    method: 'get',
})

extend.definition = {
    methods: ["get","head"],
    url: '/cp/auth/extend',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Auth\ExtendSessionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ExtendSessionController.php:9
 * @route '/cp/auth/extend'
 */
extend.url = (options?: RouteQueryOptions) => {
    return extend.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Auth\ExtendSessionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ExtendSessionController.php:9
 * @route '/cp/auth/extend'
 */
extend.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: extend.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Auth\ExtendSessionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ExtendSessionController.php:9
 * @route '/cp/auth/extend'
 */
extend.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: extend.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Auth\ExtendSessionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ExtendSessionController.php:9
 * @route '/cp/auth/extend'
 */
    const extendForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: extend.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Auth\ExtendSessionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ExtendSessionController.php:9
 * @route '/cp/auth/extend'
 */
        extendForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: extend.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Auth\ExtendSessionController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/ExtendSessionController.php:9
 * @route '/cp/auth/extend'
 */
        extendForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: extend.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    extend.form = extendForm
/**
* @see \Statamic\Http\Controllers\CP\Auth\UnauthorizedController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/UnauthorizedController.php:7
 * @route '/cp/auth/unauthorized'
 */
export const unauthorized = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unauthorized.url(options),
    method: 'get',
})

unauthorized.definition = {
    methods: ["get","head"],
    url: '/cp/auth/unauthorized',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Auth\UnauthorizedController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/UnauthorizedController.php:7
 * @route '/cp/auth/unauthorized'
 */
unauthorized.url = (options?: RouteQueryOptions) => {
    return unauthorized.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Auth\UnauthorizedController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/UnauthorizedController.php:7
 * @route '/cp/auth/unauthorized'
 */
unauthorized.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unauthorized.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Auth\UnauthorizedController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/UnauthorizedController.php:7
 * @route '/cp/auth/unauthorized'
 */
unauthorized.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: unauthorized.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Auth\UnauthorizedController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/UnauthorizedController.php:7
 * @route '/cp/auth/unauthorized'
 */
    const unauthorizedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: unauthorized.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Auth\UnauthorizedController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/UnauthorizedController.php:7
 * @route '/cp/auth/unauthorized'
 */
        unauthorizedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unauthorized.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Auth\UnauthorizedController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Auth/UnauthorizedController.php:7
 * @route '/cp/auth/unauthorized'
 */
        unauthorizedForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unauthorized.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    unauthorized.form = unauthorizedForm
/**
* @see \Statamic\Http\Controllers\CP\StartPageController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/StartPageController.php:9
 * @route '/cp'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cp',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\StartPageController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/StartPageController.php:9
 * @route '/cp'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\StartPageController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/StartPageController.php:9
 * @route '/cp'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\StartPageController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/StartPageController.php:9
 * @route '/cp'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\StartPageController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/StartPageController.php:9
 * @route '/cp'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\StartPageController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/StartPageController.php:9
 * @route '/cp'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\StartPageController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/StartPageController.php:9
 * @route '/cp'
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
* @see \Statamic\Http\Controllers\CP\DashboardController::dashboard
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DashboardController.php:18
 * @route '/cp/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/cp/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\DashboardController::dashboard
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DashboardController.php:18
 * @route '/cp/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\DashboardController::dashboard
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DashboardController.php:18
 * @route '/cp/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\DashboardController::dashboard
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DashboardController.php:18
 * @route '/cp/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\DashboardController::dashboard
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DashboardController.php:18
 * @route '/cp/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\DashboardController::dashboard
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DashboardController.php:18
 * @route '/cp/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\DashboardController::dashboard
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DashboardController.php:18
 * @route '/cp/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::updater
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:18
 * @route '/cp/updater'
 */
export const updater = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: updater.url(options),
    method: 'get',
})

updater.definition = {
    methods: ["get","head"],
    url: '/cp/updater',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::updater
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:18
 * @route '/cp/updater'
 */
updater.url = (options?: RouteQueryOptions) => {
    return updater.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::updater
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:18
 * @route '/cp/updater'
 */
updater.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: updater.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::updater
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:18
 * @route '/cp/updater'
 */
updater.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: updater.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::updater
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:18
 * @route '/cp/updater'
 */
    const updaterForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: updater.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::updater
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:18
 * @route '/cp/updater'
 */
        updaterForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: updater.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Updater\UpdaterController::updater
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Updater/UpdaterController.php:18
 * @route '/cp/updater'
 */
        updaterForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: updater.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    updater.form = updaterForm
/**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::duplicates
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:13
 * @route '/cp/duplicates'
 */
export const duplicates = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: duplicates.url(options),
    method: 'get',
})

duplicates.definition = {
    methods: ["get","head"],
    url: '/cp/duplicates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::duplicates
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:13
 * @route '/cp/duplicates'
 */
duplicates.url = (options?: RouteQueryOptions) => {
    return duplicates.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::duplicates
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:13
 * @route '/cp/duplicates'
 */
duplicates.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: duplicates.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::duplicates
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:13
 * @route '/cp/duplicates'
 */
duplicates.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: duplicates.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::duplicates
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:13
 * @route '/cp/duplicates'
 */
    const duplicatesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: duplicates.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::duplicates
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:13
 * @route '/cp/duplicates'
 */
        duplicatesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: duplicates.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\DuplicatesController::duplicates
 * @see vendor/statamic/cms/src/Http/Controllers/CP/DuplicatesController.php:13
 * @route '/cp/duplicates'
 */
        duplicatesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: duplicates.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    duplicates.form = duplicatesForm
/**
* @see \Statamic\Http\Controllers\CP\Users\AccountController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/AccountController.php:11
 * @route '/cp/account'
 */
export const account = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: account.url(options),
    method: 'get',
})

account.definition = {
    methods: ["get","head"],
    url: '/cp/account',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Users\AccountController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/AccountController.php:11
 * @route '/cp/account'
 */
account.url = (options?: RouteQueryOptions) => {
    return account.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Users\AccountController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/AccountController.php:11
 * @route '/cp/account'
 */
account.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: account.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Users\AccountController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/AccountController.php:11
 * @route '/cp/account'
 */
account.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: account.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Users\AccountController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/AccountController.php:11
 * @route '/cp/account'
 */
    const accountForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: account.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Users\AccountController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/AccountController.php:11
 * @route '/cp/account'
 */
        accountForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: account.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Users\AccountController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Users/AccountController.php:11
 * @route '/cp/account'
 */
        accountForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: account.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    account.form = accountForm
/**
* @see \Statamic\Http\Controllers\CP\SearchController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/SearchController.php:12
 * @route '/cp/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/cp/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\SearchController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/SearchController.php:12
 * @route '/cp/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\SearchController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/SearchController.php:12
 * @route '/cp/search'
 */
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\SearchController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/SearchController.php:12
 * @route '/cp/search'
 */
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\SearchController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/SearchController.php:12
 * @route '/cp/search'
 */
    const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: search.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\SearchController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/SearchController.php:12
 * @route '/cp/search'
 */
        searchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: search.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\SearchController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/SearchController.php:12
 * @route '/cp/search'
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
* @see \Statamic\Http\Controllers\CP\Fieldtypes\DictionaryFieldtypeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/DictionaryFieldtypeController.php:12
 * @route '/cp/fieldtypes/dictionaries/{dictionary}'
 */
export const dictionaryFieldtype = (args: { dictionary: string | number } | [dictionary: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dictionaryFieldtype.url(args, options),
    method: 'get',
})

dictionaryFieldtype.definition = {
    methods: ["get","head"],
    url: '/cp/fieldtypes/dictionaries/{dictionary}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\DictionaryFieldtypeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/DictionaryFieldtypeController.php:12
 * @route '/cp/fieldtypes/dictionaries/{dictionary}'
 */
dictionaryFieldtype.url = (args: { dictionary: string | number } | [dictionary: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return dictionaryFieldtype.definition.url
            .replace('{dictionary}', parsedArgs.dictionary.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\DictionaryFieldtypeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/DictionaryFieldtypeController.php:12
 * @route '/cp/fieldtypes/dictionaries/{dictionary}'
 */
dictionaryFieldtype.get = (args: { dictionary: string | number } | [dictionary: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dictionaryFieldtype.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\DictionaryFieldtypeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/DictionaryFieldtypeController.php:12
 * @route '/cp/fieldtypes/dictionaries/{dictionary}'
 */
dictionaryFieldtype.head = (args: { dictionary: string | number } | [dictionary: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dictionaryFieldtype.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\DictionaryFieldtypeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/DictionaryFieldtypeController.php:12
 * @route '/cp/fieldtypes/dictionaries/{dictionary}'
 */
    const dictionaryFieldtypeForm = (args: { dictionary: string | number } | [dictionary: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dictionaryFieldtype.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\DictionaryFieldtypeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/DictionaryFieldtypeController.php:12
 * @route '/cp/fieldtypes/dictionaries/{dictionary}'
 */
        dictionaryFieldtypeForm.get = (args: { dictionary: string | number } | [dictionary: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dictionaryFieldtype.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\DictionaryFieldtypeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/DictionaryFieldtypeController.php:12
 * @route '/cp/fieldtypes/dictionaries/{dictionary}'
 */
        dictionaryFieldtypeForm.head = (args: { dictionary: string | number } | [dictionary: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dictionaryFieldtype.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dictionaryFieldtype.form = dictionaryFieldtypeForm
/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\IconFieldtypeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/IconFieldtypeController.php:12
 * @route '/cp/fieldtypes/icons'
 */
export const iconFieldtype = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: iconFieldtype.url(options),
    method: 'post',
})

iconFieldtype.definition = {
    methods: ["post"],
    url: '/cp/fieldtypes/icons',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\IconFieldtypeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/IconFieldtypeController.php:12
 * @route '/cp/fieldtypes/icons'
 */
iconFieldtype.url = (options?: RouteQueryOptions) => {
    return iconFieldtype.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\IconFieldtypeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/IconFieldtypeController.php:12
 * @route '/cp/fieldtypes/icons'
 */
iconFieldtype.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: iconFieldtype.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\IconFieldtypeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/IconFieldtypeController.php:12
 * @route '/cp/fieldtypes/icons'
 */
    const iconFieldtypeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: iconFieldtype.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\IconFieldtypeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/IconFieldtypeController.php:12
 * @route '/cp/fieldtypes/icons'
 */
        iconFieldtypeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: iconFieldtype.url(options),
            method: 'post',
        })
    
    iconFieldtype.form = iconFieldtypeForm
/**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::resolve
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:10
 * @route '/cp/field-action-modal/resolve'
 */
export const resolve = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(options),
    method: 'post',
})

resolve.definition = {
    methods: ["post"],
    url: '/cp/field-action-modal/resolve',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::resolve
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:10
 * @route '/cp/field-action-modal/resolve'
 */
resolve.url = (options?: RouteQueryOptions) => {
    return resolve.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::resolve
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:10
 * @route '/cp/field-action-modal/resolve'
 */
resolve.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resolve.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::resolve
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:10
 * @route '/cp/field-action-modal/resolve'
 */
    const resolveForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: resolve.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::resolve
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:10
 * @route '/cp/field-action-modal/resolve'
 */
        resolveForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: resolve.url(options),
            method: 'post',
        })
    
    resolve.form = resolveForm
/**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::process
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:23
 * @route '/cp/field-action-modal/process'
 */
export const process = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

process.definition = {
    methods: ["post"],
    url: '/cp/field-action-modal/process',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::process
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:23
 * @route '/cp/field-action-modal/process'
 */
process.url = (options?: RouteQueryOptions) => {
    return process.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::process
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:23
 * @route '/cp/field-action-modal/process'
 */
process.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::process
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:23
 * @route '/cp/field-action-modal/process'
 */
    const processForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: process.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\FieldActionModalController::process
 * @see vendor/statamic/cms/src/Http/Controllers/CP/FieldActionModalController.php:23
 * @route '/cp/field-action-modal/process'
 */
        processForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: process.url(options),
            method: 'post',
        })
    
    process.form = processForm
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/cp/playground'
 */
export const playground = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: playground.url(options),
    method: 'get',
})

playground.definition = {
    methods: ["get","head"],
    url: '/cp/playground',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/cp/playground'
 */
playground.url = (options?: RouteQueryOptions) => {
    return playground.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/cp/playground'
 */
playground.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: playground.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/cp/playground'
 */
playground.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: playground.url(options),
    method: 'head',
})

    /**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/cp/playground'
 */
    const playgroundForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: playground.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/cp/playground'
 */
        playgroundForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: playground.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\ViewController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/ViewController.php:32
 * @route '/cp/playground'
 */
        playgroundForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: playground.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    playground.form = playgroundForm
/**
* @see \Statamic\Http\Controllers\CP\CpController::method404
 * @see vendor/statamic/cms/src/Http/Controllers/CP/CpController.php:32
 * @route '/cp/{segments}'
 */
export const method404 = (args: { segments: string | number } | [segments: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: method404.url(args, options),
    method: 'get',
})

method404.definition = {
    methods: ["get","head"],
    url: '/cp/{segments}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\CP\CpController::method404
 * @see vendor/statamic/cms/src/Http/Controllers/CP/CpController.php:32
 * @route '/cp/{segments}'
 */
method404.url = (args: { segments: string | number } | [segments: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { segments: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    segments: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        segments: args.segments,
                }

    return method404.definition.url
            .replace('{segments}', parsedArgs.segments.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\CpController::method404
 * @see vendor/statamic/cms/src/Http/Controllers/CP/CpController.php:32
 * @route '/cp/{segments}'
 */
method404.get = (args: { segments: string | number } | [segments: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: method404.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\CP\CpController::method404
 * @see vendor/statamic/cms/src/Http/Controllers/CP/CpController.php:32
 * @route '/cp/{segments}'
 */
method404.head = (args: { segments: string | number } | [segments: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: method404.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\CP\CpController::method404
 * @see vendor/statamic/cms/src/Http/Controllers/CP/CpController.php:32
 * @route '/cp/{segments}'
 */
    const method404Form = (args: { segments: string | number } | [segments: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: method404.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\CP\CpController::method404
 * @see vendor/statamic/cms/src/Http/Controllers/CP/CpController.php:32
 * @route '/cp/{segments}'
 */
        method404Form.get = (args: { segments: string | number } | [segments: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: method404.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\CP\CpController::method404
 * @see vendor/statamic/cms/src/Http/Controllers/CP/CpController.php:32
 * @route '/cp/{segments}'
 */
        method404Form.head = (args: { segments: string | number } | [segments: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: method404.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    method404.form = method404Form
const cp = {
    login: Object.assign(login, login),
password: Object.assign(password, password),
logout: Object.assign(logout, logout),
token: Object.assign(token, token),
extend: Object.assign(extend, extend),
unauthorized: Object.assign(unauthorized, unauthorized),
impersonation: Object.assign(impersonation, impersonation),
index: Object.assign(index, index),
dashboard: Object.assign(dashboard, dashboard),
navigation: Object.assign(navigation, navigation),
collections: Object.assign(collections, collections),
taxonomies: Object.assign(taxonomies, taxonomies),
globals: Object.assign(globals, globals),
assetContainers: Object.assign(assetContainers, assetContainers),
assets: Object.assign(assets, assets),
sites: Object.assign(sites, sites),
fields: Object.assign(fields, fields),
fieldsets: Object.assign(fieldsets, fieldsets),
blueprints: Object.assign(blueprints, blueprints),
updater: Object.assign(updater, updater7f3d05),
duplicates: Object.assign(duplicates, duplicatesA7087f),
addons: Object.assign(addons, addons),
forms: Object.assign(forms, forms),
users: Object.assign(users, users),
account: Object.assign(account, account),
userGroups: Object.assign(userGroups, userGroups),
roles: Object.assign(roles, roles),
user: Object.assign(user, user),
search: Object.assign(search, search),
utilities: Object.assign(utilities, utilities),
relationship: Object.assign(relationship, relationship),
markdown: Object.assign(markdown, markdown),
files: Object.assign(files, files),
dictionaryFieldtype: Object.assign(dictionaryFieldtype, dictionaryFieldtype),
iconFieldtype: Object.assign(iconFieldtype, iconFieldtype),
resolve: Object.assign(resolve, resolve),
process: Object.assign(process, process),
api: Object.assign(api, api),
preferences: Object.assign(preferences, preferences),
session: Object.assign(session, session),
playground: Object.assign(playground, playground),
404: Object.assign(method404, method404),
}

export default cp