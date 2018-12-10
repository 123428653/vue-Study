import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/demo/HelloWorld')
    },
    {
      path: '/flex',
      name: 'Flex',
      component: () => import('@/components/demo/Flex')
    },
    {
      path: '/cy',
      name: 'Cytoscape',
      component: () => import('@/components/demo/Cytoscape')
    },
    {
      path: '/debounce',
      name: 'Debounce',
      component: () => import('@/components/demo/Debounce')
    },
    {
      path: '/custom',
      name: 'Custom',
      component: () => import('@/components/demo/Custom')
    },
    {
      path: '/transition',
      name: 'Transition',
      component: () => import('@/components/demo/Transition')
    }
  ]
})
