<template>
  <video
    autoplay
    loop
    muted
    playsinline
    :class="classname"
  >
    <source
      :src="$static.video.edges[randomVideo].node.mp4.asset.url"
      type="video/mp4"
    />
    <source
      :src="$static.video.edges[randomVideo].node.webm.asset.url"
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
    video: allSanityVideo {
      edges {
        node {
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
  data() {
    return {
      randomVideo: Math.floor(Math.random() + 1 * 3 - 1)
    }
  }
}

</script>
