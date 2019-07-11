<template>
  <div class="item">
    <div class="imagebox">
      <span class="one"><i class="iconfont icondanzi"></i></span>
      <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" />
    </div>
    <p class="title">别整太大压力，要多自己自己大压力，要多自己自己</p>
  </div>
</template>

<script>
  export default {
    name: 'item',
    data () {
      return {}
    },
    methods: {}
  }
</script>


<style lang="scss" scoped>
  .item {
    margin-right: 18px;
    height: 184px;
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
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
    .one {
      position: absolute;
      width: 23px;
      height: 23px;
      border: 1px solid #877772;
      background: rgba(0,0,0,0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      left: 10px;
      top: 8px;
      i{
        font-size: 16px;
        color: #ffffff;
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
