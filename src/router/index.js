import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/Home').default
    },
    {
      path: '*',
      component: require('@/components/Home').default
    },
    {
      path: '/contact-us',
      component: require('@/components/Contact').default
    },
    {
      path: '/get-started',
      component: require('@/components/Getstarted').default
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
