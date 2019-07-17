<template>
  <section class="mfooter">
    <div class="progress">
      <div class="progressBar"></div>
    </div>
    <div class="footerContent">
      <div class="songInfo">
        <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" alt="">
        <div class="songInfoContent">
          <p class="song">那个男人<span class="songAuthor"> - 萧敬腾</span></p>
          <p class="songTime">01:21 / 03:40</p>
        </div>
      </div>
      <div class="playOparations">
        <span class="likeBtn obtn"><i class="iconfont iconlike"></i></span>
        <span class="prevBtn obtn"><i class="iconfont iconback red"></i></span>
        <span class="palyBtn obtn"><i class="iconfont iconbofang red"></i></span>
        <span class="nextBtn obtn"><i class="iconfont iconxiayiqu red"></i></span>
        <span class="shareBtn obtn"><i class="iconfont iconfenxiang"></i></span>
      </div>
      <div class="songLoop">
        <span class="obtn"><i class="iconfont iconliebiaoxunhuan"></i></span>
        <span class="obtn"><i class="iconfont iconbofangliebiao"></i></span>
        <span class="obtn"><i class="iconfont iconweibiaoti1"></i></span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .mfooter {
    height: 60px;
    user-select: none;
  }
  .progress {
    height: 2px;
    width: 100%;
    overflow: hidden;
    background: #f5f5f5;
    .progressBar {
      width: 50%;
      background: red;
      height: 2px;
    }
  }
  .footerContent {
    width: 100%;
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .songInfo {
    display: flex;
    align-items: center;
    margin-left: 10px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 4px;
    }
    .songInfoContent {
      padding-left: 10px;
    }
    .songAuthor, .songTime {
      color: #b3b3b3;
    }
  }
  .obtn {
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    i {
      font-size: 20px;
    }
  }
  .playOparations {
    display: flex;
    .palyBtn i {
      font-size: 30px;
    }
    .red {
      color: #cf3d3c;
    }
  }
  .songLoop {
    display: flex;
    span i {
      font-size: 16px;
    }
  }
</style>
