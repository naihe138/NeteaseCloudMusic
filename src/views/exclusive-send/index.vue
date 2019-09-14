<template>
  <div class="list pagePadding">
    <div class="item">
      <div class="imgbox">
        <img src="@/assest/abc.jpeg" alt="">
      </div>
      <p>阿斯顿发送到发几款</p>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <p>阿斯顿发送到发几款</p>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <p>阿斯顿发送到发几款</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 18px;
    grid-row-gap: 40px;
    .imgbox {
      width: 100%;
      height: 135px;
      border-radius: 4px;
    }
    img {
      width: 100%;
      height: 135px;
      border-radius: 4px;
    }
    p {
      line-height: 30px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>
