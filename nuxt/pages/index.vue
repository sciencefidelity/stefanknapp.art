<template>
  <Layout>
    <section id="site-main">
      <div class="container-fluid">
        <div class="row">
          <div class="col logo">
            <div class="circle">
              <NuxtLink to="/">
                <div class="title"><h1>Knapp</h1></div>
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
            <p>&copy; {{ copyright }} The Estate of Stefan Knapp</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script lang="ts">
import groq from "groq"
import sanityClient from "../sanityClient"
import Layout from "@/layouts/FrontPage.vue"
import FrontNav from "@/components/FrontNav.vue"

const query = groq`
  {
    "meta": *[_type == 'meta']{ title, description, ogTitle, ogDescription, ogImage }
  }
`

export default {
  name: "Index",
  metaInfo() {
    return {
      title: this.meta.title,
      meta: [
        {
          name: "description",
          content: this.meta.description
        },
        {
          property: "og:title",
          content: this.meta.ogTitle
        },
        {
          property: "og:description",
          content: this.meta.ogDescription
        },
        {
          property: "og:image",
          content: this.$urlForImage(this.meta.ogImage, sanityClient)
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
          content: this.meta.ogTitle
        },
        {
          name: "twitter:description",
          content: this.meta.ogDescription
        },
        {
          name: "twitter:image",
          content: this.$urlForImage(this.meta.ogImage, sanityClient)
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
@use "../assets/foundation/colors" as c;
@use "../assets/foundation/breakpoints" as b;

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
