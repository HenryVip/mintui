import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LazyLoad from '../components/lazy-load/lazyload'
import Form from '../components/form/form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lazyload',
      name: 'lazyload',
      component: LazyLoad
    },
    {
    	path: '/form',
    	name: 'form',
    	component: Form
    }
  ]
})
