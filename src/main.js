// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

// router setup
import routes from './routes/routes'

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import VModal from 'vue-js-modal'
import Toasted from 'vue-toasted'

// MaterialDashboard plugin
import MaterialDashboard from './material-dashboard'

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: 'nav-item active'
})

Vue.use(Toasted)
Vue.use(VModal)
Vue.use(VueRouter)
Vue.use(MaterialDashboard)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)

// I prefer register as global this component because I use in all places
Vue.toasted.register('success', 'Sucesso!', {
  type: 'success',
  theme: 'bubble',
  position: 'top-right',
  duration: 3000
})

Vue.toasted.register('error', 'Algo deu errado...!', {
  type: 'error',
  theme: 'bubble',
  position: 'top-right',
  duration: 3000
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
