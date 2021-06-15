<template>
  <layout>
    <main>
      <section class="life">
        <div class="life__container">
          <div class="life__image">
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
      <section class="video-section">
        <div class="video-wrapper">
          <video-embed />
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
    sanityPage(id: "33e2b96d-3119-4538-baa5-dfd930453eb8") {
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
    sanityPhotography(id: "9cc83967-cbb5-465c-96c0-36a6208a7a29") {
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
import VideoEmbed from '@/components/VideoEmbed.vue'

export default {
  name: 'Life',
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
    SanityImage,
    BlockContent,
    VideoEmbed
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

.life {
  position: relative;
  display: flex;
  place-items: center;
  height: 100vh;
  background: c.$slate-100;
  z-index: 0;
  @include b.mq(sm) {
    padding: 10rem 0 15rem;
  }
  &__container {
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
  &__image {
    border: 0.6rem solid c.$grey-050;
    width: max(500rem, 370%);
    box-shadow: 3px 5px 15px rgba(black, 0.2);
    @include b.mq(md) {
      width: 75%;
      margin: 0 auto 6rem;
    }
    @include b.mq(sm) {
      width: 100%;
    }
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

</style>
