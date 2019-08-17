<template>
  <div class="select">
    <div class="type">
      <span class="active">全部</span>
      <span>华语</span>
      <span>欧美</span>
      <span>韩国</span>
      <span>日本</span>
    </div>
    <div class="btnbox">
      <span class="active"><i class="iconfont iconbofang1"></i>播放全部</span>
      <span><i class="iconfont iconicon--1"></i>收藏全部</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .select {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    height: 30px;
    align-items: center;
    margin-top: 20px;
  }
  .type {
    color: #666666;
    span {
      padding: 0 10px;
      &:nth-of-type(1) {
        padding-left: 0;
      }
      &.active {
        font-weight: 500;
        color: #333;
      }
    }
  }
  .btnbox {
    justify-self: end;
    display: flex;
    height: 28px;
    span {
      display: flex;
      align-items: center;
      border: 1px solid #d9d9d9;
      padding: 4px 10px;
      box-sizing: border-box;
      border-radius: 16px;
      i {
        padding-right: 4px;
      }
      &:nth-of-type(1) {
        margin-right: 10px;
      }
      &.active {
        background: linear-gradient(to right, #f5544e, #d03d3d);
        color: #ffffff;
        border: 0;
      }
    }
  }
</style>
