<template>
  <section>
    <Tab />
    <MSelect />
  </section>
</template>

<script>
  import Tab from './components/tab.vue'
  import MSelect from './components/select.vue'
  export default {
    components: {
      Tab,
      MSelect
    }
  }
</script>
