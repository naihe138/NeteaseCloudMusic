<template>
  <section>
    <div class="tabHeader">
      <span v-for="(item, index) in options"
        :key="'a-' + index"
        :class="show === index ? 'active' : ''"
        @click="tabClick(index)">
        {{item.text}}<i v-if="item.num">({{item.num}})</i>
      </span>
    </div>
    <div class="tabContent">
      <slot v-bind:show="show"></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Tab',
    props: {
      options: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        show: 0
      }
    },
    methods: {
      tabClick (num) {
        this.show = num
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabHeader {
    border-bottom: 1px solid #f3f3f3;
    height: 32px;
    box-sizing: border-box;
    margin: 0 20px 0 30px;
    line-height: 32px;
    span {
      display: inline-block;
      margin-right: 30px;
      font-size: 14px;
      position: relative;
      height: 30px;
    }
    .active{
      color: #cf3d3c;
      i {
        color: #cf3d3c;
      }
    }
    .active::after {
      content: "";
      width: 100%;
      height: 2px;
      background: #cf3d3c;
      position: absolute;
      bottom: -2px;
      left: 0;
    }
    i {
      color: #666666;
    }
  }
</style>
