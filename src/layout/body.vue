<template>
  <div class="m-body">
    <Side class="side" />
    <div class="content">
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
    }
  }
</script>


<style lang="scss" scoped>
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
      &::-webkit-scrollbar-track {
        // border: 1px solid black;
        background-color: #FFF;
      }
      &::-webkit-scrollbar {
        width: 8px;
        background-color: #F5F5F5;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #e1e1e1;
        border-radius: 6px;
      }
    }
  }
</style>
