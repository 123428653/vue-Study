import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/pages/Index')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/pages/Register')
    },
    {
      path: '/flex',
      name: 'Flex',
      component: () => import('@/components/demo/Flex')
    },
    /* {  //页面插件报错，暂时关闭
      path: '/cy',
      name: 'Cytoscape',
      component: () => import('@/components/demo/CytoscapeVue')
    }, */
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
    },
    {
      path: '/canvas',
      name: 'Canvas',
      component: () => import('@/components/demo/Canvas')
    },
    {
      path: '/markedHighlight',
      name: 'MarkedHighlight',
      component: () => import('@/components/demo/markedHighlight')
    }
  ]
})
