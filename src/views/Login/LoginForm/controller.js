import $ from 'jquery';

export default {

    data() {
        return {
            form: this.resetFormToDefault()
        }
    },

    methods: {

        resetFormToDefault() {
            let form = {
                login: {
                    required: true,
                    value: ''
                },
                password: {
                    required: true,
                    value: ''
                }
            };

            return form;

        },

        async printTest() {
            // ipcRenderer.on('asynchronous-reply', (event, arg) => {
            //     console.log(arg) // prints "pong"
            // })
            // ipcRenderer.send('asynchronous-message', 'ping')

            console.log('executou printTest');
            this.$http.get('usuarios/print').then(res => {
                console.log('retorno', res);
            }).catch(err => {
                console.log('ERROR', err);
            });

        },


        doLogin(e) {

            e.preventDefault();

            if (!this.checkForm()) {
                return false;
            }

            this.logIn(this.form.login.value, this.form.password.value).then((resp) => {
                if (!resp) {
                    this.form = this.resetFormToDefault();
                    // this.alertHTML = this.createWarning('danger', 'E-mail ou senha incorreta.');
                    $('#login').focus();
                }
            })

        },


        checkForm() {

            const form = this.form;
            for (let key of Object.entries(form)) {
                if (key[1]['required'] === true) {
                    if (key[1]['value'] === '' || key[1]['value'] === null) {
                        this.createAlert(`O campo ${key[0]} é obrigatório e deve ser diferente de vazio`);
                        $(`#${key[0]}`).focus();
                        return false;
                    }
                }
            }

            return true;

        },


        createAlert(message = '') {

            console.log('alerta', message);

        }

    }


}