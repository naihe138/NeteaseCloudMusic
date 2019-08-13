<template>
  <div class="item">
    <div class="thumb">
      <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" alt="">
      <p>5月34日更新</p>
    </div>
    <div class="textbox">
      <h3 class="title">一生必听的100收成名曲</h3>
      <div class="des">
        <p>一生必听的100收成名曲</p>
        <p><i class="iconfont"></i>一生必听的100收成名曲</p>
      </div>
      <div class="price">¥ 123</div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'AnchorRadioItem',
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
    height: 156px;
    display: flex;
    // justify-content: center;
    align-items: center;
    transition: background 0.3s;
    padding-left: 10px;
    border-top: 1px solid #f3f3f3;
    &:hover {
      background: #f5f5f5;
    }
    .thumb {
      width: 134px;
      height: 134px;
      position: relative;
      overflow: hidden;
      border-radius: 4px;
      img {
        width: 134px;
        height: 134px;
      }
      p {
        position: absolute;
        left: 0;
        bottom: 4px;
        text-indent: 8px;
        color: #ffffff;
      }
    }
    .textbox {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 120px;
      padding-left: 10px;
      .des{
        color: #c0c0c4;
      }
      .price {
        color: #cf3d3c;
        font-size: 14px;
      }
    }
  }
</style>
