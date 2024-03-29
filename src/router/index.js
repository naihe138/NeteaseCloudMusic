import Vue from 'vue'
import VueRouter from 'vue-router'

const Recommend = () => import(/* webpackChunkName: "recommend" */ '../views/recommend/index.vue')
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Recommend
    }
  ]
})

export default router
