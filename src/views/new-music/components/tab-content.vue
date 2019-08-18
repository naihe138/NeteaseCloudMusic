<template>
  <div>
    <NewMusic v-show="show"/>
    <NewUp v-show="!show" />
  </div>
</template>

<script>
  import NewMusic from './new-music'
  import NewUp from './new-up'
  export default {
    components: {
      NewMusic,
      NewUp
    },
    data() {
      return {
        show: false
      }
    }
  }
</script>
