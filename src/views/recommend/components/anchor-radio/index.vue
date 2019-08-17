<template>
  <section class="hList">
    <div class="item">
      <div class="left itemC">
        <div class="itemContent">
          <img class="thumb" src="@/assest/abc.jpeg" alt="">
          <p class="song">
            <span class="title">那就这样子吧</span>
            <span class="name">何文丽</span>
          </p>
        </div>
      </div>
      <div class="right itemC">
        <div class="itemContent">
          <img class="thumb" src="@/assest/abc.jpeg" alt="">
          <p class="song">
            <span class="title">那就这样子吧</span>
            <span class="name">何文丽</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    name: 'AnchorRadio',
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
    height: 110px;
    &:nth-last-of-type(1) {
      .itemC {
        border-bottom: 1px solid #f3f3f3;
      }
    }
    .itemC {
      border-top: 1px solid #f3f3f3;
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding-left: 10px;
      &:hover {
        background: #f5f5f5;
      }
    }
    .left {
      margin-right: 40px;
    }
    .itemContent {
      display: flex;
      justify-content: center;
      align-items: center;
      .thumb {
        width: 90px;
        height: 90px;
        position: relative;
        overflow: hidden;
        border-radius: 4px;
      }
      .song {
        margin-left: 20px;
        span {
          display: block;
        }
        .name {
          display: flex;
          align-items: center;
          line-height: 12px;
          margin-top: 10px;
          color: #666666;
        }
      }
    }
  }
</style>
