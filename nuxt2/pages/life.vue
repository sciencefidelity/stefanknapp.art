<template>
  <Layout>
    <main>
      <section class="life">
        <div class="life__container">
          <div class="life__image">
            <SanityImage :asset-id="image1.asset._ref" auto="format" />
          </div>
          <div class="life__text">
            <SanityContent :blocks="biography.en" />
          </div>
        </div>
        <div class="life__container">
          <div class="life__text">
            <SanityContent :blocks="exhibitions.en" />
          </div>
          <div class="life__image hide">
            <SanityImage :asset-id="image2.asset._ref" auto="format" />
          </div>
        </div>
        <div class="life__container full">
          <Exhibitions />
        </div>
      </section>
      <section class="video-section">
        <div class="video-wrapper">
          <VideoEmbed />
        </div>
      </section>
    </main>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue"
import { groq } from "@nuxtjs/sanity"
import { SanityContent } from "@nuxtjs/sanity/dist/components/sanity-content"
import { SanityImage } from "@nuxtjs/sanity/dist/components/sanity-image"
import VideoEmbed from "@/components/videoEmbed.vue"
import Exhibitions from "@/components/exhibitions.vue"

interface PageProps {
  mainImage: {
    _type: string
    asset: { _ref: string; _type: string }
    caption: { _type: string; en: string; pl: string }
    crop: {
      _type: string
      bottom: number
      left: number
      right: number
      top: number
    }
    hotspot: {
      _type: string
      height: number
      width: number
      x: number
      y: number
    }
  }
  ogDescription: string
  ogTitle: string
  title: { en: string; pl: string }
}

interface BioProps {
  biography: { _type: string; en: object[]; pl: object[] }
  born: string
  died: string
  exhibitions: { _type: string; en: object[]; pl: object[] }
  name: string
}

interface ImageProps {
  date: number
  mainImage: {
    _type: string
    asset: { _ref: string; _type: string }
    caption: { _type: string; en: string; pl: string }
  }
  title: { en: string; pl: string }
}

const pageQuery = groq`*[_type == "page"][0]{
  mainImage, ogDescription, ogTitle, title
}`
const bioQuery = groq`*[_type == "bio"][0]{ biography, exhibitions }`
const photoQuery1 = groq`*[_type == "photography"] | order(date) [4] {
  date, mainImage, title
}`
const photoQuery2 = groq`*[_type == "photography"] | order(date) [5] {
  date, mainImage, title
}`

export default Vue.extend({
  name: "Life",
  components: {
    SanityContent,
    SanityImage,
    VideoEmbed,
    Exhibitions
  },
  data: () => ({
    mainImage: {},
    title: "",
    ogTitle: "",
    ogDescription: "",
    biography: {},
    exhibitions: {},
    image1: {},
    image2: {}
  }),
  async fetch() {
    const pageData: PageProps = await this.$sanity.fetch(pageQuery)
    const bioData: BioProps = await this.$sanity.fetch(bioQuery)
    const image1Data: ImageProps = await this.$sanity.fetch(photoQuery1)
    const image2Data: ImageProps = await this.$sanity.fetch(photoQuery2)
    this.mainImage = pageData.mainImage
    this.title = pageData.title
    this.ogTitle = pageData.ogTitle
    this.ogDescription = pageData.ogDescription
    this.biography = bioData.biography
    this.exhibitions = bioData.exhibitions
    this.image1 = image1Data.mainImage
    this.image2 = image2Data.mainImage
  },
  head() {
    return {
      title: this.title.en,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.ogDescription
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.ogTitle
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.ogDescription
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.$urlFor(this.mainImage)
            .width(1200)
            .height(630)
            .fit("crop")
            .auto("format")
            .quality(80)
            .url()
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$static.sanityPage.ogTitle
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$static.sanityPage.ogDescription
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.$urlFor(this.mainImage)
            .width(1200)
            .height(628)
            .fit("crop")
            .auto("format")
            .quality(80)
            .url()
        }
      ]
    }
  }
})
</script>

<!-- prettier-ignore -->
<style lang="scss" scoped>
@use '../assets/css/colors' as c;
@use '../assets/css/breakpoints' as b;

.life {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  place-items: center;
  padding: 12rem 0;
  background: c.$grey-000;
  @include b.mq(md) {
    flex-direction: column;
    gap: 0;
    height: unset;
    padding: 10rem 0;
  }
  @include b.mq(sm) {
    padding: 10rem 0 15rem;
  }
  &__container {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    width: min(100rem, 88%);
    margin: auto;
    @include b.mq(md) {
      flex-direction: column;
      grid-template-columns: 1fr;
    }
    div {
      padding-left: 6.5rem;
      @include b.mq(md) {
        padding-left: 0;
      }
      &:first-child {
        padding-left: 0;
      }
    }
  }
  &__image {
    @include b.mq(md) {
      width: 75%;
      margin: 0 auto 6rem;
    }
    @include b.mq(sm) {
      width: 100%;
    }
  }
}

.hide {
  @include b.mq(md) {
    display: none;
  }
}

.full {
  grid-template-columns: 1fr;
}

.video-section {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.video-wrapper {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-embed {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
</style>
