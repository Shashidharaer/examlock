import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Assets\FolderActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FolderActionController.php:14
 * @route '/cp/assets/browse/folders/{asset_container}/actions'
 */
export const run = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(args, options),
    method: 'post',
})

run.definition = {
    methods: ["post"],
    url: '/cp/assets/browse/folders/{asset_container}/actions',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Assets\FolderActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FolderActionController.php:14
 * @route '/cp/assets/browse/folders/{asset_container}/actions'
 */
run.url = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { asset_container: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    asset_container: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        asset_container: args.asset_container,
                }

    return run.definition.url
            .replace('{asset_container}', parsedArgs.asset_container.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Assets\FolderActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FolderActionController.php:14
 * @route '/cp/assets/browse/folders/{asset_container}/actions'
 */
run.post = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: run.url(args, options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Assets\FolderActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FolderActionController.php:14
 * @route '/cp/assets/browse/folders/{asset_container}/actions'
 */
    const runForm = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: run.url(args, options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Assets\FolderActionController::run
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Assets/FolderActionController.php:14
 * @route '/cp/assets/browse/folders/{asset_container}/actions'
 */
        runForm.post = (args: { asset_container: string | number } | [asset_container: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: run.url(args, options),
            method: 'post',
        })
    
    run.form = runForm
const actions = {
    run: Object.assign(run, run),
}

export default actions