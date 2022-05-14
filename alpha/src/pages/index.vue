<template>
  <section id="site-main">
    <div class="container-fluid">
      <div class="row">
        <div class="col logo">
          <div class="circle">
            <a href="/art">
              <div class="title">
                <h1>KNAPP</h1>
              </div>
            </a>
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
            &copy; {{ year }} {{ data?.settings?.title.en }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

</script>

<script setup lang="ts">
import { computed, onServerPrefetch, ref } from "vue"
import { useHead } from "@vueuse/head"
import sanityClient from "@/lib/sanityClient"
import { indexQuery } from "@/lib/queries"
import FrontNav from "@/components/frontNav.vue"
import { Navigation, Settings } from "@/lib/interfaces"

interface Data {
  navigation: Navigation
  settings: Settings
}

const data = ref<Data | null>(null)
const year = new Date().getFullYear()

const fetch = async () => {
  const response = await sanityClient.fetch(indexQuery)
  data.value = response
}

if (!data.value) fetch()

onServerPrefetch(async () => {
  await fetch()
})

useHead({
  // title: computed(() => data?.value?.settings.title.en),
  title: "The Estate of Stefan Knapp",
  meta: [
    {
      hid: "description",
      name: "description",
      content: computed(() => data?.value?.settings.description.en)
    },
    {
      hid: "og:title",
      name: "og:title",
      content: computed(() => data?.value?.settings.ogTitle.en)
    },
    {
      hid: "og:description",
      name: "og:description",
      content: computed(() => data?.value?.settings.ogDescription.en)
    },
    // {
    //   hid: "og:image",
    //   property: "og:image",
    //   content: $urlFor(data?.value?.settings.ogImage)
    //     .width(1200)
    //     .height(628)
    //     .fit("crop")
    //     .auto("format")
    //     .quality(80)
    //     .url()
    // },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: computed(() => data?.value?.settings.ogTitle.en)
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: computed(() => data?.value?.settings.ogDescription.en)
    },
    // {
    //   hid: "twitter:image",
    //   name: "twitter:image",
    //   content: $urlFor(data?.value?.settings.ogImage)
    //     .width(1200)
    //     .height(628)
    //     .fit("crop")
    //     .auto("format")
    //     .quality(80)
    //     .url()
    // },
  ]
})
</script>

<script lang="ts">
export default {
  components: {
    FrontNav
  }
}
</script>

<route lang="yaml">
meta:
  layout: home
</route>

<style lang="scss" scoped>
@use '../styles/base/breakpoints' as b;
@use '../styles/base/colors' as c;

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
