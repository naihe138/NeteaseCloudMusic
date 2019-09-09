<template>
  <div class="list pagePadding">
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <h4 class="title">阿瑟阿瑟；大健康；离开家</h4>
        <p>爱丽丝的空间；离开家</p>
        <p>节目：15，订阅：334</p>
      </div>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <h4 class="title">阿瑟阿瑟；大健康；离开家</h4>
        <p class="decs">爱丽丝的空间；离开家</p>
        <p>节目：15，订阅：334</p>
      </div>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <h4 class="title">阿瑟阿瑟；大健康；离开家</h4>
        <p class="decs">爱丽丝的空间；离开家</p>
        <p>节目：15，订阅：334</p>
      </div>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <h4 class="title">阿瑟阿瑟；大健康；离开家</h4>
        <p class="decs">爱丽丝的空间；离开家</p>
        <p>节目：15，订阅：334</p>
      </div>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <h4 class="title">阿瑟阿瑟；大健康；离开家</h4>
        <p class="decs">爱丽丝的空间；离开家</p>
        <p>节目：15，订阅：334</p>
      </div>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <h4 class="title">阿瑟阿瑟；大健康；离开家</h4>
        <p class="decs">爱丽丝的空间；离开家</p>
        <p>节目：15，订阅：334</p>
      </div>
    </div>
    <div class="item">
      <img src="@/assest/abc.jpeg" alt="">
      <div class="content">
        <h4 class="title">阿瑟阿瑟；大健康；离开家</h4>
        <p class="decs">爱丽丝的空间；离开家</p>
        <p>节目：15，订阅：334</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 20px;
  }
  .item {
    display: flex;
    img {
      width: 130px;
      height: 130px;
      border-radius: 4px;
    }
    .content {
      margin-left: 10px;
      .title {
        margin: 20px 0;
      }
      p {
        color: #c0c0c0;
      }
    }
  }
</style>
