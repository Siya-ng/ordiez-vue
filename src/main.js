// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Order from './components/order'


Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Order},

  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/"> Home </router-link></li>
      </ul>
      <router-view></router-view>
    </div>`,
}).$mount('#app')
