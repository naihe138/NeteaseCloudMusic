<template>
  <div class="list">
    <LookItem />
    <LookItem />
    <LookItem />
    <LookItem />
  </div>
</template>

<script>
  import LookItem from './item'
  export default {
    components: {
      LookItem
    }
  }
</script>


<style lang="scss" scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
  }
</style>
