import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Sub01 from './views/Sub01.vue'
import Sub02 from './views/Sub02.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main',
      name: 'main',
      components: {
        default: Main,
        sub01: Sub01,
        sub02: Sub02
      }
    }
  ]
})
