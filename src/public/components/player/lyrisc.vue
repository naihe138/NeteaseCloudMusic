<template>
  <div class="lyrisc">
    <div class="title">
      <h4>不得不爱<i>标准音乐</i></h4>
      <p class="info">
        <span>专辑：<a>不得不爱</a></span>
        <span>歌手：<a>不得不爱</a></span>
        <span>来源：<a>不得不爱</a></span>
      </p>
    </div>
    <div class="lyrisc-wrap">
      <div class="content">
        <ul class="lyrisc-text">
          <li class="row introduce">作曲：阿瑟大神的离开家</li>
          <li class="row introduce">作曲：阿瑟大神的离开家</li>
          <li class="row introduce">作曲：阿瑟大神的离开家</li>
          <li class="row introduce active">作曲：阿瑟大神的离开家</li>
          <li class="row">
            <p>all we need know is</p>
            <p>我们知道的是</p>
          </li>
          <li class="row introduce">作曲：阿瑟大神的离开家</li>
          <li class="row introduce active">作曲：阿瑟大神的离开家</li>
          <li class="row">
            <p>all we need know is</p>
            <p>我们知道的是</p>
          </li>
          <li class="row introduce">作曲：阿瑟大神的离开家</li>
          <li class="row introduce active">作曲：阿瑟大神的离开家</li>
          <li class="row">
            <p>all we need know is</p>
            <p>我们知道的是</p>
          </li>
        </ul>
        <div class="divice"></div>
      </div>
      <div class="control"></div>
    </div>
  </div>
</template>

<style lang="scss" scopeed>
  @import "../../scss/comment.scss";
  .lyrisc {
    flex: 1;
    margin-top: 36px;
  }
  .title {
    h4{
      font-size: 20px;
      font-weight: 400;
      display: flex;
      align-items: center;
      i {
        display: inline-block;
        color: #cf3d3c;
        border: 1px solid #cf3d3c;
        font-size: 10px;
        border-radius: 2px;
        margin-left: 2px;
        padding: 1px 4px;
      }
    }
    .info {
      margin: 20px 0 30px 0;
      display: flex;
      color: #646464;
      span {
        margin-right: 40px;
      }
      a {
        color: #5881ab;
      }
    }
  }
  .lyrisc-wrap {
    display: flex;
    height: 342px;
    .content {
      width: 332px;
      height: 342px;
      position: relative;
      .divice {
        width: 1px;
        height: 342px;
        position: absolute;
        background: #eeedee;
        top: 0;
        right: 0px;
      }
      .lyrisc-text {
        width: 332px;
        height: 342px;
        overflow-x: hidden;
        overflow-y: auto;
        @include scrollbar(#faf9fa, #faf9fa);
      }
      li {
        margin-top: 20px;
        color: #646464;
        font-size: 14px;
      }
      li.active{
        color: #000000;
      }
    }
    .control {
      width: 30px;
    }
  }
</style>
