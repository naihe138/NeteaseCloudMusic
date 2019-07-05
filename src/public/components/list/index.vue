<template>
  <div class="list">
    <div>
      
    </div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</template>

<style lang="scss" scoped>
  .list {
    display: flex;
    div {
      margin-right: 10px;
      height: 184px;
      flex: 1;
      border: 1px solid red;
      box-sizing: border-box;
      border-radius: 4px;
      overflow: hidden;
      position: relative;
      &:nth-of-type(5) {
        margin-right: 0;
      }
    }
  }
</style>
