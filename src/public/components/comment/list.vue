<template>
  <ol class="commentList">
    <li class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <p class="text">
          <span class="name">一醉解千愁:</span>阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德
        </p>
        <div class="info">
          <div class="time"><span>昨天</span><span>19:18</span></div>
          <div class="oparations">
            <span class="jubao">举报</span><mark class="jubao-mark">|</mark>
            <span class="zan"><i class="iconfont iconzan"></i>123</span><mark>|</mark>
            <span class="shear"><i class="iconfont iconfenxiang"></i></span><mark>|</mark>
            <span class="msg"><i class="iconfont iconxiao_xi"></i></span>
          </div>
        </div>
      </div>
    </li>
    <li class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <p class="text">
          <span class="name">一醉解千愁:</span>阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德
        </p>
        <div class="info">
          <div class="time"><span>昨天</span><span>19:18</span></div>
          <div class="oparations">
            <span class="jubao">举报</span><mark class="jubao-mark">|</mark>
            <span class="zan"><i class="iconfont iconzan"></i>123</span><mark>|</mark>
            <span class="shear"><i class="iconfont iconfenxiang"></i></span><mark>|</mark>
            <span class="msg"><i class="iconfont iconxiao_xi"></i></span>
          </div>
        </div>
      </div>
    </li>
  </ol>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .commentList {
    .item {
      display: grid;
      grid-template-columns: 35px auto;
      grid-column-gap: 10px;
      margin-top: 20px;
      &:hover .content .oparations .jubao{
        visibility: visible
      }
      &:hover .content .oparations .jubao-mark {
        visibility: visible
      }
      img {
        width: 34px;
        height: 34px;
        border-radius: 50%;
      }
      .content {
        overflow: hidden;
        border-bottom: 1px solid #f3f3f3;
        padding-bottom: 20px;
        .name {
          color: #547fab;
        }
        .info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }
        .oparations {
          span {
            padding: 0 10px;
          }
          .jubao {
            color: #999999;
            visibility: hidden;
          }
          .jubao-mark {
            visibility: hidden;
          }
          .zan {
            color: #666666;
          }
          mark {
            background: #fff;
            color: #f3f3f3
          }
          i{
            font-size: 12px;
            color: #999999;
          }
          .iconfenxiang {
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
