<template>
  <section class="header">
    <div class="opertate">
      <div class="window-opertate">
        <div class="dog close">
          <span></span>
          <span></span>
        </div>
        <div class="dog minimize">
          <span></span>
        </div>
        <div class="dog maximize">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="nav">
      <span class="active">个性推荐</span>
      <span>歌单</span>
      <span>主播电台</span>
      <span>排行榜</span>
      <span>歌手</span>
      <span>最新音乐</span>
    </div>
    <div class="serch">
      <i class="iconfont icona"></i>
      <input type="text" placeholder="搜索" v-model="searchStr">
      <span class="iconfont iconguanbi" v-show="showClear" @click="toClear"></span>
    </div>
    <div class="setup">
      <i class="iconfont iconshezhi"></i>
      <i class="iconfont iconyoujian"></i>
      <i class="iconfont iconpifu"></i>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Mheander',
    data () {
      return {
        searchStr: ''
      }
    },
    computed: {
      showClear () {
        return this.searchStr.length > 0
      }
    },
    methods: {
      toClear () {
        this.searchStr = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    height: 50px;
    background: #d6584c;
    display: flex;
  }
  .window-opertate {
    display: flex;
    width: 70px;
    height: 20px;
    margin-top: 14px;
    margin-left: 10px;
  }
  .opertate {
    width: 200px;
    display: flex;
    .dog {
      width: 13px;
      height: 13px;
      background: red;
      border-radius: 10px;
      position: relative;
      margin-left: 8px;
      span {
        display: none;
        background: #000000;
         position: absolute;
         &:nth-of-type(1) {
          width: 9px;
          height: 1px;
          left: 2px;
          top: 6px;
        }
        &:nth-of-type(2) {
          width: 1px;
          height: 9px;
          left: 6px;
          top: 2px;
        }
      }
      &:hover span {
        display: block;
      }
    }
    .close {
      background: #fc605c;
      transform: rotate(45deg);
    }
    .minimize {
      background: #fdbc40
    }
    .maximize {
      background: #33c849
    }
  }
  .nav {
    height: 24px;
    display: flex;
    align-items: center;
    color: #f0c2c0;
    margin-top: 16px;
    padding-left: 30px;
    span{
      margin-right: 30px;
      user-select: none;
      font-size: 14px;
      transition: color 0.3s;
      &.active {
        font-weight: 500;
        color: #ffffff;
      }
      &:hover {
        font-weight: 500;
        color: #ffffff;
      }
    }
  }
  .serch {
    height: 24px;
    display: flex;
    align-items: center;
    color: #f0c2c0;
    margin-top: 16px;
    padding-left: 30px;
    width: 150px;
    position: relative;
    input {
      display: block;
      width: 150px;
      height: 24px;
      border: 0;
      outline: none;
      background: #db6965;
      color: #f7dfde;
      border-radius: 12px;
      box-sizing: border-box;
      padding-left: 25px;
      padding-right: 16px;
    }
    i {
      position: absolute;
      color: #edb3b1;
      left: 36px;
      font-size: 12px;
    }
    span {
      position: absolute;
      color: #edb3b1;
      right: 6px;
      font-size: 12px;
    }
    ::placeholder {
      color: #e69693;
    }
  }
  .setup {
    height: 24px;
    display: flex;
    align-items: center;
    margin-top: 16px;
    padding-left: 20px;
    position: relative;
    .iconshezhi {
      font-size: 21px;
    }
    i {
      margin-right: 10px;
      color: #f0c2c0;
    }
  }
</style>
