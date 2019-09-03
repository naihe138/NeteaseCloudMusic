import Vue from 'vue'
import VueRouter from 'vue-router'

const Recommend = () => import(/* webpackChunkName: "recommend" */ '../views/recommend/index.vue')
const SongList = () => import(/* webpackChunkName: "song-list" */ '../views/song-list/index.vue')
const SongListDetail = () => import(/* webpackChunkName: "song-list" */ '../views/song-list/detail.vue')
const AnchorRadio = () => import(/* webpackChunkName: "anchor-radio" */ '../views/anchor-radio/index.vue')
const AnchorRadioDitaile = () => import(/* webpackChunkName: "anchor-radio" */ '../views/anchor-radio/detail.vue')
const Top = () => import(/* webpackChunkName: "top" */ '../views/top/index.vue')
const Singer = () => import(/* webpackChunkName: "singer" */ '../views/singer/index.vue')
const NewMusic = () => import(/* webpackChunkName: "new-music" */ '../views/new-music/index.vue')
const ExclusiveSend = () => import(/* webpackChunkName: "exclusive-send" */ '../views/exclusive-send/index.vue')
const ErrorPage = () => import(/* webpackChunkName: "error-page" */ '../views/error/index.vue')

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
      path: '/song-detail/:id',
      component: SongListDetail
    },
    {
      path: '/anchor-radio',
      component: AnchorRadio
    },
    {
      path: '/anchor-detail/:id',
      component: AnchorRadioDitaile
    },
    {
      path: '/top',
      component: Top
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/new-music',
      component: NewMusic
    },
    {
      path: '/exclusive-send',
      component: ExclusiveSend
    },
    {
      path: '*',
      component: ErrorPage
    }
  ]
})

export default router
