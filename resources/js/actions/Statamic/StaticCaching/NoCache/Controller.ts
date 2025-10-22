import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Statamic\StaticCaching\NoCache\Controller::__invoke
* @see vendor/statamic/cms/src/StaticCaching/NoCache/Controller.php:11
* @route '/!/nocache'
*/
const Controller = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: Controller.url(options),
    method: 'post',
})

Controller.definition = {
    methods: ["post"],
    url: '/!/nocache',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\StaticCaching\NoCache\Controller::__invoke
* @see vendor/statamic/cms/src/StaticCaching/NoCache/Controller.php:11
* @route '/!/nocache'
*/
Controller.url = (options?: RouteQueryOptions) => {
    return Controller.definition.url + queryParams(options)
}

/**
* @see \Statamic\StaticCaching\NoCache\Controller::__invoke
* @see vendor/statamic/cms/src/StaticCaching/NoCache/Controller.php:11
* @route '/!/nocache'
*/
Controller.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: Controller.url(options),
    method: 'post',
})

/**
* @see \Statamic\StaticCaching\NoCache\Controller::__invoke
* @see vendor/statamic/cms/src/StaticCaching/NoCache/Controller.php:11
* @route '/!/nocache'
*/
const ControllerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: Controller.url(options),
    method: 'post',
})

/**
* @see \Statamic\StaticCaching\NoCache\Controller::__invoke
* @see vendor/statamic/cms/src/StaticCaching/NoCache/Controller.php:11
* @route '/!/nocache'
*/
ControllerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: Controller.url(options),
    method: 'post',
})

Controller.form = ControllerForm

export default Controller