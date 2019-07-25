<template>
  <div class="category">
    <div class="left btn"><i class="iconfont iconchangyongicon-1"></i></div>
    <div class="listbox">
      <ul class="list">
        <li v-for="item in list" :key="item.icon">
          <p class="icon"><i :class="'iconfont ' + item.icon"></i></p>
          <p class="title">{{item.title}}</p>
        </li>
      </ul>
    </div>
    <div class="right btn"><i class="iconfont iconchangyongicon-"></i></div>
  </div>
</template>

<script>
  export default {
    name: 'category',
    data () {
      return {
        list: [
          {
            icon: 'icon_huabanfuben',
            title: '排行榜',
            id: '1'
          },
          {
            icon: 'iconhuatong',
            title: '创作|翻唱',
            id: '1'
          },
          {
            icon: 'icon05',
            title: '3D|电子',
            id: '1'
          },
          {
            icon: 'iconHappy-Wink',
            title: '情感调频',
            id: '1'
          },
          {
            icon: 'iconyinle1',
            title: '音乐故事',
            id: '1'
          },
          {
            icon: 'iconcaimibiaoqing',
            title: '二次元',
            id: '1'
          },
          {
            icon: 'icondictionary',
            title: '有声书',
            id: '1'
          },
          {
            icon: 'iconpoint',
            title: '知识技能',
            id: '1'
          },
          {
            icon: 'iconhuiyuanfazhanqushi',
            title: '商业财经',
            id: '1'
          },
          {
            icon: 'iconlishi',
            title: '人文历史',
            id: '1'
          },
          {
            icon: 'iconabcsousuocixiangqing',
            title: '外语世界',
            id: '1'
          },
          {
            icon: 'iconqinzi',
            title: '亲子宝贝',
            id: '1'
          },
          {
            icon: 'iconshanzi',
            title: '相声曲艺',
            id: '1'
          },
          {
            icon: 'iconshuben',
            title: '美文阅读',
            id: '1'
          },
          {
            icon: 'iconhuapimianju1',
            title: '脱口秀',
            id: '1'
          },
          {
            icon: 'iconicon--',
            title: '广播剧',
            id: '1'
          },
          {
            icon: 'iconmingxinganli',
            title: '明星做主播',
            id: '1'
          },
          {
            icon: 'iconxingxing',
            title: '娱乐|影视',
            id: '1'
          },
          {
            icon: 'icondiqiu',
            title: '科技科学',
            id: '1'
          },
          {
            icon: 'iconeducation_icon',
            title: '校园教育',
            id: '1'
          },
          {
            icon: 'iconfeiji',
            title: '路途城市',
            id: '1'
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .category {
    height: 100px;
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
  }
  .btn {
    width: 30px;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
    i {
      font-size: 30px;
      color: #d7d7d7;
    }
  }
  .listbox {
    height: 80px;
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  .list {
    height: 80px;
    display: flex;
    // overflow: hidden;
    li {
      height: 80px;
      width: 60px;
      text-align: center;
      margin: 0 15px;
      &:nth-of-type(1) {
        margin-left: 0;
      }
      .icon {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background: #fdf6f6;
        text-align: center;
        line-height: 50px;
        margin-left: 5px;
        i {
          color: #cf3d3c;
          font-size: 20px;
        }
      }
      .title {
        width: 60px;
        line-height: 32px;
        color: #666666;
      }
    }
  }
</style>
