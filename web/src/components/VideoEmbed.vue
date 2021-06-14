<template>
  <video
    autoplay
    loop
    muted
    playsinline
    :class="classname"
  >
    <source
      :src="$static.sanityVideo.mp4.asset.url"
      type="video/mp4"
    />
    <source
      :src="$static.sanityVideo.webm.asset.url"
      type="video/webm"
    />
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

<static-query>
  query {
    sanityVideo(id: "ae87b16a-585e-488b-99bb-b00cf9145621") {
      id
      title {
        en
        pl
      }
      mp4 {
        asset {
          url
        }
      }
      webm {
        asset {
          url
        }
      }
      mainImage {
        asset {
          _id
          url
          metadata {
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  }
</static-query>

<script lang="ts">

export default {
  name: 'VideoEmbed',
  props: {
    classname: {
      type: String,
      default: 'video-embed',
    },
  },
}

</script>
