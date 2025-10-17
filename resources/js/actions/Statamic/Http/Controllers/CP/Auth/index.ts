import LoginController from './LoginController'
import ForgotPasswordController from './ForgotPasswordController'
import ResetPasswordController from './ResetPasswordController'
import CsrfTokenController from './CsrfTokenController'
import ExtendSessionController from './ExtendSessionController'
import UnauthorizedController from './UnauthorizedController'
import ImpersonationController from './ImpersonationController'
const Auth = {
    LoginController: Object.assign(LoginController, LoginController),
ForgotPasswordController: Object.assign(ForgotPasswordController, ForgotPasswordController),
ResetPasswordController: Object.assign(ResetPasswordController, ResetPasswordController),
CsrfTokenController: Object.assign(CsrfTokenController, CsrfTokenController),
ExtendSessionController: Object.assign(ExtendSessionController, ExtendSessionController),
UnauthorizedController: Object.assign(UnauthorizedController, UnauthorizedController),
ImpersonationController: Object.assign(ImpersonationController, ImpersonationController),
}

export default Auth