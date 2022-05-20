<template>
  <main class="container main relative w-full">
    <div class="flex">
      <div class="logo relative w-full">
        <div class="circle relative w-full">
          <div class="title">
            <h1 class="h1">{{ artist.toUpperCase() }}</h1>
          </div>
        </div>
      </div>
      <FrontNav
        :labels="data?.labels.en"
        :nav="data?.navigation.en"
        :site="data?.settings.en.title"
        :locales="locales"
      />
    </div>
  </main>

  <footer class="footer flex w-full">
    <nav class="lang">
      <a :href="`/${locales[1]}`" class="outline">
        {{ languages[1].toUpperCase() }}
      </a>
    </nav>
    <div class="copy">
      &copy; {{ year }} {{ data?.settings.en.title }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, onServerPrefetch, ref } from "vue"
import { useHead } from "@vueuse/head"
import sanityClient from "@/lib/sanityClient"
import { indexQuery } from "@/lib/queries"
import FrontNav from "@/components/frontNav.vue"
import { LabelGroup, LocaleSettings, Navigation } from "@/lib/interfaces"

interface Data {
  labels: LabelGroup
  navigation: Navigation
  settings: LocaleSettings
}

const data = ref<Data | null>(null)
const languages = ["English", "Polski"]
const locales = ["", "pl"]
const year = new Date().getFullYear()
const artist = "Knapp"

const fetch = async () => {
  const response = await sanityClient.fetch(indexQuery)
  data.value = response
}

if (!data.value) fetch()

onServerPrefetch(async () => {
  await fetch()
})

// const emit = defineEmits<{
//   (e: 'change', id: number): void
//   (e: 'update', value: string): void
// }>()

useHead({
  title: data?.value?.settings.en.title,
  meta: [
    {
      hid: "description",
      name: "description",
      content: computed(() => data?.value?.settings.en.description)
    },
    {
      hid: "og:title",
      name: "og:title",
      content: computed(() => data?.value?.settings.en.ogTitle)
    },
    {
      hid: "og:description",
      name: "og:description",
      content: computed(() => data?.value?.settings.en.ogDescription)
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
      content: computed(() => data?.value?.settings.en.ogTitle)
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: computed(() => data?.value?.settings.en.ogDescription)
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
@use '../styles/base/colors' as c;
@use '../styles/base/breakpoints' as b;

.main {
  margin-bottom: max(40%, (calc(100vh - (4vh + 96vw + 6rem))));
}

.container {
  padding: 3.125rem 1.825rem;
  color: c.$sepia-150;
  background: c.$grey-950;
  @include b.mq(lg) {
    padding: 0;
  }
}

.logo {
  flex: 0 0 66.6667%;
  max-width: 66.6667%;
  padding-inline: 0;
  @include b.mq(lg) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 4em 2em 0;
    font-size: 1vw;
  }
}

.h1 {
  margin-bottom: 0;
  font-size: 7.5vw;
  font-weight: 700;
  color: c.$grey-950;
  @include b.mq(lg) {
    font-size: 11vw;
  }
}

.circle {
  background: c.$sepia-150;
  border-radius: 50%;
  &::after {
    display: block;
    padding-bottom: 100%;
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

.footer {
  align-self: end;
  @include b.mq(lg) {
    padding-bottom: 1%;
  }
}

.copy,
.lang {
  font-size: clamp(1.7rem, 1.8vw, 1.9rem);
  font-weight: 600;
  color: c.$sepia-150;
  @include b.mq(lg) {
    font-weight: 400;
  }
  a {
    color: c.$sepia-150;
  }
}

.copy {
  padding: 0 5rem 0 0;
  margin: 0 0 3rem auto;
  @include b.mq(lg) {
    padding: 0 2rem 0 0;
    margin: 0 0 1.5rem auto;
  }
}

.lang {
  padding: 0 0 0 5rem;
  margin: 0 auto 3rem 0;
  @include b.mq(lg) {
    padding: 0 0 0 2rem;
    margin: 0 auto 1.5rem 0;
  }
}
</style>
