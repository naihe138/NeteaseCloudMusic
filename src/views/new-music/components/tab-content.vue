<template>
  <div>
    <NewMusic v-show="show"/>
    <NewCollection v-show="!show" />
  </div>
</template>

<script>
  import NewMusic from './new-music'
  import NewCollection from './new-collection'
  export default {
    components: {
      NewMusic,
      NewCollection
    },
    data() {
      return {
        show: true
      }
    }
  }
</script>
