import Auth from './Auth'
import StartPageController from './StartPageController'
import DashboardController from './DashboardController'
import SelectSiteController from './SelectSiteController'
import Navigation from './Navigation'
import Collections from './Collections'
import Taxonomies from './Taxonomies'
import Globals from './Globals'
import Assets from './Assets'
import Sites from './Sites'
import Fields from './Fields'
import Updater from './Updater'
import DuplicatesController from './DuplicatesController'
import AddonsController from './AddonsController'
import AddonEditionsController from './AddonEditionsController'
import Forms from './Forms'
import Users from './Users'
import SearchController from './SearchController'
import Utilities from './Utilities'
import LicensingController from './LicensingController'
import Fieldtypes from './Fieldtypes'
import FieldActionModalController from './FieldActionModalController'
import API from './API'
import Preferences from './Preferences'
import SlugController from './SlugController'
import SessionTimeoutController from './SessionTimeoutController'
import CpController from './CpController'

const CP = {
    Auth: Object.assign(Auth, Auth),
    StartPageController: Object.assign(StartPageController, StartPageController),
    DashboardController: Object.assign(DashboardController, DashboardController),
    SelectSiteController: Object.assign(SelectSiteController, SelectSiteController),
    Navigation: Object.assign(Navigation, Navigation),
    Collections: Object.assign(Collections, Collections),
    Taxonomies: Object.assign(Taxonomies, Taxonomies),
    Globals: Object.assign(Globals, Globals),
    Assets: Object.assign(Assets, Assets),
    Sites: Object.assign(Sites, Sites),
    Fields: Object.assign(Fields, Fields),
    Updater: Object.assign(Updater, Updater),
    DuplicatesController: Object.assign(DuplicatesController, DuplicatesController),
    AddonsController: Object.assign(AddonsController, AddonsController),
    AddonEditionsController: Object.assign(AddonEditionsController, AddonEditionsController),
    Forms: Object.assign(Forms, Forms),
    Users: Object.assign(Users, Users),
    SearchController: Object.assign(SearchController, SearchController),
    Utilities: Object.assign(Utilities, Utilities),
    LicensingController: Object.assign(LicensingController, LicensingController),
    Fieldtypes: Object.assign(Fieldtypes, Fieldtypes),
    FieldActionModalController: Object.assign(FieldActionModalController, FieldActionModalController),
    API: Object.assign(API, API),
    Preferences: Object.assign(Preferences, Preferences),
    SlugController: Object.assign(SlugController, SlugController),
    SessionTimeoutController: Object.assign(SessionTimeoutController, SessionTimeoutController),
    CpController: Object.assign(CpController, CpController),
}

export default CP