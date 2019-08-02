<template>
  <section>
    <h3 class="title">官方榜</h3>
    <OfficailList />
    <h3 class="title">全球榜</h3>
    <GlobaleList />
  </section>
</template>

<script>
  import OfficailList from './components/official-list'
  import GlobaleList from './components/global-list'
  export default {
    name: 'Top',
    components: {
      OfficailList,
      GlobaleList
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    line-height: 42px;
  }
</style>
