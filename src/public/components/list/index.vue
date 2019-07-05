<template>
  <div class="list">
    <Item />
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
    display: flex;
  }
</style>
