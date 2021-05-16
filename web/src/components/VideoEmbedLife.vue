<template>
  <video
    autoplay
    loop
    muted
    playsinline
    :class="classname"
  >
    <source type="video/mp4" src="../../static/09-hc.mp4" />
    Sorry, your browser doesn't support embedded videos.
  </video>
</template>

<script lang="ts">
export default {
  name: 'VideoEmbed',
  props: {
    video: String,
    classname: {
      type: String,
      default: 'video-embed',
    },
  },
}

</script>
