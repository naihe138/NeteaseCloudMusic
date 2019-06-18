<template>
  <div>
    <h1>scss</h1>
    <h2>{{msg}}</h2>
    <div class="name">class name</div>
    <div class="test"> class test 123</div>
    <img src="../assest/abc.jpeg" alt="">
    <Foo />
  </div>
</template>

<script>
  import Foo from './foo'
  export default {
    name: 'test',
    components: {
      Foo
    },
    data() {
      return {
        msg: '我是msg1123'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url('../public/scss/test.scss');
  .test{
    color: pink;
    transform: translate(10px)
  }
</style>

