<template>
  <layout>
    <main>
      <section class="gallery-section">
        <gallery />
      </section>
    </main>
  </layout>
</template>

<static-query>
  query {
    metadata {
      sanityOptions {
        projectId
        dataset
      }
    }
    sanityPage(id: "36fedc70-6aec-4795-8f2e-a072cc5c003a") {
      title {
        en
        pl
      }
      ogTitle
      ogDescription
      mainImage {
        asset {
          _id
          url
        }
      }
    }
  }
</static-query>

<script lang="ts">
import Gallery from "@/components/Gallery.vue"

export default {
  name: "Art",
  metaInfo() {
    return {
      title: this.$static.sanityPage.title.en,
      meta: [
        {
          name: "description",
          content: this.$static.sanityPage.ogDescription
        },
        {
          property: "og:title",
          content: this.$static.sanityPage.ogTitle
        },
        {
          property: "og:description",
          content: this.$static.sanityPage.ogDescription
        },
        {
          property: "og:image",
          content: this.$urlForImage(
            this.$static.sanityPage.mainImage,
            this.$static.metadata.sanityOptions
          )
            .auto("format")
            .quality(80)
            .width(1200)
            .height(630)
            .url()
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:title",
          content: this.$static.sanityPage.ogTitle
        },
        {
          name: "twitter:description",
          content: this.$static.sanityPage.ogDescription
        },
        {
          name: "twitter:image",
          content: this.$urlForImage(
            this.$static.sanityPage.mainImage,
            this.$static.metadata.sanityOptions
          )
            .auto("format")
            .quality(80)
            .width(1200)
            .height(628)
            .url()
        }
      ]
    }
  },
  components: {
    Gallery
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

.gallery-section {
  position: relative;
  display: grid;
  place-content: center;
  background: c.$grey-000;
  height: calc(100vh - 4.4rem);
}
</style>
