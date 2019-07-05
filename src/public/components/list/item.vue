<template>
  <div class="item">
    <div class="imagebox">
      <span class="count"><i class="iconfont iconyousanjiao"></i>123123</span>
      <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" />
      <div class="itemFooter">
        <div class="left">
          <i class="iconfont iconrenwu"></i>我叫何文丽何文丽
        </div>
        <div class="right">
          <i class="iconfont icontriangle-right"></i>
        </div>
      </div>
    </div>
    <p class="title">别整太大压力，要多自己自己大压力，要多自己自己</p>
  </div>
</template>

<style lang="scss" scoped>
  .item {
    margin-right: 10px;
    height: 184px;
    flex: 1;
    // border: 1px solid red;
    box-sizing: border-box;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    &:nth-of-type(5) {
      margin-right: 0;
    }
  }
  .imagebox {
    width: 100%;
    height: 140px;
    position: relative;
    color: #ffffff;
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
    .itemFooter {
      position: absolute;
      width: 100%;
      bottom: 4px;
      left: 0;
      .left {
        width: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: 4px;
      }
      .right {
        position: absolute;
        right: 6px;
        bottom: 4px;
        width: 30px;
        height: 30px;
        background: rgba(255,255,255, 0.8);
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        i{
          color: red;
          font-size: 12px;
        }
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
