<template>
  <section>
    <Tab :options="tabOptions">
      <template v-slot:default="slotProps">
        <Show v-show="slotProps.show === 0" />
        <Subscriber v-show="slotProps.show === 1" />
      </template>
    </Tab>
  </section>
</template>

<script>
  import Tab from '@/public/components/tab'
  import Show from './show'
  import Subscriber from '@/public/components/subscriber'
  export default {
    components: {
      Tab,
      Show,
      Subscriber
    },
    data () {
      return {
        tabOptions: [
          {
            text: '节目',
            num: '111'
          },
          {
            text: '订阅者',
            num: '111'
          }
        ]
      }
    }
  }
</script>
