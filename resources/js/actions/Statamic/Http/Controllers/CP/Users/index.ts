import UserActionController from './UserActionController'
import UserBlueprintController from './UserBlueprintController'
import UsersController from './UsersController'
import PasswordController from './PasswordController'
import AccountController from './AccountController'
import UserGroupBlueprintController from './UserGroupBlueprintController'
import UserGroupsController from './UserGroupsController'
import RolesController from './RolesController'
import UserWizardController from './UserWizardController'
const Users = {
    UserActionController: Object.assign(UserActionController, UserActionController),
UserBlueprintController: Object.assign(UserBlueprintController, UserBlueprintController),
UsersController: Object.assign(UsersController, UsersController),
PasswordController: Object.assign(PasswordController, PasswordController),
AccountController: Object.assign(AccountController, AccountController),
UserGroupBlueprintController: Object.assign(UserGroupBlueprintController, UserGroupBlueprintController),
UserGroupsController: Object.assign(UserGroupsController, UserGroupsController),
RolesController: Object.assign(RolesController, RolesController),
UserWizardController: Object.assign(UserWizardController, UserWizardController),
}

export default Users