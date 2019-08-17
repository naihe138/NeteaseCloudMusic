<template>
  <div class="pagePadding">
    <Banner />
    <div class="">
      <Title title="推荐歌单" />
      <List />
    </div>
    <div class="">
      <Title title="独家放送" />
      <OneSend />
    </div>
    <div class="">
      <Title title="最新音乐" />
      <HList />
    </div>
    <div class="">
      <Title title="推荐mv" />
      <RecommendMv />
    </div>
    <div class="">
      <Title title="主播电台" />
      <AnchorRadio />
    </div>
    <div class="">
      <Title title="LOOK直播" />
      <LookLive />
    </div>
  </div>
</template>

<script>
  import Banner from 'public/components/banner/index'
  import Title from 'public/components/title/index'
  import List from './components/recommend-music/index'
  import HList from './components/new-music/index'
  import OneSend from './components/one-send/index'
  import RecommendMv from './components/recommend-mv/index'
  import AnchorRadio from './components/anchor-radio/index'
  import LookLive from './components/look-live/index'
  export default {
    components: {
      Banner,
      Title,
      List,
      HList,
      OneSend,
      RecommendMv,
      AnchorRadio,
      LookLive
    },
    data() {
      return {
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .test {
    color: hotpink;
    background: blueviolet;
  }
</style>
