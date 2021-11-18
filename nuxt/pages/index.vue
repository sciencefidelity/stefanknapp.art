<template>
  <layout>
    <section id="site-main">
      <div class="container-fluid">
        <div class="row">
          <div class="col logo">
            <div class="circle">
              <g-link v-if="$context.locale === 'en-gb'" to="/en/art/">
                <div class="title"><h1>Knapp</h1></div>
              </g-link>
              <g-link v-else to="/pl/art/">
                <div class="title"><h1>Knapp</h1></div>
              </g-link>
            </div>
          </div>
          <front-nav />
        </div>
        <div class="row">
          <div class="col">
            <div class="spacer"></div>
          </div>
        </div>
        <div class="row">
          <div class="front-copy">
            <p>
              &copy; {{ copyright }}
              {{
                $context.locale === "en-gb"
                  ? "The Estate of Stefan Knapp"
                  : "Posiadłość Stefana Knappa"
              }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>

<script lang="ts">
import Layout from "@/layouts/FrontPage.vue"
import FrontNav from "@/components/FrontNav.vue"

export default {
  name: "Index",
  metaInfo() {
    return {
      title: this.$static.sanityMeta.title,
      meta: [
        {
          name: "description",
          content: this.$static.sanityMeta.description
        },
        {
          property: "og:title",
          content: this.$static.sanityMeta.ogTitle
        },
        {
          property: "og:description",
          content: this.$static.sanityMeta.ogDescription
        },
        {
          property: "og:image",
          content: this.$urlForImage(
            this.$static.sanityMeta.ogImage,
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
          content: this.$static.sanityMeta.ogTitle
        },
        {
          name: "twitter:description",
          content: this.$static.sanityMeta.ogDescription
        },
        {
          name: "twitter:image",
          content: this.$urlForImage(
            this.$static.sanityMeta.ogImage,
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
    Layout,
    FrontNav
  },
  data() {
    return {
      copyright: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../assets/scss/colors" as c;
@use "../assets/scss/breakpoints" as b;

::selection {
  background: rgba(c.$sepia-150, 0.3);
}

#site-main {
  background: c.$grey-950;
  color: c.$sepia-150;
  min-height: 100vh;
}

h1 {
  margin-bottom: 0px;
  font-size: 7.5vw;
  color: c.$grey-950;
  @include b.mq(lg) {
    font-size: 11vw;
  }
}

.logo {
  position: relative;
  padding-left: 0px;
  padding-right: 0px;
  @include b.mq(lg) {
    font-size: 1vw;
    padding: 4em 2em 0 2em;
  }
}

.circle {
  width: 100%;
  background: c.$sepia-150;
  border-radius: 50%;
  position: relative;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
}

.spacer {
  position: relative;
  width: 100%;
  &::after {
    content: "";
    display: block;
    padding-bottom: 40%;
    padding-bottom: max(40%, (calc(100vh - (4vh + 96vw + 6rem))));
  }
}

.title {
  text-transform: uppercase;
  text-align: right;
  position: absolute;
  right: 0.6em;
  bottom: 50%;
  line-height: 0;
  @include b.mq(lg) {
    font-size: 1vw;
    right: 0.5em;
  }
}

.front-copy {
  margin: 0 0 0 auto;
  padding: 0 5rem 0 0;
  p {
    font-size: clamp(1.4rem, 1.8vw, 1.9rem);
    font-weight: 600;
    margin: 0;
    @include b.mq(sm) {
      font-size: 1.2rem;
    }
  }
  @include b.mq(lg) {
    padding: 0.8rem;
    align-self: inherit;
  }
}

.footer {
  @include b.mq(lg) {
    padding-bottom: 1%;
  }
}
</style>
