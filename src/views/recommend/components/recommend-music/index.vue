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
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 186px);
    grid-column-gap: 10px;
    grid-row-gap: 12px;
  }
</style>
