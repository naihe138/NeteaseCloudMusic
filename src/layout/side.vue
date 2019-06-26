<template>
  <section>
    <div class="user">
      <div class="avatar"><img src="../assest/user.png" /></div>
      <span class="name">未登录</span>
      <i class="iconfont icontriangle-right"></i>
    </div>
    <div class="navList">
      <div class="item active">
        <i class="iconfont iconwangyiyunyinlezizhi-copy"></i>发现音乐
      </div>
      <div class="item">
        <i class="iconfont iconFM"></i>私人FM
      </div>
      <div class="item">
        <i class="iconfont iconshipin"></i>视频
      </div>
      <div class="item">
        <i class="iconfont iconpengyou"></i>朋友
      </div>
    </div>
    <div class="navHeader">我的音乐</div>
    <div class="navList">
      <div class="item">
        <i class="iconfont iconyinle"></i>iTunese音乐
      </div>
      <div class="item">
        <i class="iconfont iconxiazai"></i>下载管理
      </div>
    </div>
    <div class="navOparata">
      <span class="creat"><i class="iconfont icontriangle-bottom"></i>创建的歌单</span>
      <i class="iconfont iconplus-add"></i>
    </div>
    <div class="navList">
      <div class="item">
        <i class="iconfont iconlike"></i>我最喜欢的音乐
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .user{
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    cursor: pointer;
    .avatar{
      width: 40px;
      height: 40px;
      border: 1px solid #d5d5d5;
      background: #e0e0e0;
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      img {
        width: 39px;
        height: 39px;
      }
    }
    .name {
      padding: 0 10px;
      font-size: 14px;
    }
    .iconfont {
      font-size: 12px;
      color: #8e8e8e;
    }
  }
  .navList {
    .item {
      height: 36px;
      display: flex;
      align-items: center;
      padding-left: 20px;
      cursor: pointer;
      i {
        padding-right: 10px;
      }
      &:hover{
        background: #e6e6e6;
      }
    }
    .active{
      background: #e2e2e2;
      color: #ca685f;
    }
  }
  .navHeader {
    color: #888888;
    padding: 5px 0 5px 20px;
  }
  .navOparata {
    color: #888888;
    padding: 5px 10px 5px 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .creat {
      cursor: pointer;
    }
    .icontriangle-bottom {
      padding-right: 6px;
    }
    .iconplus-add {
      color: #000000;
      cursor: pointer;
    }
  }
</style>
