import NavigationController from './NavigationController'
import NavigationBlueprintController from './NavigationBlueprintController'
import NavigationTreeController from './NavigationTreeController'
import NavigationPagesController from './NavigationPagesController'

const Navigation = {
    NavigationController: Object.assign(NavigationController, NavigationController),
    NavigationBlueprintController: Object.assign(NavigationBlueprintController, NavigationBlueprintController),
    NavigationTreeController: Object.assign(NavigationTreeController, NavigationTreeController),
    NavigationPagesController: Object.assign(NavigationPagesController, NavigationPagesController),
}

export default Navigation