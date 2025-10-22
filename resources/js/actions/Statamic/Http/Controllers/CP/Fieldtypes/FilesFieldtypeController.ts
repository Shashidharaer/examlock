import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\FilesFieldtypeController::upload
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/FilesFieldtypeController.php:14
* @route '/cp/fieldtypes/files/upload'
*/
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/cp/fieldtypes/files/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\FilesFieldtypeController::upload
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/FilesFieldtypeController.php:14
* @route '/cp/fieldtypes/files/upload'
*/
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\FilesFieldtypeController::upload
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/FilesFieldtypeController.php:14
* @route '/cp/fieldtypes/files/upload'
*/
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\FilesFieldtypeController::upload
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/FilesFieldtypeController.php:14
* @route '/cp/fieldtypes/files/upload'
*/
const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

/**
* @see \Statamic\Http\Controllers\CP\Fieldtypes\FilesFieldtypeController::upload
* @see vendor/statamic/cms/src/Http/Controllers/CP/Fieldtypes/FilesFieldtypeController.php:14
* @route '/cp/fieldtypes/files/upload'
*/
uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

upload.form = uploadForm

const FilesFieldtypeController = { upload }

export default FilesFieldtypeController