import Vue from 'vue';
import Router from 'vue-router';

const index = (r) => require.ensure([], () => r(require('@/pages/index')), 'index');
const aboutUs = (r) => require.ensure([], () => r(require('@/pages/aboutUs')), 'aboutUs');
const sTag = (r) => require.ensure([], () => r(require('@/pages/sTag')), 'sTag');
const detail = (r) => require.ensure([], () => r(require('@/pages/detail')), 'detail');
const news = (r) => require.ensure([], () => r(require('@/pages/news')), 'news');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    }, {
      path: '/sTag',
      name: 'sTag',
      component: sTag
    }, {
      path: '/detail',
      name: 'detail',
      component: detail
    }, {
      path: '/news',
      name: 'news',
      component: news
    }
  ]
})
