<template>
  <div class="item">
    <div class="imagebox">
      <span class="count"><i class="iconfont iconyousanjiao"></i>123123</span>
      <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" />
    </div>
    <p class="title">别整太大压力，要多自己自己大压力，要多自己自己</p>
    <p class="name">123</p>
  </div>
</template>

<script>
  export default {
    name: 'item',
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
    // margin-right: 18px;
    height: 150px;
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    // &:nth-of-type(4) {
    //   margin-right: 0;
    // }
  }
  .imagebox {
    width: 100%;
    height: 100px;
    position: relative;
    color: #ffffff;
    border-radius: 4px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    .count {
      position: absolute;
      width: 100%;
      left: 0;
      top: 4px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 8px;
      box-sizing: border-box;
      i{
        font-size: 12px;
      }
    }
  }
  .title {
    margin-top: 8px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .name {
    color: #999999;
  }
</style>
