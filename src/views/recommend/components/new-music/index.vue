<template>
  <section class="hList">
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
  }
</style>
