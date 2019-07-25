<template>
  <section>
    <Banner />
    <Category />
    <div class="">
      <Title title="付费精品" />
      <PaymentBoutique />
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
  import Category from './components/category/index'
  import PaymentBoutique from './components/payment-boutique/index'
  export default {
    components: {
      Banner,
      Title,
      List,
      Category,
      PaymentBoutique
    },
    data() {
      return {
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
