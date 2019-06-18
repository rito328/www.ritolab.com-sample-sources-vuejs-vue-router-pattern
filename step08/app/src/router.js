import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Page from './views/Page.vue'

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
      path: '/page/:id',
      name: 'page',
      component: Page,

      // Boolean mode
      // props: true,

      // Object mode
      /*
      props: {
        propA: 'AAA',
        propB: 'BBB',
        propC: 'CCC',
      }
      */

      // Function mode
      props: route => ({
        id: Number(route.params.id) // URLパラメータは文字列で渡ってくるのでここで数値型へキャストする
      })
    }
  ]
})
