// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import 'babel-polyfill';

import './sass/reset.sass'
import vueProto from './js/vueProto'
import vDistpicker from 'v-distpicker'
Vue.component('v-distpicker', vDistpicker)

Vue.use(vueProto)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
