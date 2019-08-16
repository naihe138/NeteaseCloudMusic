<template>
  <div class="tab">
    <div class="btnBox">
      <span :class="activeIndex === 0 ? 'active' : ''" @click="clickBtn(0)">新歌速递</span>
      <span :class="activeIndex === 1 ? 'active' : ''" @click="clickBtn(1)">新碟速递</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: 0
      }
    },
    methods: {
      clickBtn (index) {
        this.activeIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btnBox {
    width: 230px;
    height: 30px;
    display: flex;
    border: 1px solid #bbbbbb;
    border-radius: 16px;
    overflow: hidden;
    span {
      flex: 1;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    span.active {
      background: #bbbbbb;
      border-radius: 16px;
      color: #ffffff;
    }
  }
</style>
