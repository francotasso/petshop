import Vue from 'vue'
import App from './App.vue'
import router from './router';
import MainLayout from './layouts/MainLayout';
import './scss/main.scss';

import { BootstrapVue } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.component('MainLayout', MainLayout);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')