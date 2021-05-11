import LoginFormController from './LoginForm/controller';
import AuthController from './../../modules/auth/auth';
import FormController from './../../common/form/form.controller';

export default {

    mixins: [LoginFormController, AuthController, FormController]


}