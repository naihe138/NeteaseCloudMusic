<template>
  <section class="main">
    <Mheader />
    <Mbody />
    <Mfooter @upplayer="upplayer" />
    <transition name="sliceUp">
      <div class="playbox" v-show="showPlayer">
        <Player></Player>
      </div>
    </transition>
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
    },
    data () {
      return {
        showPlayer: true
      }
    },
    methods: {
      upplayer () {
        this.showPlayer = !this.showPlayer
      }
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
    background: #faf9fa;
    height: 560px;
    top: 50px;
    left: 0;
    z-index: 10;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 0 20px 20px 30px;
  }
  .sliceUp-enter-active, .sliceUp-leave-active {
    transition: transform .3s;
  }
  .sliceUp-enter, .sliceUp-leave-to {
    transform: translate3d(0, 560px, 0);
  }
</style>
