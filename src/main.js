// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import '@/utils/flexible.js'
import {Pagination} from 'element-ui'

import App from './App'
import routes from '@/router'
import store from '@/store'
import filter from '@/filter'

Vue.use(Pagination)
Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
