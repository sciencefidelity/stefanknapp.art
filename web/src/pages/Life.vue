<template>
  <layout>
    <main>
      <section class="life">
        <div class="life__container">
          <div class="life__image">
            <sanity-image
              :title="$static.imageOne.mainImage.caption.en"
              :link="$static.imageOne.mainImage"
              :width="$static.imageOne.mainImage.asset.metadata.dimensions.width"
              :height="$static.imageOne.mainImage.asset.metadata.dimensions.height"
            />
          </div>
          <div>
            <block-content
              v-if="$context.locale === 'en-gb'"
              class="post__content"
              :blocks="$static.sanityBio.biography._rawEn"
            />
            <block-content
              v-else
              class="post__content"
              :blocks="$static.sanityBio.biography._rawPl"
            />
          </div>
        </div>
        <div class="life__container">
          <div class="life__image">
            <sanity-image
              :title="$static.imageTwo.mainImage.caption.en"
              :link="$static.imageTwo.mainImage"
              :width="$static.imageTwo.mainImage.asset.metadata.dimensions.width"
              :height="$static.imageTwo.mainImage.asset.metadata.dimensions.height"
            />
          </div>
          <div>
            <block-content
              v-if="$context.locale === 'en-gb'"
              class="post__content"
              :blocks="$static.sanityBio.biography2._rawEn"
            />
            <block-content
              v-else
              class="post__content"
              :blocks="$static.sanityBio.biography2._rawPl"
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
    sanityPage(id: "b42f9e92-664b-4fe3-bdac-ad7bb8ed7410") {
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
    sanityBio(id: "2b871be4-985f-4175-bdb7-59468e0e0ba6") {
      biography {
        _rawEn(resolveReferences: {maxDepth: 5})
        _rawPl(resolveReferences: {maxDepth: 5})
      }
      exhibitions {
        _rawEn(resolveReferences: {maxDepth: 5})
        _rawPl(resolveReferences: {maxDepth: 5})
      }
    }
    imageOne: sanityPhotography(id: "dc5c8996-399e-46d2-88aa-8a0d75318ca0") {
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
    imageTwo: sanityPhotography(id: "02e6ff9e-578f-4eda-ba03-d4b43bb4d270") {
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
    imageThree: sanityPhotography(id: "5382b64e-9639-4ff8-856e-4c6e0ffab18a") {
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
  padding: 12rem 0 12rem 0;
  background: c.$grey-000;
  z-index: 0;
  @include b.mq(md) {
    flex-direction: column;
    height: unset;
    padding: 10rem 0;
  }
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
    width: 180%;
    /* width: max(500rem, 370%); */
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
