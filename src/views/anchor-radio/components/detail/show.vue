<template>
  <div>
    <div class="top">
      <div class="totle">共10期</div>
      <div class="sort">
        <span>排序</span>
        <i class="iconfont iconpaixu-jiang active"></i>
        <i class="iconfont iconpaixusheng"></i>
      </div>
    </div>
    <ol class="showList">
      <li class="item">
        <span class="topNum center">10</span>
        <img class="post" src="@/assest/abc.jpeg" alt="">
        <h3 class="title">离开家</h3>
        <span class="count center">
          <i class="iconfont iconbofang1"></i>897
        </span>
        <span class="zan center">
          <i class="iconfont iconzan"></i>897
        </span>
        <span class="date center">2019-09-09</span>
        <span class="time center">09:32</span>
      </li>
      <li class="item">
        <span class="topNum center">10</span>
        <img class="post" src="@/assest/abc.jpeg" alt="">
        <h3 class="title">离开家</h3>
        <span class="count center">
          <i class="iconfont iconbofang1"></i>897
        </span>
        <span class="zan center">
          <i class="iconfont iconzan"></i>897
        </span>
        <span class="date center">2019-09-09</span>
        <span class="time center">09:32</span>
      </li>
      <li class="item">
        <span class="topNum center">10</span>
        <img class="post" src="@/assest/abc.jpeg" alt="">
        <h3 class="title">离开家</h3>
        <span class="count center">
          <i class="iconfont iconbofang1"></i>897
        </span>
        <span class="zan center">
          <i class="iconfont iconzan"></i>897
        </span>
        <span class="date center">2019-09-09</span>
        <span class="time center">09:32</span>
      </li>
      <li class="item">
        <span class="topNum center">10</span>
        <img class="post" src="@/assest/abc.jpeg" alt="">
        <h3 class="title">离开家</h3>
        <span class="count center">
          <i class="iconfont iconbofang1"></i>897
        </span>
        <span class="zan center">
          <i class="iconfont iconzan"></i>897
        </span>
        <span class="date center">2019-09-09</span>
        <span class="time center">09:32</span>
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
  .top {
    display: grid;
    margin: 0 20px 0 30px;
    grid-template-columns: 100px 100px;
    justify-content: space-between;
    align-items: center;
    height: 22px;
    padding: 4px 0;
    .totle {
      color: #666666;
    }
    .sort {
      justify-self: end;
      display: flex;
      align-items: center;
      span {
        margin-right: 4px;
        color: #c0c0c0;
      }
      i {
        width: 25px;
        height: 20px;
        background: #f3f3f3;
        color: #929292;
        text-align: center;
        line-height: 20px;
      }
      i:nth-of-type(1) {
        margin-right: 2px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 3px;
      }
      i:nth-of-type(2) {
        border-top-right-radius: 2px;
        border-bottom-right-radius: 3px;
      }
      i.active {
        background: #c0c0c0;
        color: #ffffff;
      }
    }
  }
  .showList {
    margin: 0 2px 10px 2px;
    .item {
      display: grid;
      grid-template-columns: 58px 60px auto 120px 70px 100px 75px;
      height: 80px;
      align-items: center;
      border-radius: 4px;
      &:nth-of-type(2n - 1) {
        background: #f2f2f3;
      }
    }
    // .topNum {
    //   justify-self: center;
    // }
    .center {
      justify-self: center;
      color: #b6b6b7;
      align-self: center;
    }
    .post {
      width: 60px;
      height: 60px;
      border-radius: 4px;
    }
    .title {
      padding-left: 10px;
      overflow: hidden;
      font-weight: normal;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
