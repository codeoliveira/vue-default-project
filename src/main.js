import Vue from 'vue'

import * as Bootstrap from 'bootstrap';

import './main.scss';
import './assets/css/all.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/allcss';

// Importamos instancia do axios 
import './plugins/axios';

import App from './App'
import router from './router'
import store from './store'


// Vue.use($);
Vue.use(Bootstrap);

// VUE TOOLS
Vue.config.devtools = false

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')





// import Vue from 'vue'
// import { App } from './App'
// import router from './router'
// import store from './store'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
