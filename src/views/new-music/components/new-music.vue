<template>
  <ul class="list">
    <li class="item">
      <div class="num">01</div>
      <div class="imgbox">
        <img src="@/assest/abc.jpeg" alt="">
        <PlayIcon class="icon" />
      </div>
      <div class="title">
        <span class="tc">奥术大师大所多奥术奥术奥术大师大所多奥术奥术奥术大师大所多奥术奥术</span>
        <span class="ci">
          <i class="iconfont iconsq"></i>
          <i class="iconfont iconshenglvehao"></i>
        </span>
      </div>
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
      max-width: 400px;
      display: flex;
      overflow: hidden;
      .tc {
        max-width: calc(100% - 40px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .iconsq {
        color: #f96942;
      }
      .iconshenglvehao {
        color: #999999
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
