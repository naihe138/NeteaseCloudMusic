<template>
  <section class="hList">
    <div class="item">
      <div class="left itemC">
        <div class="itemContent">
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
      </div>
      <div class="right itemC">
        <div class="itemContent">
          <img class="thumb" src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" alt="">
          <div class="textbox">
            <h3 class="title">一生必听的100收成名曲</h3>
            <div class="des">
              <p>一生必听的100收成名曲</p>
              <p><i class="iconfont"></i>一生必听的100收成名曲</p>
            </div>
            <div class="price">¥ 123</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    name: 'AnchorRadio',
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
  }
  .item {
    display: flex;
    justify-content: space-between;
    height: 156px;
    &:nth-last-of-type(1) {
      .itemC {
        border-bottom: 1px solid #f3f3f3;
      }
    }
    .itemC {
      border-top: 1px solid #f3f3f3;
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding-left: 10px;
      &:hover {
        background: #f5f5f5;
      }
    }
    .left {
      margin-right: 40px;
    }
    .itemContent {
      display: flex;
      justify-content: center;
      align-items: center;
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
  }
</style>
