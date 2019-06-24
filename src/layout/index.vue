<template>
  <section class="main">
    <Mheader />
    <div class="m-body">
      <div class="side">
        <Side />
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
  import Mheader from './header'
  import Side from './side'
  export default {
    name: 'layout',
    components: {
      Mheader,
      Side
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    width: 1002px;
    height: 760px;
    overflow-x: hidden;
    overflow-y: scroll;
    border: 1px solid cadetblue;
    margin: 0 auto;
  }
  .m-body {
    display: flex;
    .side {
      width: 200px;
      min-height: 710px;
      background: #ededed;
    }
    .content {
      flex: 1;
    }
  }
</style>
