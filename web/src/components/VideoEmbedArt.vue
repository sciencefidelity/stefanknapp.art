<template>
  <video
    autoplay
    loop
    :class="classname"
  >
    <source type="video/mp4" src="../../static/03-hc.mp4" />
    Sorry, your browser doesn't support embedded videos.
  </video>
</template>

<script>
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
