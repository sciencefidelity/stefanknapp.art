<template>
  <layout>
    <main>
      <section class="estate">
        <div class="estate__container">
          <div class="estate__image">
            <sanity-image
              :title="$static.sanityPhotography.mainImage.caption.en"
              :link="$static.sanityPhotography.mainImage"
              :width="$static.sanityPhotography.mainImage.asset.metadata.dimensions.width"
              :height="$static.sanityPhotography.mainImage.asset.metadata.dimensions.height"
            />
          </div>
          <div class="estate__text">
            <p>contact: <a :href="`mailto:${$static.sanityMeta.contact}`">{{ $static.sanityMeta.contact }}</a></p>
          </div>
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
    sanityPage(id: "e0fb01c9-f899-4469-bdd5-b9d270d78024") {
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
    sanityPhotography(id: "c001c0b0-8e97-4bc8-abe5-ab3cf72e4dad") {
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
    sanityMeta(id: "8708a608-e41b-4ac7-86ce-0c39395f9d53") {
      contact
    }
  }
</static-query>

<script lang="ts">
import SanityImage from '@/components/SanityImage.vue'

export default {
  name: 'Estate',
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
    SanityImage
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

.estate {
  position: relative;
  display: flex;
  place-items: center;
  height: calc(100vh - 4.4rem);
  background: c.$grey-000;
  z-index: 0;
  @include b.mq(sm) {
    padding: 10rem 0 15rem;
  }
  &__container {
    width: min(100rem, 88%);
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 3fr;
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
      font-size: 2.2rem;
      width: 100%;
      text-align: center;
      // background: c.$grey-000;
    }
    a {
      font-weight: 400;
      text-align: right;
      text-decoration: underline;
      text-decoration-thickness: 0.07em;
      text-decoration-color: rgba(c.$grey-950, 0);
      transition: text-decoration-color 0.3s;
      &:hover {
        text-decoration: underline;
        text-decoration-thickness: 0.07em;
        text-decoration-color: rgba(c.$grey-950, 1);
        transition: text-decoration 0.3s;
      }
    }
  }
}

</style>
