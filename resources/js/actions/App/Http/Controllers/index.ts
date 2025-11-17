import Auth from './Auth'
import FormController from './FormController'
import SearchController from './SearchController'
import Settings from './Settings'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    FormController: Object.assign(FormController, FormController),
    SearchController: Object.assign(SearchController, SearchController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers