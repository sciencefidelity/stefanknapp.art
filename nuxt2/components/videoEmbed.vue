<template>
  <video autoplay loop muted playsinline :class="classname">
    <source
      :src="videos[randomVideo].mp4.asset.url"
      type="video/mp4"
    />
    <source
      :src="videos[randomVideo].webm.asset.url"
      type="video/webm"
    />
    <picture>
      <source
        :srcset="videos[randomVideo].mainImage.asset.url"
        type="image/webp"
      />
      <source
        :srcset="videos[randomVideo].mainImage.asset.url"
        type="image/jpeg"
      />
      <img
        :src="videos[randomVideo].mainImage.asset.url"
        :title="videos[randomVideo].title.en"
      />
    </picture>
    Sorry, your browser doesn't support embedded videos.
  </video>
</template>

<script lang="ts">
import Vue from "vue"
import { groq } from "@nuxtjs/sanity"

interface VideoProps {
  video: [
    {
      id: string
      gallery: string
      mp4: {
        _type: string
        asset: { _ref: string; _type: string }
      }
      webm: boolean
      title: string
    }
  ]
}

const videoQuery = groq`*[_type == "video"]{ _id, mainImage, mp4, webm, title }`

export default Vue.extend ({
  name: "VideoEmbed",
  props: {
    classname: {
      type: String,
      default: "video-embed"
    }
  },
  data: () => ({
    randomVideo: Math.floor(Math.random() * 3)
  }),
  async fetch() {
    const videoData: VideoProps = await this.$sanity.fetch(videoQuery)
    this.videos = videoData
  }
})
</script>
