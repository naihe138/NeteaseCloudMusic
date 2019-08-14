import Vue from 'vue'
import VueRouter from 'vue-router'

const Recommend = () => import(/* webpackChunkName: "recommend" */ '../views/recommend/index.vue')
const SongList = () => import(/* webpackChunkName: "song-list" */ '../views/song-list/index.vue')
const AnchorRadio = () => import(/* webpackChunkName: "anchor-radio" */ '../views/anchor-radio/index.vue')
const Top = () => import(/* webpackChunkName: "top" */ '../views/top/index.vue')
const Singer = () => import(/* webpackChunkName: "singer" */ '../views/singer/index.vue')
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Recommend
    },
    {
      path: '/song-list',
      component: SongList
    },
    {
      path: '/anchor-radio',
      component: AnchorRadio
    },
    {
      path: '/top',
      component: Top
    },
    {
      path: '/singer',
      component: Singer
    }
  ]
})

export default router
