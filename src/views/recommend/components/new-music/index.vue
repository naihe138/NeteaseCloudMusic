<template>
  <section class="hList">
    <NewMusicItem />
    <NewMusicItem />
    <NewMusicItem />
    <NewMusicItem />
    <NewMusicItem />
    <NewMusicItem />
  </section>
</template>


<script>
  import NewMusicItem from './item'
  export default {
    name: 'NewMusic',
    components: {
      NewMusicItem
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .hList {
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    .item:nth-last-of-type(1), .item:nth-last-of-type(2) {
      border-bottom: 1px solid #f3f3f3;
    }
  }
</style>
