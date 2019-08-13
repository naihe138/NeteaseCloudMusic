<template>
  <div class="playIcon" :style="size">
    <i class="iconfont icontriangle-right"></i>
  </div>
</template>

<script>
  export default {
    props: {
      width: {
        type: Number,
        default: 28
      }
    },
    computed: {
      size () {
        let s = this.width + 'px'
        return {
          width: s,
          height: s
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .playIcon {
    // width: 28px;
    // height: 28px;
    background: rgba(255,255,255, 0.8);
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    i{
      color: red;
      font-size: 16px;
    }
  }
</style>
