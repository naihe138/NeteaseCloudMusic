<template>
  <section>
    <div class="pagePadding">
      <Tab />
      <MSelect />
    </div>
    <TebContent />
  </section>
</template>

<script>
  import Tab from './components/tab.vue'
  import MSelect from './components/select.vue'
  import TebContent from './components/tab-content'
  export default {
    components: {
      Tab,
      MSelect,
      TebContent
    }
  }
</script>

