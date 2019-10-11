<template>
  <section class="player">
    <div class="play-move">
      <img class="control" src="@/assest/images/play-off.png" />
      <div class="move">
        <div class="moveWrap">
          <div class="mask"></div>
          <img src="@/assest/abc.jpeg" alt="">
        </div>
      </div>
      <div class="btn-box">
        <span><i class="iconfont iconlike"></i></span>
        <span><i class="iconfont iconicon--1"></i></span>
        <span><i class="iconfont iconxiazai"></i></span>
        <span><i class="iconfont iconfenxiang"></i></span>
      </div>
    </div>
    <div class="lyrics">
      123123
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .player {
    display: flex;
  }
  .play-move {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 79px 330px 68px;
    .control {
      width: 183px;
      height: 79px;
      margin-left: 236px;
      transform-origin: left top;
    }
    .move {
      width: 330px;
      height: 330px;
      justify-self: center;
      box-sizing: border-box;
      border: 5px solid #ebeaeb;
      border-radius: 50%;
      // overflow: hidden;
    }
    .moveWrap {
      width: 320px;
      height: 320px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 320px;
        height: 320px;
        background-image: url(../../../assest/images/player-secle.png);
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 2;
      }
      img {
        width: 216px;
        height: 216px;
      }
    }
    .btn-box {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      span {
        width: 40px;
        height: 40px;
        background: #f0eff0;
        text-align: center;
        line-height: 40px;
        border-radius: 20px;
        margin: 0 20px;
        i {
          color: #565656;
          font-size: 16px;
        }
      }
    }
  }
  .lyrics {
    flex: 1;
  }
</style>