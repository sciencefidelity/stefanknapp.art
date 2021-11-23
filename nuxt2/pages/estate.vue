<template>
  <layout>
    <main>
      <section class="estate">
        <div class="estate__container">
          <div class="estate__image">
            <SanityImage />
          </div>
          <div class="estate__text">
            <p>
              contact:
              <a :href="`mailto:${contact}`">{{ contact }}</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  </layout>
</template>

<script lang="ts">
import Vue from "vue"
import { groq } from "@nuxtjs/sanity"
import { SanityImage } from "@nuxtjs/sanity/dist/components/sanity-image"

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

interface ImageProps {
  mainImage: {
    _type: string
    asset: { _ref: string; _type: string }
  }
}

interface MetaProps {
  contact: string
}

const pageQuery = groq`*[_type == "page"][0]{
  mainImage, ogDescription, ogTitle, title
}`
const imageQuery = groq`*[_type == "photography"][3]{ mainImage }`
const metaQuery = groq`*[_type == "meta"][0]{contact}`

export default Vue.extend({
  name: "Estate",
  async fetch() {
    const pageData: PageProps = await this.$sanity.fetch(pageQuery)
    const imageData: ImageProps = await this.$sanity.fetch(imageQuery)
    const metaData: MetaProps = await this.$sanity.fetch(metaQuery)
    this.mainImage = pageData.mainImage
    this.ogDescription = pageData.ogDescription
    this.ogTitle = pageData.ogTitle
    this.title = pageData.title
    this.image = imageData.mainImage
    this.contact = metaData.contact
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
          content: this.$urlForImage(this.mainImage)
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

.estate {
  position: relative;
  z-index: 0;
  display: flex;
  place-items: center;
  padding: 12rem 0;
  background: c.$grey-000;
  @include b.mq(md) {
    height: auto;
    min-height: calc(100vh - 4.4rem);
    padding: 8rem 0 2rem;
  }
  @include b.mq(sm) {
    padding: 8rem 0 2rem;
  }
  &__container {
    display: grid;
    grid-template-columns: 2fr 3fr;
    width: min(100rem, 88%);
    margin: auto;
    @include b.mq(md) {
      grid-template-columns: 1fr;
    }
    @include b.mq(md) {
      flex-direction: column;
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
  &__text {
    display: flex;
    place-items: center;
    p {
      width: 100%;
      font-size: 2.2rem;
      text-align: center;
    }
    a {
      font-weight: 400;
      text-align: right;
    }
  }
}
</style>
