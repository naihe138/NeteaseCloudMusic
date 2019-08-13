<template>
  <section class="hList">
    <AnchorRadioItem />
    <AnchorRadioItem />
    <AnchorRadioItem />
    <AnchorRadioItem />
    <AnchorRadioItem />
    <AnchorRadioItem />
  </section>
</template>


<script>
  import AnchorRadioItem from './item'
  export default {
    name: 'AnchorRadio',
    components: {
      AnchorRadioItem
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .hList {
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    // grid-row-gap: 20px;
    .item:nth-last-child(1) {
      border-bottom: 1px solid #f3f3f3;
    }
    .item:nth-last-child(2) {
      border-bottom: 1px solid #f3f3f3;
    }
  }
</style>

