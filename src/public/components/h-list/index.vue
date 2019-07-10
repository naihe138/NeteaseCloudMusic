<template>
  <section class="hList">
    <div class="item">
      <div class="left itemC">
        <div class="itemContent">
          <a class="thumb">
            <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" alt="">
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
      <div class="right itemC">
        <div class="itemContent">
          <a class="thumb">
            <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" alt="">
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
    </div>
    <div class="item">
      <div class="left itemC">
        <div class="itemContent">
          <a class="thumb">
            <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" alt="">
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
      <div class="right itemC">
        <div class="itemContent">
          <a class="thumb">
            <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" alt="">
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
    </div>
    <div class="item">
      <div class="left itemC">
        <div class="itemContent">
          <a class="thumb">
            <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" alt="">
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
      <div class="right itemC">
        <div class="itemContent">
          <a class="thumb">
            <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" alt="">
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
    </div>
    <div class="item">
      <div class="left itemC">
        <div class="itemContent">
          <a class="thumb">
            <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" alt="">
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
      <div class="right itemC">
        <div class="itemContent">
          <a class="thumb">
            <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" alt="">
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
    </div>
  </section>
</template>


<script>
  import PlayIcon from '../play-icon/index'
  export default {
    name: 'item',
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
  .hList {
    width: 100%;
    box-sizing: border-box;
  }
  .item {
    display: flex;
    justify-content: space-between;
    height: 72px;
    .itemC {
      border-top: 1px solid #f3f3f3;
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .left {
      margin-right: 40px;
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
  }
</style>
