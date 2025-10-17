import UpdaterController from './UpdaterController'
import UpdateProductController from './UpdateProductController'
const Updater = {
    UpdaterController: Object.assign(UpdaterController, UpdaterController),
UpdateProductController: Object.assign(UpdateProductController, UpdateProductController),
}

export default Updater