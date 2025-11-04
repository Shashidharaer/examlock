import LoginController from './LoginController'
import RegisterController from './RegisterController'
import ProfileController from './ProfileController'
import PasswordController from './PasswordController'

const User = {
    LoginController: Object.assign(LoginController, LoginController),
    RegisterController: Object.assign(RegisterController, RegisterController),
    ProfileController: Object.assign(ProfileController, ProfileController),
    PasswordController: Object.assign(PasswordController, PasswordController),
}

export default User