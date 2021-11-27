<template>
  <main>
    <section class="estate">
      <div class="estate__container">
        <div class="estate__image">
          <SanityImage
            :title="image.mainImage.caption"
            :image="image.mainImage"
            :width="image.meta.dimensions.width"
            :height="image.meta.dimensions.height"
            :color="image.meta.palette.lightMuted.background"
          />
        </div>
        <div class="estate__text">
          <p>
            {{ $i18n.locale === "en" ? "contact" : "kontakt" }}:
            <a :href="`mailto:${contact}`">{{ contact }}</a>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { estateQuery, metaQuery, photoQueryThree } from "../data/queries"
import { Meta, Page, Photography } from "../generated/schema"
import SanityImage from "@/components/sanityImage.vue"

export default {
  name: "Estate",
  nuxtI18n: {
    paths: {
      en: '/estate',
      pl: '/posiadlosc'
    }
  },
  components: {
    SanityImage
  },
  data: () => ({
    contact: "",
    image: {},
    mainImage: {},
    ogDescription: {},
    ogTitle: {},
    siteTitle: {},
    title: {}
  }),
  async fetch() {
    const imageData: Photography = await this.$sanity.fetch(photoQueryThree)
    const metaData: Meta = await this.$sanity.fetch(metaQuery)
    const pageData: Page = await this.$sanity.fetch(estateQuery)

    this.contact = metaData.contact
    this.image = imageData
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
