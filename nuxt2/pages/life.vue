<template>
  <main>
    <section class="life">
      <div class="life__container">
        <div class="life__image">
          <SanityImage
            :title="imageOne.mainImage.caption"
            :image="imageOne.mainImage"
            :width="imageOne.meta.dimensions.width"
            :height="imageOne.meta.dimensions.height"
            :color="imageOne.meta.palette.lightMuted.background"
          />
        </div>
        <div class="life__text">
          <SanityContent
            :blocks="$i18n.locale === 'en' ? biography.en : biography.pl"
          />
        </div>
      </div>
      <div class="life__container">
        <div class="life__text">
          <SanityContent
            :blocks="$i18n.locale === 'en' ? exhibitions.en : exhibitions.pl"
          />
        </div>
        <div class="life__image hide">
          <SanityImage
            :title="imageTwo.mainImage.caption"
            :image="imageTwo.mainImage"
            :width="imageTwo.meta.dimensions.width"
            :height="imageTwo.meta.dimensions.height"
            :color="imageTwo.meta.palette.lightMuted.background"
          />
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
</template>

<script lang="ts">
import { SanityContent } from "@nuxtjs/sanity/dist/components/sanity-content"
import {
  bioQuery,
  lifeQuery,
  metaQuery,
  photoQueryOne,
  photoQueryTwo
} from "../data/queries"
import { Bio, Meta, Page, Photography } from "../generated/schema"
import Exhibitions from "@/components/exhibitions.vue"
import SanityImage from "@/components/sanityImage.vue"
import VideoEmbed from "@/components/videoEmbed.vue"

export default {
  name: "Life",
  nuxtI18n: {
    paths: {
      en: '/life',
      pl: '/zycie'
    }
  },
  components: {
    Exhibitions,
    SanityImage,
    VideoEmbed
  },
  data: () => ({
    biography: {},
    exhibitions: {},
    imageOne: {},
    imageTwo: {},
    mainImage: {},
    ogDescription: {},
    ogTitle: {},
    siteTitle: {},
    title: {}
  }),
  async fetch() {
    const pageData: Page = await this.$sanity.fetch(lifeQuery)
    const bioData: Bio = await this.$sanity.fetch(bioQuery)
    const imageOneData: Photography = await this.$sanity.fetch(photoQueryOne)
    const imageTwoData: Photography = await this.$sanity.fetch(photoQueryTwo)
    const metaData: Meta = await this.$sanity.fetch(metaQuery)

    this.biography = bioData.biography
    this.exhibitions = bioData.exhibitions
    this.imageOne = imageOneData
    this.imageTwo = imageTwoData
    this.mainImage = pageData.mainImage
    this.ogDescription = pageData.ogDescription
    this.ogTitle = pageData.ogTitle
    this.siteTitle = metaData.title
    this.title = pageData.title
  },
  head() {
    return {
      title:
        this.$i18n.locale === "en"
          ? `${this.title.en} | ${this.siteTitle.en}`
          : `${this.title.pl} | ${this.siteTitle.pl}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            this.$i18n.locale === "en"
              ? this.ogDescription.en
              : this.ogDescription.pl
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            this.$i18n.locale === "en" ? this.ogTitle.en : this.ogTitle.pl
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            this.$i18n.locale === "en"
              ? this.ogDescription.en
              : this.ogDescription.pl
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
          content:
            this.$i18n.locale === "en" ? this.ogTitle.en : this.ogTitle.pl
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            this.$i18n.locale === "en"
              ? this.ogDescription.en
              : this.ogDescription.pl
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
}
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
