import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Page01 from './views/Page01.vue'
import Page02 from './views/Page02.vue'
import Page03 from './views/Page03.vue'
import Page04 from './views/Page04.vue'
import Page05 from './views/Page05.vue'
import Jump from './views/Jump.vue'

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
      path: '/page/01',
      name: 'page01',
      component: Page01
    },
    {
      path: '/page/02',
      name: 'page02',
      component: Page02
    },
    {
      path: '/page/03',
      name: 'page03',
      component: Page03
    },
    {
      path: '/page/04',
      name: 'page04',
      component: Page04
    },
    {
      path: '/page/05',
      name: 'page05',
      component: Page05
    },
    {
      path: '/jump',
      name: 'Jump',
      component: Jump
    }
  ]
})
