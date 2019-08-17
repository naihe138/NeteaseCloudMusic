<template>
  <div class="item">
    <div class="itemContent">
      <a class="thumb">
        <img src="@/assest/abc.jpeg" alt="">
        <div class="iconbox"><PlayIcon /></div>
      </a>
      <span class="itemIndex">01</span>
      <p class="song">
        <span class="title">那就这样子吧</span>
        <span class="name"><i class="iconfont iconsq"></i>何文丽</span>
      </p>
    </div>
    <i class="iconfont iconshipin toPlay"></i>
  </div>
</template>


<script>
  import PlayIcon from 'public/components/play-icon/index'
  export default {
    name: 'NewMusicItem',
    components: {
      PlayIcon
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .item {
    height: 74px;
    border-top: 1px solid #f3f3f3;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-left: 10px;
    transition: background 0.3s;
    &:hover {
      background: #f5f5f5;
    }
  }
  .itemContent {
    display: flex;
    justify-content: center;
    align-items: center;
    .thumb {
      width: 60px;
      height: 60px;
      position: relative;
      overflow: hidden;
      border-radius: 4px;
      img {
        width: 60px;
        height: 60px;
      }
      .iconbox {
        position: absolute;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        top: 0;
      }
    }
    .itemIndex {
      padding: 0 20px;
      color: #c0c0c0;
    }
    .song {
      span {
        display: block;
      }
      .name {
        display: flex;
        align-items: center;
        line-height: 12px;
        margin-top: 10px;
        color: #666666;
        i {
          color: #fb6839;
        }
      }
    }
  }
  .toPlay {
    color: #d13c37;
    padding-right: 10px;
  }
</style>
