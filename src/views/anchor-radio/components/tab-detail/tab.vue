<template>
  <ul class="tab">
    <li v-for="(item, index) in tabArr"
      :key="index"
      :class="actived === index ? 'actived' : ''">{{item.text}}</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        tabArr: [
          {
            text: '热门',
          },
          {
            text: '原创',
          },
          {
            text: '古风',
          },
          {
            text: '纯音乐',
          },
          {
            text: '华语翻唱',
          }
        ],
        actived: 0
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .tab {
    overflow: hidden;
    li {
      display: inline-block;
      margin-right: 30px;
    }
    .actived {
      color: #000;
      font-weight: 600;
    }
  }
</style>
