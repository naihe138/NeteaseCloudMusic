<template>
  <div>
    <div class="inputwrap">
      <div class="inputbox">
        <div contenteditable="true" class="textarea" @input="handleInput"></div>
        <div class="textCount">{{count}}</div>
      </div>
    </div>
    <div class="submit">
      <div class="iconbox">
        <i class="iconfont iconbiaoqing"></i>
        <i class="iconfont iconat"></i>
        <i class="iconfont iconiconjing"></i>
      </div>
      <div class="btn">评论</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      this.TEXT_COUNT = 140
      return {
        count: this.TEXT_COUNT
      }
    },
    methods: {
      handleInput (e) {
        this.count = this.TEXT_COUNT - e.target.innerText.length
      }
    }
  }
</script>

<style lang="scss" scoped>
  .inputwrap {
    height: 60px;
    border: 1px solid #e6e6e6;
    overflow: hidden;
    border-radius: 4px;
    padding: 5px 0;
  }
  .inputbox {
    width: 100%;
    box-sizing: border-box;
    height: 60px;
    position: relative;
    overflow-x: hidden;
    overflow: auto;
    display: grid;
    grid-template-columns: auto 30px;
    &::-webkit-scrollbar-track {
      background-color: #FFF;
    }
    &::-webkit-scrollbar {
      width: 8px;
      background-color: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #e1e1e1;
      border-radius: 6px;
    }
    .textarea {
      resize: none;
      outline: none;
      margin: 0;
      box-sizing: border-box;
      padding-left: 10px;
      word-break: break-all;
      word-wrap: break-word;
    }
    .textCount {
      width: 30px;
      position: sticky;
      height: 56px;
      top: 1px;
      display: flex;
      align-items: flex-end;
      color: #cccccc;
    }
  }
  .submit {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .iconbox {
      i {
        color: #666666;
        margin-right: 10px;
      }
    }
    .btn {
      border: 1px solid #d9d9d9;
      padding: 4px 12px;
      border-radius: 16px;
    }
  }
</style>
