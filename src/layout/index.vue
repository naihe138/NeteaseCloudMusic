<template>
  <section class="main">
    <Mheader />
    <Mbody />
    <Mfooter />
  </section>
</template>

<script>
  import Mheader from './header'
  import Mfooter from './footer'
  import Mbody from './body'
  export default {
    name: 'layout',
    components: {
      Mheader,
      Mfooter,
      Mbody
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
  }
</style>
