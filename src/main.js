import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueGeolocation from 'vue-browser-geolocation';

import './assets/css/main.sass';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)

// Install geolocator
Vue.use(VueGeolocation);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
