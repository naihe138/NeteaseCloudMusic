<template>
  <div class="comment">
    <CommentInput />
  </div>
</template>

<script>
  import CommentInput from '@/public/components/comment/input.vue'
  export default {
    components: {
      CommentInput
    }
  }
</script>

<style lang="scss" scoped>
  .comment {
    margin: 10px 20px 20px 30px;
  }
</style>
