<template>
  <div class="comment">
    <CommentInput />
    <h2 class="title">精彩评论</h2>
    <CommentList />
  </div>
</template>

<script>
  import CommentInput from '@/public/components/comment/input.vue'
  import CommentList from '@/public/components/comment/list.vue'
  export default {
    components: {
      CommentInput,
      CommentList
    }
  }
</script>

<style lang="scss" scoped>
  .comment {
    margin: 10px 20px 20px 30px;
  }
  .title {
    font-size: 13px;
    margin-top: 30px;
  }
</style>
