<template>
  <ul class="list">
    <li class="item">
      <div class="num">01</div>
      <div class="imgbox">
        <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" alt="">
        <PlayIcon class="icon" />
      </div>
      <div class="title">奥术大师大所多<i class="iconfont iconsq"></i></div>
      <div class="auther">最萌阿达来上课最萌阿达来上课最萌阿达来上课最萌阿达来上课</div>
      <div class="album">最萌阿达来上课最萌阿达来上课最萌阿达来上课最萌阿达来上课</div>
      <div class="time">01:23</div>
    </li>
  </ul>
</template>

<script>
  import PlayIcon from 'public/components/play-icon/index.vue'
  export default {
    components: {
      PlayIcon
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    padding: 0 2px;
    li:nth-of-type(2n-1) {
      background: #fafafa;
    }
  }
  .item {
    height: 80px;
    padding: 0 18px 0 28px;
    box-sizing: border-box;
    overflow: hidden;
    display: grid;
    grid-template-columns: 34px 60px auto 128px 150px 75px;
    align-items: center;
    .num {
      color: #bcbcbc;
    }
    .imgbox {
      width: 60px;
      height: 60px;
      border-radius: 4px;
      position: relative;
      overflow: hidden;
      img {
        width: 60px;
        height: 60px;
      }
      .icon {
        position: absolute;
        left: 16px;
        top: 16px;
      }
    }
    .title {
      padding-left: 10px;
      i {
        color: #f96942;
      }
    }
    .auther, .album {
      color: #646464;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .time {
      color: #96969a;
      text-align: right;
    }
  }
</style>
