<template>
  <section>
    <Tab :options="tabOptions">
      <template v-slot:default="slotProps">
        <List v-show="slotProps.show === 0" />
        <Comment v-show="slotProps.show === 1" />
        <Subscriber v-show="slotProps.show === 2" />
      </template>
    </Tab>
  </section>
</template>

<script>
  import Tab from '@/public/components/tab'
  import List from './list'
  import Comment from './comment'
  import Subscriber from '@/public/components/subscriber'
  export default {
    components: {
      Tab,
      List,
      Comment,
      Subscriber
    },
    data () {
      return {
        tabOptions: [
          {
            text: '歌曲列表',
            num: ''
          },
          {
            text: '评论',
            num: ''
          },
          {
            text: '收藏者',
            num: ''
          }
        ]
      }
    }
  }
</script>
