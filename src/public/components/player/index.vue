<template>
  <section class="player-box">
    <Player />
    <PlayerInfo />
  </section>
</template>

<script>
  import Player from './player'
  import PlayerInfo from './player-info'
  export default {
    components: {
      Player,
      PlayerInfo
    }
  }
</script>