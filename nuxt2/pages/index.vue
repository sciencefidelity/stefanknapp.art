<template>
  <section id="site-main">
    <div class="container-fluid">
      <div class="row">
        <div class="col logo">
          <div class="circle">
            <NuxtLink :to="localePath(`${slug.current}`)">
              <div class="title">
                <h1>{{ artist.toUpperCase() }}</h1>
              </div>
            </NuxtLink>
          </div>
        </div>
        <FrontNav />
      </div>
      <div class="row">
        <div class="col">
          <div class="spacer"></div>
        </div>
      </div>
      <div class="row">
        <div class="front-copy">
          <p>&copy; {{ year }} {{ title.en }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { artQuery, metaQuery } from "../data/queries"
import { Meta, Page } from "../generated/schema"
import FrontNav from "@/components/frontNav.vue"

export default {
  layout: "frontPage",
  name: "Index",
  components: {
    FrontNav
  },
  data: () => ({
    artist: "Knapp",
    showMenu: false,
    title: "",
    description: {},
    ogTitle: {},
    ogDescription: {},
    ogImage: {},
    slug: {},
    year: new Date().getFullYear()
  }),
  async fetch() {
    const metaData: Meta = await this.$sanity.fetch(metaQuery)
    const pageData: Page = await this.$sanity.fetch(artQuery)

    this.title = metaData.title
    this.description = metaData.description
    this.ogTitle = metaData.ogTitle
    this.ogDescription = metaData.ogDescription
    this.ogImage = metaData.ogImage
    this.slug = pageData.slug
  },
  head() {
    return {
      title: this.title.en,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description.en
        },
        { hid: "og:title", name: "og:title", content: this.ogTitle.en },
        {
          hid: "og:description",
          name: "og:description",
          content: this.ogDescription.en
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.$urlFor(this.ogImage)
            .width(1200)
            .height(628)
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
          content: this.ogTitle.en
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.ogDescription.en
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.$urlFor(this.ogImage)
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
@use '~assets/css/colors' as c;
@use '~assets/css/breakpoints' as b;

::selection {
  background: rgba(c.$sepia-150, 0.3);
}

#site-main {
  min-height: 100vh;
  color: c.$sepia-150;
  background: c.$grey-950;
}

h1 {
  margin-bottom: 0;
  font-size: 7.5vw;
  color: c.$grey-950;
  @include b.mq(lg) {
    font-size: 11vw;
  }
}

.logo {
  position: relative;
  padding-right: 0;
  padding-left: 0;
  @include b.mq(lg) {
    padding: 4em 2em 0;
    font-size: 1vw;
  }
}

.circle {
  position: relative;
  width: 100%;
  background: c.$sepia-150;
  border-radius: 50%;
  &::after {
    display: block;
    padding-bottom: 100%;
    content: '';
  }
}

.spacer {
  position: relative;
  width: 100%;
  &::after {
    display: block;
    padding-bottom: 40%;
    padding-bottom: max(40%, (calc(100vh - (4vh + 96vw + 6rem))));
    content: '';
  }
}

.title {
  position: absolute;
  right: 0.6em;
  bottom: 50%;
  line-height: 0;
  text-align: right;
  @include b.mq(lg) {
    right: 0.5em;
    font-size: 1vw;
  }
}

.front-copy {
  padding: 0 5rem 0 0;
  margin: 0 0 0 auto;
  @include b.mq(lg) {
    align-self: inherit;
    padding: 0.8rem;
  }
  p {
    margin: 0;
    font-size: clamp(1.4rem, 1.8vw, 1.9rem);
    font-weight: 600;
    @include b.mq(sm) {
      font-size: 1.2rem;
    }
  }
}

.footer {
  @include b.mq(lg) {
    padding-bottom: 1%;
  }
}
</style>
