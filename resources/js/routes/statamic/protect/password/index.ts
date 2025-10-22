import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Statamic\Auth\Protect\Protectors\Password\Controller::show
* @see vendor/statamic/cms/src/Auth/Protect/Protectors/Password/Controller.php:16
* @route '/!/protect/password'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/!/protect/password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Statamic\Auth\Protect\Protectors\Password\Controller::show
* @see vendor/statamic/cms/src/Auth/Protect/Protectors/Password/Controller.php:16
* @route '/!/protect/password'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \Statamic\Auth\Protect\Protectors\Password\Controller::show
* @see vendor/statamic/cms/src/Auth/Protect/Protectors/Password/Controller.php:16
* @route '/!/protect/password'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \Statamic\Auth\Protect\Protectors\Password\Controller::show
* @see vendor/statamic/cms/src/Auth/Protect/Protectors/Password/Controller.php:16
* @route '/!/protect/password'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \Statamic\Auth\Protect\Protectors\Password\Controller::show
* @see vendor/statamic/cms/src/Auth/Protect/Protectors/Password/Controller.php:16
* @route '/!/protect/password'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \Statamic\Auth\Protect\Protectors\Password\Controller::show
* @see vendor/statamic/cms/src/Auth/Protect/Protectors/Password/Controller.php:16
* @route '/!/protect/password'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \Statamic\Auth\Protect\Protectors\Password\Controller::show
* @see vendor/statamic/cms/src/Auth/Protect/Protectors/Password/Controller.php:16
* @route '/!/protect/password'
*/
showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \Statamic\Auth\Protect\Protectors\Password\Controller::store
* @see vendor/statamic/cms/src/Auth/Protect/Protectors/Password/Controller.php:28
* @route '/!/protect/password'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/!/protect/password',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Auth\Protect\Protectors\Password\Controller::store
* @see vendor/statamic/cms/src/Auth/Protect/Protectors/Password/Controller.php:28
* @route '/!/protect/password'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Statamic\Auth\Protect\Protectors\Password\Controller::store
* @see vendor/statamic/cms/src/Auth/Protect/Protectors/Password/Controller.php:28
* @route '/!/protect/password'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Statamic\Auth\Protect\Protectors\Password\Controller::store
* @see vendor/statamic/cms/src/Auth/Protect/Protectors/Password/Controller.php:28
* @route '/!/protect/password'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Statamic\Auth\Protect\Protectors\Password\Controller::store
* @see vendor/statamic/cms/src/Auth/Protect/Protectors/Password/Controller.php:28
* @route '/!/protect/password'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const password = {
    show: Object.assign(show, show),
    store: Object.assign(store, store),
}

export default password