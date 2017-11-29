// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App'
import router from './router'
// import VueRouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(vueResource)
// Vue.use(vueRouter)

// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     {path: '/', component: App},
//     {path: '/:order_id/feedback', component: Feedback}
//   ]
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    DeliveryOrders: [],
    user: { name: "Ernesto" }
  },
  template: '<App/>',
  components: { App },


})
