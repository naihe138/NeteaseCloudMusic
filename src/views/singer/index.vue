<template>
  <section>
    <Classification />
    <SingerList />
  </section>
</template>

<script>
  import Classification from './components/classification'
  import SingerList from './components/list'
  export default {
    name: 'Singer',
    components: {
      Classification,
      SingerList
    }
  }
</script>
