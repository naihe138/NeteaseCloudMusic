<template>
  <div class="list">
    <RecommendItem />
    <RecommendItem />
    <RecommendItem />
    <RecommendItem />
  </div>
</template>

<script>
  import RecommendItem from './item'
  export default {
    components: {
      RecommendItem
    }
  }
</script>


<style lang="scss" scoped>
  .list {
    display: flex;
  }
</style>
