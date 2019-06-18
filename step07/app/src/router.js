import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Setting from './views/Setting.vue'
import SettingA from './views/setting/SettingA.vue'
import SettingB from './views/setting/SettingB.vue'
import SettingBSub from './views/setting/SettingBSub.vue'

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
      path: '/setting',
      name: 'setting',
      component: Setting,
      children: [
        {
          path: 'A',
          component: SettingA
        },
        {
          path: 'B',
          components: {
            default: SettingB,
            sub: SettingBSub
          }
        }

      ]
    }
  ]
})
