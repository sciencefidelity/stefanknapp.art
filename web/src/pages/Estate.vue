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
            <p v-if="$context.locale === 'en-gb'">
              contact:
              <a :href="`mailto:${$static.sanityMeta.contact}`">{{
                $static.sanityMeta.contact
              }}</a>
            </p>
            <p v-else>
              kontakt:
              <a :href="`mailto:${$static.sanityMeta.contact}`">{{
                $static.sanityMeta.contact
              }}</a>
            </p>
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
    sanityPage(id: "a2695196-0f56-42d9-bbb4-7b9d255d1ee1") {
      title {
        en
        pl
      }
      ogTitle {
        en
        pl
      }
      ogDescription {
        en
        pl
      }
      mainImage {
        asset {
          _id
          url
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
import SanityImage from "@/components/SanityImage.vue"

export default {
  name: "Estate",
  metaInfo() {
    return {
      title: this.$static.sanityPage.title.en,
      meta: [
        {
          name: "description",
          content: this.$static.sanityPage.ogDescription.en
        },
        {
          property: "og:title",
          content: this.$static.sanityPage.ogTitle.en
        },
        {
          property: "og:description",
          content: this.$static.sanityPage.ogDescription.en
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
          content: this.$static.sanityPage.ogTitle.en
        },
        {
          name: "twitter:description",
          content: this.$static.sanityPage.ogDescription.en
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
  padding: 12rem 0 12rem 0;
  background: c.$grey-000;
  z-index: 0;
  @include b.mq(md) {
    padding: 8rem 0 2rem;
    height: auto;
    min-height: calc(100vh - 4.4rem);
  }
  @include b.mq(sm) {
    padding: 8rem 0 2rem;
  }
  &__container {
    width: min(100rem, 88%);
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 3fr;
    @include b.mq(md) {
      grid-template-columns: 1fr;
    }
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
    }
    a {
      font-weight: 400;
      text-align: right;
    }
  }
}
</style>
