<template>
  <div class="item">
    <div class="imagebox">
      <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" />
      <div class="itemFooter">
        <div class="text">我叫何文丽何文丽</div>
      </div>
    </div>
    <p class="title">别整太大压力，要多自己自己大压力，要多自己自己</p>
  </div>
</template>

<script>
  export default {
    name: 'RecommendItem',
    components: {},
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>


<style lang="scss" scoped>
  .item {
    // margin-right: 10px;
    height: 184px;
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    // &:nth-of-type(5) {
    //   margin-right: 0;
    // }
  }
  .imagebox {
    width: 100%;
    height: 140px;
    position: relative;
    color: #ffffff;
    border-radius: 4px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    .itemFooter {
      position: absolute;
      width: 100%;
      bottom: 4px;
      left: 0;
      .text {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 6px;
        box-sizing: border-box;
      }
    }

  }
  .title {
    margin-top: 8px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
