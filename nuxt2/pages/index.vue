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
          <p>
            &copy; {{ year }} {{ $i18n.locale === "en" ? title.en : title.pl }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import sanityClient from "../sanityClient"
import { artQuery, metaQuery } from "../data/queries"
import { Meta, Page } from "../generated/schema"
import FrontNav from "@/components/frontNav.vue"

export default {
  name: "Index",
  components: {
    FrontNav
  },
  layout: "frontPage",
  data: () => ({
    artist: "Knapp",
    description: {},
    ogDescription: {},
    ogImage: {},
    ogTitle: {},
    showMenu: false,
    slug: {},
    title: "",
    year: new Date().getFullYear()
  }),
  async fetch() {
    const metaData: Meta = await sanityClient.fetch(metaQuery)
    const pageData: Page = await sanityClient.fetch(artQuery)

    this.description = metaData.description
    this.ogDescription = metaData.ogDescription
    this.ogImage = metaData.ogImage
    this.ogTitle = metaData.ogTitle
    this.slug = pageData.slug
    this.title = metaData.title
  },
  head() {
    return {
      title: this.$i18n.locale === "en" ? this.title.en : this.title.pl,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            this.$i18n.locale === "en"
              ? this.description.en
              : this.description.pl
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
          content: this.$urlFor(this.ogImage)
            .width(1200)
            .height(628)
            .fit("crop")
            .auto("format")
            .quality(80)
            .url()
        },
        {
          hid: "theme-color",
          name: "theme-color",
          content: "#0D0D0D"
        }
      ],
      bodyAttrs: {
        class: "front"
      }
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
