/*
  Demo-00: Setting Up Vue Router for Vue to Use
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

export const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/warenkorb',
    name: 'warenkorb',
    component: () =>
        import('../views/Warenkorb.vue')
  }, {
    path: '/informations',
    name: 'informations',
    component: () =>
        import('../views/Informationen.vue')
  }, {
    path: '/notes',
    name: 'notes',
    component: () =>
        import('../views/Notendurschnitt.vue'),
        props: true
  }, {
    path: '/info',
    name: 'info',
    component: () =>
        import('../views/SingleInfo.vue'),
        props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
