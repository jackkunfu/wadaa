import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import aboutUs from '@/pages/aboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    }
  ]
})
