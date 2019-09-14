<template>
  <section class="main">
    <Mheader />
    <Mbody />
    <Mfooter />
    <div class="playbox">
      <Player></Player>
    </div>
  </section>
</template>

<script>
  import Mheader from './header'
  import Mfooter from './footer'
  import Mbody from './body'
  import Player from '@/public/components/player/index.vue'
  export default {
    name: 'layout',
    components: {
      Mheader,
      Mfooter,
      Mbody,
      Player
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    width: 1002px;
    height: 670px;
    overflow: hidden;
    border: 1px solid cadetblue;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
  }
  .playbox {
    position: absolute;
    background: red;
    top: 50px;
    left: 0;
    z-index: 100;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
