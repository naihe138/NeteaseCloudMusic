<template>
  <section>
    <header class="SongListHeader">
      <img src="http://s16.sinaimg.cn/middle/6dd206d6g944ccf81736f&690" alt="">
      <div class="headerContent">
        <div class="title"><i class="iconfont iconhuangguan"></i>精品歌单</div>
        <div class="descript">
          <h3>《时间简史》</h3>
          <p>尝尝新口味，是时候了解一下log音乐了</p>
        </div>
      </div>
    </header>
    <div class="allSongSort">
      <div class="allbtn">全部歌单<i class="iconfont iconchangyongicon-"></i></div>
      <ul class="sortList">
        <li>华语</li>
        <li>流行</li>
        <li>摇滚</li>
        <li>民谣</li>
        <li>电子</li>
        <li>轻音乐</li>
        <li>影视原声</li>
        <li>ACG</li>
        <li>怀旧</li>
        <li>治愈</li>
      </ul>
    </div>
    <List />
  </section>
</template>

<script>
  import List from './list/index'
  export default {
    name: 'SongList',
    components: {
      List
    }
  }
</script>

<style lang="scss" scoped>
  .SongListHeader {
    width: 100%;
    height: 170px;
    display: flex;
    align-items: center;
    background: linear-gradient(45deg, #85909c , #857b77, #89919a);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 0 15px;
    img {
      width: 140px;
      height: 140px;
      border-radius: 4px;
    }
    .headerContent {
      margin-left: 10px;
      .title {
        border-radius: 24px;
        border: 1px solid #e5a867;
        color: #e5a867;
        text-align: center;
        width: 110px;
        height: 32px;
        line-height: 30px;
        cursor: default;
        i {
          padding-right: 5px;
        }
      }
      .descript {
        margin-top: 20px;
        h3 {
          color: #ffffff;
        }
        p {
          color: #c3b8b1;
          padding-top: 8px;
        }
      }
    }
  }
  .allSongSort {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    .allbtn {
      height: 32px;
      width: 100px;
      border: 1px solid #d9d9d9;
      border-radius: 30px;
      color: #333333;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      i {
        color: #333333;
      }
    }
    .sortList {
      display: flex;
      li {
        padding: 0 15px;
        position: relative;
        cursor: pointer;
      }
      li:after{
        content: "";
        position: absolute;
        width: 1px;
        height: 16px;
        background: #e0e0e0;
        top: 0;
        right: 0;
      }
      li:nth-last-of-type(1) {
        &::after {
          display: none
        }
      }
    }
  }
</style>

