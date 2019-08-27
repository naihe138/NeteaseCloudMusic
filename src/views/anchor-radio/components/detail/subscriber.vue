<template>
  <ul class="pagePadding subscriber">
    <li class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <h3 class="title">撒大声地<i class="iconfont iconfemale2"></i></h3>
        <p class="desc">奥术大师大所多</p>
      </div>
    </li>
    <li class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <h3 class="title">撒大声地<i class="iconfont iconmale2"></i></h3>
      </div>
    </li>
    <li class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <h3 class="title">撒大声地</h3>
      </div>
    </li>
    <li class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <h3 class="title">撒大声地</h3>
      </div>
    </li>
    <li class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <h3 class="title">撒大声地<i class="iconfont iconmale2"></i></h3>
      </div>
    </li>
    <li class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <h3 class="title">撒大声地</h3>
      </div>
    </li>
    <li class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <h3 class="title">撒大声地</h3>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .subscriber {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 18px;
  }
  .item {
    display: grid;
    grid-template-columns: 92px auto;
    grid-column-gap: 18px;
    height: 92px;
    align-items: center;
    img {
      width: 90px;
      height: 90px;
      border-radius: 45px;
      border: 1px solid #d6d6d6;
    }
    h3 {
      font-weight: normal;
      display: flex;
      align-items: center;
      i{
        display: inline-block;
        margin-left: 10px;
        width: 16px;
        height: 16px;
        border-radius: 16px;
        text-align: center;
        line-height: 16px;
        font-size: 10px;
      }
      .iconfemale2{
        background: #fdcfe8;
        color: #df3d7c;
      }
      .iconmale2 {
        background: #c5f3fd;
        color: #419ecb;
      }
    }
    p {
      margin-top: 10px;
      color: #999999;
    }
  }
</style>
