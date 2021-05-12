<template>
  <video autoplay loop width="250">
    <source src="../../static/06-hc-sq.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
  </video>
</template>

<script lang="ts">
  export default {
    name: 'VideoEmbed'
  }

</script>

<style scoped>
  video {
    border-radius: 50%;
    width: 100%;
    height: auto;
  }
</style>
