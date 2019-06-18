<template>
  <div class="bot">
    foo
    <button @click="to('/baz')">to baz1</button>
    <button @click="to('/bar')">to bar2111</button>
  </div>
</template>

<script>
  export default {
    methods: {
      to (str) {
        this.$router.push(str)
      }
    }
  }
</script>

<style>
  .bot {
    border: 1px solid red;
  }
</style>
