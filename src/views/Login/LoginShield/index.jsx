import Vue from 'vue';
import cfg from '@/../config/config.env';

import './style.scss';

const LoginShield = Vue.extend({

    render() {
        return (
            <section>

                <div class="LoginShield">

                    <div class="context">
                        <div class="logotipo"></div>
                        <div class="title h3">{cfg.app.name}</div>
                        <div class="slogan txt-small-bold">{cfg.app.slogan}</div>
                    </div>

                    <div class="background">
                        <div class="image"></div>
                        <div class="foreground"></div>
                    </div>

                </div>



            </section>
        )
    }

})

export default LoginShield;