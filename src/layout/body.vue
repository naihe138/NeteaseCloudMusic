<template>
  <div class="m-body">
    <Side class="side" />
    <div class="content">
      <router-view></router-view>
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
      padding: 20px 20px 20px 30px;
    }
  }
</style>
