<template>
  <section>
    <DHeader />
    <Content />
  </section>
</template>

<script>
  import DHeader from '@/public/components/detail-header'
  import Content from './components/detail/content'
  export default {
    components: {
      DHeader,
      Content
    }
  }
</script>
