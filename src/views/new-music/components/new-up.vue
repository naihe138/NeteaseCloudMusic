<template>
  <div class="newup">
    <div class="date">
      <div class="dt" style="height: 990px">
        <span class="first">本周<br/>新碟</span>
      </div>
      <div class="dt">
        <p class="month">08</p>
        <p class="year">2019</p>
      </div>
    </div>
    <div class="content">
      <div class="item" v-for="item in 30" :key="item">
        <img src="@/assest/abc.jpeg" alt="">
        <p class="title">爱上了贷款</p>
        <p class="dec">阿斯蒂芬斯蒂芬；离开</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .newup {
    display: flex;
    padding: 0px 20px 20px 30px;
  }
  .date {
    width: 60px;
    .dt {
      position: sticky;
      top: 0px;
      .first {
        font-size: 16px;
        font-weight: 500;
      }
      .month {
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
  .content {
    flex: 1;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 18px;
    grid-row-gap: 18px;
    .item {
      overflow: hidden;
      border-radius: 4px;
    }
    img {
      width: 100%;
      height: 130px;
      border-radius: 4px;
    }
    .title, .dec {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-top: 6px;
    }
    .dec {
      color: #999999;
    }
  }

</style>
