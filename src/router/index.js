import Vue from 'vue'
import VueRouter from 'vue-router'

const Recommend = () => import(/* webpackChunkName: "recommend" */ '../views/recommend/index.vue')
const SongList = () => import(/* webpackChunkName: "song-list" */ '../views/song-list/index.vue')
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
    }
  ]
})

export default router
