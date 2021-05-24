<template>
  <layout
    :title="$static.sanityPage.mainImage.caption.en"
    :link="$static.sanityPage.mainImage"
    :width="$static.sanityPage.mainImage.asset.metadata.dimensions.width"
    :height="$static.sanityPage.mainImage.asset.metadata.dimensions.height"
  >
    <main>
      <section class="art-section">
        <div class="container">
          <div class="art-image">
            <sanity-image
              :title="$static.sanityPhotography.mainImage.caption.en"
              :link="$static.sanityPhotography.mainImage"
              :width="$static.sanityPhotography.mainImage.asset.metadata.dimensions.width"
              :height="$static.sanityPhotography.mainImage.asset.metadata.dimensions.height"
            />
          </div>
          <div>
            <block-content
              v-if="$context.locale === 'en-gb'"
              class="post__content"
              :blocks="$static.sanityPage.body._rawEn"
            />
            <block-content
              v-else
              class="post__content"
              :blocks="$static.sanityPage.body._rawPl"
            />
          </div>
        </div>
      </section>
      <section class="gallery-section">
        <gallery captions:caption />
      </section>
      <section class="video-section">
        <div class="video-wrapper">
          <video-embed-art />
        </div>
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
      body {
        _rawEn(resolveReferences: {maxDepth: 5})
        _rawPl(resolveReferences: {maxDepth: 5})
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
    sanityPhotography(id: "de115ee8-e847-45f1-a4b9-e1d0fc69dffe") {
      mainImage {
        caption {
          en
          pl
        }
        asset {
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
          content: 'The artistic periods of enamelist and sculptor Stefan Knapp.'
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
    SanityImage,
    BlockContent,
    Gallery,
    VideoEmbedArt
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

.art-section {
  position: relative;
  padding: 15rem 0 18rem;
  background: c.$slate-100;
  z-index: 0;
  @include b.mq(sm) {
    padding: 10rem 0 15rem;
  }
}

.gallery-section {
  position: relative;
  display: grid;
  place-content: center;
  background: hsl(0,0%,99%);
  padding: 15rem 0 18rem;
  overflow: hidden;
  @include b.mq(sm) {
    padding: 5rem 0 5rem;
  }
}

.video-section {
  position: relative;
  height: 100vh;
  width: 100vw;
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

.container {
  width: min(100rem, 88%);
  margin: auto;
  display: flex;
  div {
    padding-left: 6.5rem;
    &:first-child {
      padding-left: 0rem;
    }
    @include b.mq(md) {
      padding-left: 0;
    }
  }
  @include b.mq(md) {
    flex-direction: column;
  }
}

.art-image {
  border: 0.6rem solid c.$grey-050;
  width: 370rem;
  box-shadow: 3px 5px 15px rgba(black, 0.2);
  filter: grayscale(100%);
  @include b.mq(md) {
    width: 75%;
    margin: 0 auto 6rem;
  }
  @include b.mq(sm) {
    width: 100%;
  }
}

</style>
