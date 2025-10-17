import AddonsController from './AddonsController'
import TemplatesController from './TemplatesController'
const API = {
    AddonsController: Object.assign(AddonsController, AddonsController),
TemplatesController: Object.assign(TemplatesController, TemplatesController),
}

export default API