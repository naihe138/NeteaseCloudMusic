<template>
  <div class="list">
    <div class="header layout">
      <div></div>
      <div>音乐标题</div>
      <div>歌手</div>
      <div>专辑</div>
      <div>时长</div>
    </div>
    <ol class="body">
      <li class="item layout" v-for="item in 20" :key="`q${item}`">
        <div class="index">
          <span class="itext">01</span>
          <i class="iconfont iconlike"></i>
          <i class="iconfont iconxiazai"></i>
        </div>
        <div class="title">
          <span class="ttext">倔强</span>
          <i class="iconfont iconsq"></i>
          <i class="iconfont iconshipin"></i>
          <i class="iconfont iconshenglvehao"></i>
        </div>
        <div class="singger">五月天</div>
        <div class="album">神的孩子都在爱跳舞</div>
        <div class="time">09:90</div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: 10
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    margin: 0 2px;
  }
  .header {
    color: #999999;
  }
  .textOverflow {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .layout {
    display: grid;
    grid-template-columns: 110px auto 140px 188px 66px;
    height: 36px;
    align-items: center;
    align-items: center;
  }
  .item {
    &:nth-of-type(2n - 1) {
      background: #fafafa;
    }
    &:hover {
      background: #f2f2f2;
    }
    &:hover .title .iconshenglvehao {
      visibility: visible
    }
    .index {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      overflow: hidden;
      .itext {
        margin-left: 30px;
        margin-right: 15px;
        color: #bcbcbc;
      }
      .iconfont {
        color: #969696;
      }
      .iconlike {
        margin-right: 6px;
      }
    }
    .title {
      overflow: hidden;
      display: flex;
      align-items: center;
      .ttext {
        max-width: calc(100% - 70px);
        @extend .textOverflow;
      }
      .iconsq {
        color: #f96942;
        margin-left: 2px;
      }
      .iconshipin {
        color: #cf3d3c;
        margin: 0 2px;
      }
      .iconshenglvehao {
        color: #646464;
        visibility: hidden;
      }
    }
    .time {
      color: #bcbcbc;
    }
    .singger, .album {
      color: #646464;
      @extend .textOverflow;
    }
  }
</style>
