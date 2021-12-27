<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator"
import sanityClient from "../sanityClient"
import { videoQuery } from "../data/queries"
import { Video } from "../generated/schema"

@Options({
  name: "VideoEmbed",
  async fetch() {
    const videoData: Video = await sanityClient.fetch(videoQuery)
    this.videos = videoData
  }
})
export default class VideoEmbed extends Vue {
  randomVideo = Math.floor(Math.random() * 3)

  @Prop({default: "VideoEmbed"}) readonly classname!: string
}
</script>

<template>
  <video autoplay loop muted playsinline class="video-embed">
    <source :src="videos[randomVideo].mp4Url" type="video/mp4" />
    <source :src="videos[randomVideo].webmUrl" type="video/webm" />
    <picture>
      <source :srcset="videos[randomVideo].imageUrl" type="image/webp" />
      <source :srcset="videos[randomVideo].imageUrl" type="image/jpeg" />
      <img
        :src="videos[randomVideo].imageUrl"
        :title="
          $i18n.locale === 'en'
            ? videos[randomVideo].title.en
            : videos[randomVideo].title.pl
        "
      />
    </picture>
    Sorry, your browser doesn't support embedded videos.
  </video>
</template>
