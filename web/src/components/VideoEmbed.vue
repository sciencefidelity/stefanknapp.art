<template>
  <video
    autoplay
    loop
    muted
    playsinline
    :class="classname"
  >
    <source type="video/mp4" src="../../static/03-hc.mp4" />
    <source type="video/webm" src="../../static/03-hc.webm" />
    <picture>
      <source srcset="../../static/03-hc.webp" type="image/webp">
      <source srcset="../../static/03-hc.jpg" type="image/jpeg">
      <img
        src="../../static/03-hc.jpg"
        title="Sorry, your browser doesn't support embedded videos" />
    </picture>
    Sorry, your browser doesn't support embedded videos.
  </video>
</template>

<script lang="ts">
export default {
  name: 'VideoEmbed',
  data() {
    return {
      video: '09-hc'
    }
  },
  props: {
    classname: {
      type: String,
      default: 'video-embed',
    },
  },
}

</script>
