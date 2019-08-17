<template>
  <div class="list">
    <div class="first item">
      <img src="@/assest/abc.jpeg" alt="">
      <p class="title">歌手排行帮<i class="iconfont iconchangyongicon-"></i></p>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <p class="title list-title">
        <span class="name">何文林</span>
        <i class="iconfont iconrenwu"></i>
      </p>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <p class="title list-title">
        <span class="name">何文林</span>
        <i class="iconfont iconrenwu"></i>
      </p>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <p class="title list-title">
        <span class="name">何文林</span>
        <i class="iconfont iconrenwu"></i>
      </p>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <p class="title list-title">
        <span class="name">何文林</span>
        <i class="iconfont iconrenwu"></i>
      </p>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <p class="title list-title">
        <span class="name">何文林</span>
        <i class="iconfont iconrenwu"></i>
      </p>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <p class="title list-title">
        <span class="name">何文林</span>
        <i class="iconfont iconrenwu"></i>
      </p>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <p class="title list-title">
        <span class="name">何文林</span>
        <i class="iconfont iconrenwu"></i>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 18px;
    grid-row-gap: 30px;
  }
  .item {
    height: 164px;
    img {
      height: 135px;
      width: 135px;
      border-radius: 4px;
    }
  }
  .title {
    display: flex;
    align-items: center;
    line-height: 30px;
  }
  .list-title {
    box-sizing: border-box;
    justify-content: space-between;
    i {
      background: red;
      color: #ffffff;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      border-radius: 10px;
    }
  }
</style>
