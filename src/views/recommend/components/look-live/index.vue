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
    display: flex;
  }
</style>
