// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import ElementUI from 'element-ui'
import router from './router'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Modal from './util/modal'
import store from './store'
Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.use(Modal)

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})