import Vue from 'vue';

import './style.scss';

import LoginShield from './LoginShield';
import LoginForm from './LoginForm';
import LoginController from './controller';

const Login = Vue.extend({

    mixins: [LoginController],

    render() {
        return (
            <div class="Login">

                <div class="mask"></div>

                <div class="panel">
                    <LoginShield></LoginShield>
                    <LoginForm></LoginForm>

                </div>
                <div class="faixaA"></div>
                <div class="faixaB"></div>
                <div class="faixaC"></div>

            </div>
        )
    }

})

export default Login;