import GlobalsController from './GlobalsController'
import GlobalVariablesController from './GlobalVariablesController'
import GlobalsBlueprintController from './GlobalsBlueprintController'

const Globals = {
    GlobalsController: Object.assign(GlobalsController, GlobalsController),
    GlobalVariablesController: Object.assign(GlobalVariablesController, GlobalVariablesController),
    GlobalsBlueprintController: Object.assign(GlobalsBlueprintController, GlobalsBlueprintController),
}

export default Globals