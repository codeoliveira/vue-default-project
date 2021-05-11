import Vue from 'vue';

import LoginController from './../controller';

import './style.scss';


const LoginForm = Vue.extend({

    mixins: [LoginController],

    render() {
        return (
            <section>
                <div class="LoginForm">

                    <form class="form" onSubmit={this.doLogin}>

                        <div class="txt-bold label">Painel de Controle</div>
                        <div class="txt-small label-auxiliar">Preencha os campos e clique entrar no sistema.</div>

                        <div class="fields">
                            <input
                                type="text"
                                id="login"
                                class="form-control input-form"
                                onChange={this.changeValue}
                                value={this.form.login.value}
                                placeholder="Digite seu usuário"
                            ></input>

                            <input
                                type="password"
                                id="password"
                                class="form-control input-form"
                                onChange={this.changeValue}
                                value={this.form.password.value}
                                placeholder="Digite sua senha"
                            ></input>

                            <div class="txt-small-bold forgot-password">Esqueceu sua senha?</div>

                            <button
                                type="submit"
                                class="txt-small-bold btn-login"
                            >Entrar no sistema</button>

                        </div>

                    </form>

                    <div class="background">
                        <div class="image"></div>
                        <div class="foreground"></div>
                    </div>

                    <div class="separator"></div>


                </div>




            </section>
        )
    }

});

export default LoginForm;