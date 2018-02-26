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
      redirect: '/'
    },
    {
      path: '/contact-us',
      component: require('@/components/Contact').default
    },
    {
      path: '/terms',
      component: require('@/components/Terms').default
    },
    {
      path: '/get-started',
      component: require('@/components/Getstarted').default
    }
  ],
  mode: 'history'
})
