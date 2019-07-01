<template>
  <div class="bannerBox">
    <div class="bannerImg">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
    <div class="dot">
      <span class="active"></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
  import config from './config'
  export default {
    name: 'Banner',
    data() {
      return {
        index: 0
      }
    },
    methods: {

    },
    created () {
      this.styleArr = [config.transform1, config.transform2, config.transform3]
    }
  }
</script>

<style lang="scss" scoped>
  .bannerBox {
    border: 1px solid black;
    position: relative;
  }
  .bannerImg {
    width: 748px;
    height: 210px;
    position: relative;
    perspective: 800px;
    transform-style: preserve-3d;
    transform-origin: center center;
  }
  .item {
    width: 440px;
    height: 164px;
    position: absolute;
    color: #ffffff;
    font-size: 100px;
    text-align: center;
    line-height: 164px;
    transition: 0.5s;
    border-radius: 4px;
  }
  .bannerImg .item:nth-of-type(1){
    background: gold;
    left: 154px;
    z-index: 3;
    transform: translateZ(150px);
    top: 22px;
  }
  .bannerImg .item:nth-of-type(2){
    background: cadetblue;
    left: 0;
    z-index: 1;
    transform: translateZ(0px);
    top: 18px;
  }
  .bannerImg .item:nth-of-type(3){
    background: salmon;
    right: 0;
    z-index: 1;
    transform: translateZ(0px);
    top: 18px;
  }
  .dot {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
    span{
      width: 6px;
      height: 6px;
      background: #e6e6e6;
      border-radius: 4px;
      margin-left: 10px;
    }
    span.active{
      background: #d13c37
    }
  }
</style>
