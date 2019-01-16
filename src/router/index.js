import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/about',
        name: 'about',
        component: () => import('@/components/about/about')
      },
      {
        path: '/text',
        name: 'text',
        component: () => import('@/components/text')
      },
      {
        path: '/',
        name: 'Hello',
        component: () => import('@/components/HelloWorld')
      }, {
        path: '/test',
        name: 'Test',
        component: () => import('@/components/Test')
      }
    ]
  })
}
