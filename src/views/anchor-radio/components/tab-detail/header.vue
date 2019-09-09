<template>
  <div class="header">
    <h3 class="title">翻唱 | 创作</h3>
    <Tab />
  </div>
</template>

<script>
  import Tab from './tab'
  export default {
    components: {
      Tab
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    height: 95px;
    margin: 0 1px;
    border-bottom: 1px solid #e6e6e6;
    box-sizing: border-box;
    padding-left: 30px;
    position: sticky;
    top: 0;
    background: #ffffff;
  }
  .title {
    font-size: 20px;
    height: 66px;
    line-height: 64px;
  }
</style>
