import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes.js'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', //'hash'
  routes, //routes: routes
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return {x: 0, y: 0};
  }
});

new Vue({
  el: '#app',
  router, //router: router
  render: h => h(App)
})
