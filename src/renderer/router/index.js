import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test-page',
      component: require('@/containers/Test').default
    },
    {
      path: '/',
      name: 'home-page',
      component: require('@/containers/Home').default
    },
    {
      path: '/detail',
      name: 'detail-page',
      component: require('@/containers/DetailPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
