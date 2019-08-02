<template>
  <div class="officail">
    <img class="post" src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" alt="">
    <div class="topList">
      <ul>
        <li class="item">
          <div class="left">
            <span class="top red">1</span>
            <span class="persent">124%</span>
            <span class="title">暗示领导</span>
            <span class="des">(123123)</span>
          </div>
          <div class="right">何文林</div>
        </li>
        <li class="item">
          <div class="left">
            <span class="top red">2</span>
            <span class="persent">124%</span>
            <span class="title">暗示领导</span>
            <span class="des">(123123)</span>
          </div>
          <div class="right">何文林</div>
        </li>
        <li class="item">
          <div class="left">
            <span class="top red">3</span>
            <span class="persent">124%</span>
            <span class="title">暗示领导</span>
            <span class="des">(123123)</span>
          </div>
          <div class="right">何文林</div>
        </li>
        <li class="item">
          <div class="left">
            <span class="top">4</span>
            <span class="persent">124%</span>
            <span class="title">暗示领导</span>
            <span class="des">(123123)</span>
          </div>
          <div class="right">何文林</div>
        </li>
        <li class="item">
          <div class="left">
            <span class="top">5</span>
            <span class="persent">124%</span>
            <span class="title">暗示领导</span>
            <span class="des">(123123)</span>
          </div>
          <div class="right">何文林</div>
        </li>
      </ul>
      <div class="all">查看全部<i class="iconfont iconchangyongicon-"></i></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .officail {
    display: flex;
  }
  .post {
    width: 172px;
    height: 172px;
    border-radius: 4px;
  }
  .topList {
    flex: 1;
    margin-left: 32px;
    .item {
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 10px;
      border-radius: 2px;
      &:nth-of-type(2n - 1) {
        background: #fafafa;
      }
    }
    .left {
      display: flex;
      .top {
        color: #999999;
        margin-right: 10px;
      }
      .red {
        color: #cf3d3c;
      }
      .persent {
        color: #c0c0c0;
        margin-right: 10px;
      }
      .title {
        color: #333333;
      }
      .des {
        color: #666666;
      }
    }
    .right {
      color: #999999;
    }
  }
  .all {
    padding:  10px 0 0 10px;
    color: #666666;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
</style>
