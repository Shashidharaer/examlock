import UtilitiesController from './UtilitiesController'
import CacheController from './CacheController'
import PhpInfoController from './PhpInfoController'
import UpdateSearchController from './UpdateSearchController'
import EmailController from './EmailController'
const Utilities = {
    UtilitiesController: Object.assign(UtilitiesController, UtilitiesController),
CacheController: Object.assign(CacheController, CacheController),
PhpInfoController: Object.assign(PhpInfoController, PhpInfoController),
UpdateSearchController: Object.assign(UpdateSearchController, UpdateSearchController),
EmailController: Object.assign(EmailController, EmailController),
}

export default Utilities