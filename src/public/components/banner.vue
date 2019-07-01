<template>
  <div class="bannerBox">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
</template>

<script>
  export default {
    name: 'Banner'
  }
</script>

<style lang="scss" scoped>
  .bannerBox {
    width: 740px;
    height: 250px;
    border: 1px solid black;
    position: relative;
    perspective: 800px;
    transform-style: preserve-3d;
    padding-top: 20px;
  }
  .item {
    width: 500px;
    height: 182px;
    position: absolute;
    color: #ffffff;
    font-size: 100px;
    text-align: center;
    line-height: 200px;
    transition: 0.5s;
  }
  .bannerBox .item:nth-of-type(1){
    background: gold;
    left: 100px;
    z-index: 3;
    transform: translateZ(100px)
  }
  .bannerBox .item:nth-of-type(2){
    background: cadetblue;
    left: 0;
    z-index: 1;
    // transform: translateZ(-100px)
  }
  .bannerBox .item:nth-of-type(3){
    background: salmon;
    right: 0;
    z-index: 1;
    // transform: translateZ(-100px)
  }
</style>
