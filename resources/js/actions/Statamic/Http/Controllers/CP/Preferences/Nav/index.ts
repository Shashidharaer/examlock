import NavController from './NavController'
import UserNavController from './UserNavController'
import RoleNavController from './RoleNavController'
import DefaultNavController from './DefaultNavController'
const Nav = {
    NavController: Object.assign(NavController, NavController),
UserNavController: Object.assign(UserNavController, UserNavController),
RoleNavController: Object.assign(RoleNavController, RoleNavController),
DefaultNavController: Object.assign(DefaultNavController, DefaultNavController),
}

export default Nav