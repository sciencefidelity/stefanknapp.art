<template>
  <video
    autoplay
    loop
    :class="classname"
  >
    <source src="../../static/06-hc-sq.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
  </video>
</template>

<script>
  export default {
    name: 'VideoEmbed',
    props: {
      classname: {
        type: String,
        default: 'video-embed',
      },
    }
  }

</script>
