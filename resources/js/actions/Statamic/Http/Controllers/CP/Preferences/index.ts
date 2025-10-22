import PreferenceController from './PreferenceController'
import UserPreferenceController from './UserPreferenceController'
import RolePreferenceController from './RolePreferenceController'
import DefaultPreferenceController from './DefaultPreferenceController'
import Nav from './Nav'

const Preferences = {
    PreferenceController: Object.assign(PreferenceController, PreferenceController),
    UserPreferenceController: Object.assign(UserPreferenceController, UserPreferenceController),
    RolePreferenceController: Object.assign(RolePreferenceController, RolePreferenceController),
    DefaultPreferenceController: Object.assign(DefaultPreferenceController, DefaultPreferenceController),
    Nav: Object.assign(Nav, Nav),
}

export default Preferences