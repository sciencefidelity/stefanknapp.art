<template>
  <video autoplay loop muted playsinline :class="classname">
    <source :src="videos[randomVideo].mp4Url" type="video/mp4" />
    <source :src="videos[randomVideo].webmUrl" type="video/webm" />
    <picture>
      <source :srcset="videos[randomVideo].imageUrl" type="image/webp" />
      <source :srcset="videos[randomVideo].imageUrl" type="image/jpeg" />
      <img
        :src="videos[randomVideo].imageUrl"
        :title="videos[randomVideo].title.en"
      />
    </picture>
    Sorry, your browser doesn't support embedded videos.
  </video>
</template>

<script lang="ts">
import { videoQuery } from "../data/queries"
import { Video } from "../generated/schema"

export default {
  name: "VideoEmbed",
  props: {
    classname: {
      type: String,
      default: "video-embed"
    }
  },
  data: () => ({
    randomVideo: Math.floor(Math.random() * 3),
    videos: []
  }),
  async fetch() {
    const videoData: Video = await this.$sanity.fetch(videoQuery)
    this.videos = videoData
  }
}
</script>
