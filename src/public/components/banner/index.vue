<template>
  <div class="bannerBox">
    <div class="bannerImg" ref="banner">
      <div class="item" v-for="(item, index) in textArr" :key="index">{{item}}</div>
      <!-- <div class="item">{{s2}}</div>
      <div class="item">{{s3}}</div> -->
    </div>
    <div class="dot">
      <span class="active"></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <i class="iconfont iconchangyongicon-1 btnLeft" @click="prev"></i>
    <i class="iconfont iconchangyongicon- btnRight" @click="next"></i>
  </div>
</template>

<script>
  import config from './config'
  console.log('config', config)
  let innnarr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  export default {
    name: 'Banner',
    data() {
      return {
        index: 0,
        textArr: ['', '', '']
      }
    },
    methods: {
      init () {
        const arr = config.orderArr[this.index]
        let prev = this.index2 - 1
        let next = this.index2 + 1
        if (prev < 0) {
          prev = innnarr.length - 1
        }
        if (next === innnarr.length) {
          next = 0
        }
        this.textArr[arr[0] - 1] = innnarr[prev]
        this.textArr[arr[1] - 1] = innnarr[this.index2]
        this.textArr[arr[2] - 1] = innnarr[next]
        this.textArr = [...this.textArr]
      },
      prev () {
        this.index--
        this.index2++
        this.tab()
      },
      next () {
        this.index++
        this.index2--
        this.tab()
      },
      tab () {
        if (this.index < 0) {
          this.index = 2
        } else if (this.index > 2) {
          this.index = 0
        }

        // ---
        if (this.index2 < 0) {
          this.index2 = 8
        } else if (this.index2 > 8) {
          this.index2 = 0
        }
        // ---
        this.items.forEach((el, j) => {
          let obj = this.styleArr[j][this.index]
          el.style.zIndex = obj.zIndex
          el.style.transform = obj.transform
          el.style.top = obj.top
        })
        this.init()
      }
    },
    created () {
      this.styleArr = [config.tranform1, config.tranform2, config.tranform3]
      this.index2 = 0
    },
    mounted () {
      this.init()
      this.items = this.$refs.banner.querySelectorAll('.item')
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
  .btnLeft {
    position: absolute;
    left: 0;
    top: 78px;
    font-size: 30px;
    cursor: pointer;
  }
  .btnRight {
    position: absolute;
    right: 0;
    top: 78px;
    font-size: 30px;
    cursor: pointer;
  }
</style>
