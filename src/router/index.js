import Vue from 'vue'
import Router from 'vue-router'
import CallDoScgPage from '@/components/CallDoScg'
import CVPage from '@/components/CV'
import MyapiPage from '@/components/Myapi'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'CallDoScg',
      component: CallDoScgPage
    },
    {
      path: '/cv',
      name: 'CV',
      component: CVPage
    },
    {
      path: '/myapi',
      name: 'Myapi',
      component: MyapiPage
    }
  ]
})

//
