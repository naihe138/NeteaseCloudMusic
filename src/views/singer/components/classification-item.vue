<template>
  <div class="item">
    <div class="title">语种：</div>
    <ul class="list">
      <li class="active"><span>全部</span></li>
      <li><span>全部</span></li>
      <li><span>全部</span></li>
      <li><span>全部</span></li>
      <li><span>全部</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'filterItem',
  }
</script>

<style lang="scss">
  .item {
    display: grid;
    grid-template-columns: 45px auto;
    line-height: 30px;
    margin-bottom: 10px;
  }
  .list li {
    display: inline-block;
    padding: 0 24px;
    position: relative;
    color: #666666;
    text-align: center;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 7px;
      width: 1px;
      height: 14px;
      background: #f3f3f3;
    }
    &.active {
      padding: 0 12px;
      span {
        background: #fdf6f6;
        padding: 4px 12px;
        color: #d23e3c;
        border-radius: 12px;
      }
    }
  }
</style>
