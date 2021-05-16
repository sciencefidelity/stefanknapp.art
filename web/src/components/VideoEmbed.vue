<template>
  <video
    autoplay
    loop
    muted
    playsinline
    :class="classname"
  >
    <source type="video/mp4" src="../../static/06-hc-sq.mp4" />
    <source type="video/webm" src="../../static/06-hc-sq.webm" />
    <picture>
      <source srcset="../../static/06-hc-sq.webp" type="image/webp">
      <source srcset="../../static/06-hc-sq.jpg" type="image/jpeg">
      <img
        src="../../static/06-hc-sq.jpg"
        title="Sorry, your browser doesn't support embedded videos" />
    </picture>
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
