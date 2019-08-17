<template>
  <div class="item">
    <div class="imagebox">
      <span class="count"><i class="iconfont iconhuobao"></i>123123</span>
      <img src="@/assest/abc.jpeg" />
      <div class="itemFooter">
        <div class="left">
          <i class="iconfont iconrenwu"></i>我叫何文丽何文丽
        </div>
      </div>
    </div>
    <p class="title">别整太大压力，要多自己自己大压力，要多自己自己</p>
  </div>
</template>

<script>
  export default {
    name: 'LookItem',
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
    // margin-right: 10px;
    height: 300px;
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    // &:nth-of-type(4) {
    //   margin-right: 0;
    // }
  }
  .imagebox {
    width: 100%;
    height: 232px;
    position: relative;
    color: #ffffff;
    border-radius: 4px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    .count {
      position: absolute;
      width: 100%;
      left: 0;
      top: 4px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 8px;
      box-sizing: border-box;
      i{
        font-size: 12px;
      }
    }
    .itemFooter {
      position: absolute;
      width: 100%;
      bottom: 4px;
      left: 0;
      .left {
        width: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: 4px;
      }
    }

  }
  .title {
    margin-top: 8px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
</style>
