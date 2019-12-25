<template>
  <div class="player-info">
    <Comment />
    <InfoList />
  </div>
</template>

<script>
  import Comment from './comment'
  import InfoList from './info-list'
  export default {
    components: { Comment, InfoList }
  }
</script>

<style lang="scss" scoped>
  .player-info {
    margin-top: 30px;
    padding-left: 30px;
    display: grid;
    grid-template-columns: 570px 272px;
    grid-column-gap: 47px;
  }
</style>
