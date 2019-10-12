<template>
  <div class="m-body">
    <Side class="side" />
    <div class="content" ref="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import Side from './side'
  export default {
    name: 'Mbody',
    components: {
      Side
    },
    methods: {
      scroll (e) {
        if (this.scheduledAnimationFrame) return
        this.scheduledAnimationFrame = true
        window.requestAnimationFrame(() => {
          this.scheduledAnimationFrame = false
          this.$bus.emit('scroll', e)
        })
      }
    },
    mounted () {
      this.$refs.content.addEventListener('scroll', this.scroll)
    }
  }
</script>


<style lang="scss" scoped>
  @import "../public/scss/comment.scss";
  .m-body {
    background-color: #ffffff;
    display: flex;
    .side {
      width: 200px;
      height: 560px;
      background: #ededed;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .content {
      flex: 1;
      height: 560px;
      overflow-x: hidden;
      overflow-y: auto;
      box-sizing: border-box;
      position: relative;
      @include scrollbar();
    }
  }
</style>
