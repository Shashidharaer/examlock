import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import cp from './cp'
import forms from './forms'
import protect from './protect'
import password9cfa90 from './password'
import account from './account'
/**
* @see \App\Http\Controllers\StatamicEntryController::entry
 * @see app/Http/Controllers/StatamicEntryController.php:17
 * @route '/{collection}/{slug}'
 */
export const entry = (args: { collection: string | number, slug: string | number } | [collection: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: entry.url(args, options),
    method: 'get',
})

entry.definition = {
    methods: ["get","head"],
    url: '/{collection}/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StatamicEntryController::entry
 * @see app/Http/Controllers/StatamicEntryController.php:17
 * @route '/{collection}/{slug}'
 */
entry.url = (args: { collection: string | number, slug: string | number } | [collection: string | number, slug: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    collection: args[0],
                    slug: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        collection: args.collection,
                                slug: args.slug,
                }

    return entry.definition.url
            .replace('{collection}', parsedArgs.collection.toString())
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StatamicEntryController::entry
 * @see app/Http/Controllers/StatamicEntryController.php:17
 * @route '/{collection}/{slug}'
 */
entry.get = (args: { collection: string | number, slug: string | number } | [collection: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: entry.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StatamicEntryController::entry
 * @see app/Http/Controllers/StatamicEntryController.php:17
 * @route '/{collection}/{slug}'
 */
entry.head = (args: { collection: string | number, slug: string | number } | [collection: string | number, slug: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: entry.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StatamicEntryController::entry
 * @see app/Http/Controllers/StatamicEntryController.php:17
 * @route '/{collection}/{slug}'
 */
    const entryForm = (args: { collection: string | number, slug: string | number } | [collection: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: entry.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StatamicEntryController::entry
 * @see app/Http/Controllers/StatamicEntryController.php:17
 * @route '/{collection}/{slug}'
 */
        entryForm.get = (args: { collection: string | number, slug: string | number } | [collection: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: entry.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StatamicEntryController::entry
 * @see app/Http/Controllers/StatamicEntryController.php:17
 * @route '/{collection}/{slug}'
 */
        entryForm.head = (args: { collection: string | number, slug: string | number } | [collection: string | number, slug: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: entry.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    entry.form = entryForm
/**
* @see \Statamic\Http\Controllers\User\LoginController::logout
 * @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:33
 * @route '/!/auth/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})

logout.definition = {
    methods: ["get","head"],
    url: '/!/auth/logout',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\User\LoginController::logout
 * @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:33
 * @route '/!/auth/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\User\LoginController::logout
 * @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:33
 * @route '/!/auth/logout'
 */
logout.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logout.url(options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\User\LoginController::logout
 * @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:33
 * @route '/!/auth/logout'
 */
logout.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logout.url(options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\User\LoginController::logout
 * @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:33
 * @route '/!/auth/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: logout.url(options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\User\LoginController::logout
 * @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:33
 * @route '/!/auth/logout'
 */
        logoutForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: logout.url(options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\User\LoginController::logout
 * @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:33
 * @route '/!/auth/logout'
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
* @see \Statamic\Http\Controllers\User\LoginController::login
 * @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:14
 * @route '/!/auth/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/!/auth/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\User\LoginController::login
 * @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:14
 * @route '/!/auth/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\User\LoginController::login
 * @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:14
 * @route '/!/auth/login'
 */
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\User\LoginController::login
 * @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:14
 * @route '/!/auth/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: login.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\User\LoginController::login
 * @see vendor/statamic/cms/src/Http/Controllers/User/LoginController.php:14
 * @route '/!/auth/login'
 */
        loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: login.url(options),
            method: 'post',
        })
    
    login.form = loginForm
/**
* @see \Statamic\Http\Controllers\User\RegisterController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/RegisterController.php:17
 * @route '/!/auth/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/!/auth/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\User\RegisterController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/RegisterController.php:17
 * @route '/!/auth/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\User\RegisterController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/RegisterController.php:17
 * @route '/!/auth/register'
 */
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\User\RegisterController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/RegisterController.php:17
 * @route '/!/auth/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: register.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\User\RegisterController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/RegisterController.php:17
 * @route '/!/auth/register'
 */
        registerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: register.url(options),
            method: 'post',
        })
    
    register.form = registerForm
/**
* @see \Statamic\Http\Controllers\User\ProfileController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/ProfileController.php:10
 * @route '/!/auth/profile'
 */
export const profile = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: profile.url(options),
    method: 'post',
})

profile.definition = {
    methods: ["post"],
    url: '/!/auth/profile',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\User\ProfileController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/ProfileController.php:10
 * @route '/!/auth/profile'
 */
profile.url = (options?: RouteQueryOptions) => {
    return profile.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\User\ProfileController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/ProfileController.php:10
 * @route '/!/auth/profile'
 */
profile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: profile.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\User\ProfileController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/ProfileController.php:10
 * @route '/!/auth/profile'
 */
    const profileForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: profile.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\User\ProfileController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/ProfileController.php:10
 * @route '/!/auth/profile'
 */
        profileForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: profile.url(options),
            method: 'post',
        })
    
    profile.form = profileForm
/**
* @see \Statamic\Http\Controllers\User\PasswordController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/PasswordController.php:11
 * @route '/!/auth/password'
 */
export const password = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: password.url(options),
    method: 'post',
})

password.definition = {
    methods: ["post"],
    url: '/!/auth/password',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\User\PasswordController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/PasswordController.php:11
 * @route '/!/auth/password'
 */
password.url = (options?: RouteQueryOptions) => {
    return password.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\User\PasswordController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/PasswordController.php:11
 * @route '/!/auth/password'
 */
password.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: password.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\User\PasswordController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/PasswordController.php:11
 * @route '/!/auth/password'
 */
    const passwordForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: password.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\User\PasswordController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/User/PasswordController.php:11
 * @route '/!/auth/password'
 */
        passwordForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: password.url(options),
            method: 'post',
        })
    
    password.form = passwordForm
/**
* @see \Statamic\Http\Controllers\PhoneHomeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/PhoneHomeController.php:11
 * @route '/et/phone/home/{token}'
 */
export const phoneHome = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: phoneHome.url(args, options),
    method: 'get',
})

phoneHome.definition = {
    methods: ["get","head"],
    url: '/et/phone/home/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Http\Controllers\PhoneHomeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/PhoneHomeController.php:11
 * @route '/et/phone/home/{token}'
 */
phoneHome.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    token: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        token: args.token,
                }

    return phoneHome.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\PhoneHomeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/PhoneHomeController.php:11
 * @route '/et/phone/home/{token}'
 */
phoneHome.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: phoneHome.url(args, options),
    method: 'get',
})
/**
* @see \Statamic\Http\Controllers\PhoneHomeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/PhoneHomeController.php:11
 * @route '/et/phone/home/{token}'
 */
phoneHome.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: phoneHome.url(args, options),
    method: 'head',
})

    /**
* @see \Statamic\Http\Controllers\PhoneHomeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/PhoneHomeController.php:11
 * @route '/et/phone/home/{token}'
 */
    const phoneHomeForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: phoneHome.url(args, options),
        method: 'get',
    })

            /**
* @see \Statamic\Http\Controllers\PhoneHomeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/PhoneHomeController.php:11
 * @route '/et/phone/home/{token}'
 */
        phoneHomeForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: phoneHome.url(args, options),
            method: 'get',
        })
            /**
* @see \Statamic\Http\Controllers\PhoneHomeController::__invoke
 * @see vendor/statamic/cms/src/Http/Controllers/PhoneHomeController.php:11
 * @route '/et/phone/home/{token}'
 */
        phoneHomeForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: phoneHome.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    phoneHome.form = phoneHomeForm
const statamic = {
    entry: Object.assign(entry, entry),
cp: Object.assign(cp, cp),
forms: Object.assign(forms, forms),
protect: Object.assign(protect, protect),
logout: Object.assign(logout, logout),
login: Object.assign(login, login),
register: Object.assign(register, register),
profile: Object.assign(profile, profile),
password: Object.assign(password, password9cfa90),
account: Object.assign(account, account),
phoneHome: Object.assign(phoneHome, phoneHome),
}

export default statamic