import Vue from 'vue';

import './App.scss';


const App = Vue.extend({


    render() {
        return (
            <section>
                <div id="app">
                    <router-view />
                    <div class="extras">{this.extras}</div>
                </div>
            </section>
        )
    }

});

export default App;