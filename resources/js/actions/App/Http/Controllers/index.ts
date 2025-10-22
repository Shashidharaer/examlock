import Auth from './Auth'
import Settings from './Settings'
import StatamicEntryController from './StatamicEntryController'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    Settings: Object.assign(Settings, Settings),
    StatamicEntryController: Object.assign(StatamicEntryController, StatamicEntryController),
}

export default Controllers