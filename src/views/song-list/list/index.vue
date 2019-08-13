<template>
  <div class="list">
    <RecommendItem />
    <RecommendItem />
    <RecommendItem />
    <RecommendItem />
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
  }
</style>
