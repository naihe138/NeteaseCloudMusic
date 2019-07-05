<template>
  <div>
    <Banner />
    <div class="">
      <Title title="推荐歌单" />
      <List />
      <List style="margin-top: 20px;" />
    </div>
  </div>
</template>

<script>
  import Banner from 'public/components/banner/index'
  import Title from 'public/components/title/index'
  import List from 'public/components/list/index'
  export default {
    components: {
      Banner,
      Title,
      List
    },
    data() {
      return {
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .test {
    color: hotpink;
    background: blueviolet
  }
</style>
