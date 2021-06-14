<template>
  <layout>
    <main>
      <section class="gallery-section">
        <gallery captions:caption />
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
    sanityPage(id: "07891a7c-d81e-49e7-b8d3-0b2b51aac12a") {
      title {
        en
        pl
      }
      ogTitle
      ogDescription
      mainImage {
        caption {
          en
          pl
        }
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
import SanityImage from '@/components/SanityImage.vue'
import BlockContent from '@/components/BlockContent.vue'
import Gallery from '@/components/Gallery.vue'
import VideoEmbedArt from '@/components/VideoEmbedArt.vue'

export default {
  name: 'Art',
  metaInfo() {
    return {
      title: this.$static.sanityPage.title.en,
      meta: [
        {
          name: 'description',
          content: this.$static.sanityPage.ogDescription
        },
        {
          property: 'og:title',
          content: this.$static.sanityPage.ogTitle
        },
        {
          property: 'og:description',
          content: this.$static.sanityPage.ogDescription
        },
        {
          property: 'og:image',
          content: this.$urlForImage(this.$static.sanityPage.mainImage, this.$static.metadata.sanityOptions)
          .auto('format')
          .quality(80)
          .width(1200)
          .height(630)
          .url()
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: this.$static.sanityPage.ogTitle
        },
        {
          name: 'twitter:description',
          content: this.$static.sanityPage.ogDescription
        },
        {
          name: 'twitter:image',
          content: this.$urlForImage(this.$static.sanityPage.mainImage, this.$static.metadata.sanityOptions)
          .auto('format')
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
  overflow: hidden;
  @include b.mq(sm) {
    padding: 5rem 0 5rem;
  }
}

</style>
