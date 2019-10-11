<template>
  <section class="player">
    <Move />
    <Lyrisc />
  </section>
</template>

<script>
  import Move from './move'
  import Lyrisc from './lyrisc'
  export default {
    components: {
      Move,
      Lyrisc
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .player {
    display: flex;
  }
</style>
