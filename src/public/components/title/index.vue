<template functional>
  <div class="title">{{props.title}}<i v-if="!props.arrow" class="iconfont iconchangyongicon-"></i></div>
</template>

<style lang="scss" scoped>
  .title {
    font-size: 16px;
    font-weight: 400;
    padding: 10px 0;
    display: flex;
    align-items: center;
    color: #333333;
    cursor: pointer;
  }
</style>
