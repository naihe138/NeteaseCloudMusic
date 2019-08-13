<template>
  <div class="list">
    <Item />
    <Item />
    <Item />
    <Item />
  </div>
</template>

<script>
  import Item from './item'
  export default {
    components: {
      Item
    }
  }
</script>


<style lang="scss" scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 184px);
    grid-column-gap: 18px;
  }
</style>
