import Vue from 'vue';

import './style.scss';


const _AppBody = Vue.extend({

    data() {
        return {
            title: 'Agenor Oliveira'
        }
    },

    methods: {
        changeMe() {
            const title = this.title;
            this.title = this.title === 'Agenor Oliveira' ? title : this.title;
        }
    },

    render() {
        return (
            <div class="_AppBody">
                <div class="header"></div>
                <div class="leftMenu"></div>
                <div class="content"></div>
                <div class="footer"></div>
            </div>
        )


    }
});

export { _AppBody }