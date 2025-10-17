import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\MarkdownFieldtypeController::preview
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/MarkdownFieldtypeController.php:13
 * @route '/cp/fieldtypes/markdown'
 */
export const preview = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

preview.definition = {
    methods: ["post"],
    url: '/cp/fieldtypes/markdown',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\MarkdownFieldtypeController::preview
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/MarkdownFieldtypeController.php:13
 * @route '/cp/fieldtypes/markdown'
 */
preview.url = (options?: RouteQueryOptions) => {
    return preview.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\MarkdownFieldtypeController::preview
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/MarkdownFieldtypeController.php:13
 * @route '/cp/fieldtypes/markdown'
 */
preview.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

    /**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\MarkdownFieldtypeController::preview
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/MarkdownFieldtypeController.php:13
 * @route '/cp/fieldtypes/markdown'
 */
    const previewForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: preview.url(options),
        method: 'post',
    })

            /**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\MarkdownFieldtypeController::preview
 * @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/MarkdownFieldtypeController.php:13
 * @route '/cp/fieldtypes/markdown'
 */
        previewForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: preview.url(options),
            method: 'post',
        })
    
    preview.form = previewForm
const MarkdownFieldtypeController = { preview }

export default MarkdownFieldtypeController