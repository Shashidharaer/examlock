import CP from './CP'
import GlideController from './GlideController'
import FormController from './FormController'
import User from './User'
import ForgotPasswordController from './ForgotPasswordController'
import ResetPasswordController from './ResetPasswordController'
import ActivateAccountController from './ActivateAccountController'
import PhoneHomeController from './PhoneHomeController'

const Controllers = {
    CP: Object.assign(CP, CP),
    GlideController: Object.assign(GlideController, GlideController),
    FormController: Object.assign(FormController, FormController),
    User: Object.assign(User, User),
    ForgotPasswordController: Object.assign(ForgotPasswordController, ForgotPasswordController),
    ResetPasswordController: Object.assign(ResetPasswordController, ResetPasswordController),
    ActivateAccountController: Object.assign(ActivateAccountController, ActivateAccountController),
    PhoneHomeController: Object.assign(PhoneHomeController, PhoneHomeController),
}

export default Controllers