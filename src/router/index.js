import Vue from 'vue'
import Router from 'vue-router'
import CallDoScg from '@/components/CallDoScg'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'CallDoScg',
      component: CallDoScg
    }
  ]
})

//
