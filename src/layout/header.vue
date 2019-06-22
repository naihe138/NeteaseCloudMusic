<template>
  <section class="header">
    <div class="opertate">
      <div class="dog close">
        <span></span>
        <span></span>
      </div>
      <div class="dog minimize">
        <span></span>
      </div>
      <div class="dog maximize">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="nav"></div>
    <div class="serch"></div>
    <div class="setup"></div>
  </section>
</template>

<script>
  export default {
    name: 'Mheander'
  }
</script>

<style lang="scss" scoped>
  .header {
    height: 50px;
    background: #d54f4a;
    display: flex;
  }
  .opertate {
    width: 200px;
    display: flex;
    .dog {
      width: 12px;
      height: 12px;
      background: red;
      border-radius: 10px;
      position: relative;
      cursor: pointer;
      margin-left: 8px;
      span {
        display: none;
        background: #000000;
         position: absolute;
         &:nth-of-type(1) {
          width: 9px;
          height: 1px;
          left: 1px;
          top: 5px;
        }
        &:nth-of-type(2) {
          width: 1px;
          height: 9px;
          left: 5px;
          top: 1px;
        }
      }
      &:hover span {
        display: block;
      }
    }
    .close {
      background: #fc605c;
      transform: rotate(45deg);
    }
    .minimize {
      background: #fdbc40
    }
    .maximize {
      background: #33c849
    }
  }
</style>
