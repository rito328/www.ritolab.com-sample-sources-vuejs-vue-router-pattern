import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/Product.vue'
import ProductA from './views/products/ProductA.vue'
import ProductB from './views/products/ProductB.vue'

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
      path: '/Product',
      name: 'Product',
      component: Product,
      children: [
        {
          path: 'A',
          component: ProductA
        },
        {
          path: 'B',
          component: ProductB
        }
      ]
    }
  ]
})
