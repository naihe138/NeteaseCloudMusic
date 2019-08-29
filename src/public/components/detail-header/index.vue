<template>
  <div class="redioDetailDeader pagePadding">
    <img class="post" src="@/assest/abc.jpeg" alt="">
    <div class="content">
      <h3 class="title">
        <span>电台</span>
        素心第六空间
      </h3>
      <p class="user">
        <img class="usephoto" src="@/assest/abc.jpeg" alt="">
        <span class="username">天阿斯顿</span>
        <span class="create">2019-09-09创建</span>
      </p>
      <div class="btnbox">
        <div class="play btn">
          <i class="iconfont iconbofang1"></i>
          <span>播放全部</span>
          <i class="iconfont iconplus-add"></i>
        </div>
        <div class="btn nbtn">
          <i class="iconfont iconxingxing"></i>
          订阅(169)
        </div>
        <div class="btn nbtn">
          <i class="iconfont iconfenxiang"></i>
          分享(169)
        </div>
      </div>
      <div class="dec">
        <span>创作|翻唱</span>李克强就离开了空间里健康拉开距离尽快了解了解离开了航空件哈伦裤李克强就离开了空间里健康拉开距离尽快了解了解离开了航空件哈伦裤
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DHeader'
  }
</script>

<style lang="scss" scoped>
  @mixin zCenter {
    display: flex;
    align-items: center;
  }
  .redioDetailDeader {
    height: 200px;
    display: grid;
    grid-template-columns: 200px auto;
    grid-column-gap: 28px;
  }
  .post {
    width: 200px;
    height: 200px;
    border-radius: 4px;
  }
  .content {
    overflow: hidden;
    .title {
      display: flex;
      align-items: center;
      font-size: 22px;
      margin-bottom: 15px;
      span {
        font-size: 12px;
        border: 1px solid #cf3d3c;
        margin-right: 10px;
        font-weight: normal;
        padding: 1px 5px;
        border-radius: 4px;
      }
    }
    .user {
      @include zCenter;
      margin-bottom: 22px;
      .usephoto {
        width: 25px;
        height: 25px;
        border-radius: 25px;
        margin-right: 10px;
      }
      .username {
        margin-right: 10px;
        color: #547fb4;
      }
      .create {
        color: #666666;
      }
    }
    .btnbox {
      @include zCenter;
      margin-bottom: 26px;
      .btn {
        height: 30px;
        box-sizing: border-box;
        border: 1px solid #d9d9d9;
        padding: 0 13px;
        border-radius: 15px;
        @include zCenter;
        justify-content: center;
        margin-right: 10px;
      }
      .play {
        border: 0;
        background: linear-gradient(to right, #f5544e, #cf3d3d);
        color: #ffffff;
        span {
          margin-left: 5px;
          margin-right: 20px;
        }
      }
      .nbtn i{
        margin-right: 4px;
      }
    }
    .dec {
      span {
        display: inline-block;
        border: 1px solid #cf3d3c;
        padding: 1px 5px;
        border-radius: 2px;
        margin-right: 3px;
        color: #cf3d3c;
      }
    }
  }
</style>
