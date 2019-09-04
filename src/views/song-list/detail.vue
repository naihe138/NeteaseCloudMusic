<template>
  <section class="songDtail">
    <div class="fixedTop" v-show="showTop">
      <div class="fixedTopContent">
        <h2>阿萨德奥术大师多</h2>
        <div class="topicon">
          <i class="iconfont iconbofang1"></i>
          <i class="iconfont iconicon--1"></i>
          <i class="iconfont iconfenxiang"></i>
          <i class="iconfont iconxiazai"></i>
        </div>
      </div>
    </div>
    <DHeader />
    <Content />
  </section>
</template>

<script>
  import DHeader from '@/public/components/detail-header'
  import Content from './components/detail/content'
  export default {
    components: {
      DHeader,
      Content
    },
    data () {
      return {
        showTop: false
      }
    },
    mounted () {
      this.$bus.on('scroll', e => {
        this.showTop = e.target.scrollTop > 160
      })
    }
  }
</script>

<style lang="scss" scoped>
  .songDtail {
    position: relative;
  }
  .fixedTop {
    position: sticky;
    top: 0;
    left: 0;
    height: 80px;
    border-bottom: 1px solid #e6e6e6;
    z-index: 10;
    width: 100%;
    background: #ffffff;
    .fixedTopContent {
      padding-left: 30px;
      h2 {
        line-height: 45px;
        font-size: 21px;
      }
      .topicon {
        display: flex;
        align-items: center;
        margin-top: 8px;
        i {
          font-size: 18px;
          margin-right: 15px;
          color: #666666;
        }
        .iconbofang1 {
          color: #f0514d;
        }
      }
    }
  }
</style>
