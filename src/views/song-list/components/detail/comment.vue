<template>
  <div class="comment">
    <div class="inputwrap">
      <div class="inputbox">
        <div contenteditable="true" class="textarea"></div>
        <div class="textCount">140</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .comment {
    margin: 10px 20px 20px 30px;
  }
  .inputwrap {
    height: 60px;
    border: 1px solid #e6e6e6;
    overflow: hidden;
    border-radius: 4px;
    padding: 5px 0;
  }
  .inputbox {
    width: 100%;
    // border: 1px solid #e6e6e6;
    box-sizing: border-box;
    height: 60px;
    position: relative;
    overflow-x: hidden;
    overflow: auto;
    display: grid;
    grid-template-columns: auto 32px;
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
      width: 32px;
      position: sticky;
      height: 56px;
      top: 1px;
      display: flex;
      align-items: flex-end;
      color: #cccccc;
    }
  }
</style>
