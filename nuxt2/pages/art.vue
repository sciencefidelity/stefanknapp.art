<template>
  <Layout>
    <main>
      <section class="gallery-section">
        <Gallery />
      </section>
    </main>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue"
import { groq } from "@nuxtjs/sanity"
import Gallery from "@/components/gallery.vue"

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

const pageQuery = groq`*[_type == "page"][0]{
  mainImage, ogDescription, ogTitle, title
}`

export default Vue.extend({
  name: "Art",
  components: {
    Gallery
  },
  async fetch() {
    const pageData: PageProps = await this.$sanity.fetch(pageQuery)
    this.mainImage = pageData.mainImage
    this.ogDescription = pageData.ogDescription
    this.ogTitle = pageData.ogTitle
    this.title = pageData.title
  },
  metaInfo() {
    return {
      title: this.title.en,
      meta: [
        {
          name: "description",
          content: this.ogDescription
        },
        {
          property: "og:title",
          content: this.ogTitle
        },
        {
          property: "og:description",
          content: this.ogDescription
        },
        {
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
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:title",
          content: this.ogTitle
        },
        {
          name: "twitter:description",
          content: this.ogDescription
        },
        {
          name: "twitter:image",
          content: this.$urlFor(this.mainImage)
            .auto("format")
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
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

.gallery-section {
  position: relative;
  display: grid;
  place-content: center;
  height: calc(100vh - 4.4rem);
  background: c.$grey-000;
}
</style>
