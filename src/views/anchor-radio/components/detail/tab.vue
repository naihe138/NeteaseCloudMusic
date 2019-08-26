<template>
  <section>
    <div class="tabHeader">
      <span class="active">节目<i>(10)</i></span>
      <span>订阅者<i>(110)</i></span>
    </div>
    <div class="tabContent">
      <Show />
    </div>
  </section>
</template>

<script>
  import Show from './show'
  export default {
    components: {
      Show
    }
  }
</script>

<style lang="scss" scoped>
  .tabHeader {
    border-bottom: 1px solid #f3f3f3;
    height: 32px;
    box-sizing: border-box;
    margin: 0 20px 0 30px;
    line-height: 32px;
    span {
      display: inline-block;
      margin-right: 30px;
      font-size: 14px;
      position: relative;
      height: 30px;
    }
    .active{
      color: #cf3d3c;
      i {
        color: #cf3d3c;
      }
    }
    .active::after {
      content: "";
      width: 100%;
      height: 2px;
      background: #cf3d3c;
      position: absolute;
      bottom: -2px;
      left: 0;
    }
    i {
      color: #666666;
    }
  }
</style>
