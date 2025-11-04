import Auth from './Auth'
import FormController from './FormController'
import Settings from './Settings'
import StatamicEntryController from './StatamicEntryController'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    FormController: Object.assign(FormController, FormController),
    Settings: Object.assign(Settings, Settings),
    StatamicEntryController: Object.assign(StatamicEntryController, StatamicEntryController),
}

export default Controllers