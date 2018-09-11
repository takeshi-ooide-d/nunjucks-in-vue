import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/One'
import Two from '@/components/Two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: One
    },
    {
      path: '/two',
      component: Two
    }
  ]
})
