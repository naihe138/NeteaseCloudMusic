<template>
  <section>
    <Banner />
    <div class="category">
      <ul>
        <li><i class="iconfont"></i></li>
      </ul>
      <i class="iconfog"></i>
      <i class="iconfog"></i>
    </div>
    <div class="">
      <Title title="个性电台推荐" />
      <List />
    </div>
  </section>
</template>

<script>
  import Banner from 'public/components/banner/index'
  import Title from 'public/components/title/index'
  import List from './components/list/index'
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
