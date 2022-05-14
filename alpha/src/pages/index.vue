<template>
  <h1>{{ data?.settings.title.en }}</h1>
</template>

<script lang="ts">

</script>

<script setup lang="ts">
import { computed, onServerPrefetch, ref } from "vue"
import { useHead } from "@vueuse/head"
import sanityClient from "@/lib/sanityClient"
import { indexQuery } from "@/lib/queries"
import { Navigation, Settings } from "@/lib/interfaces"

interface Data {
  navigation: Navigation
  settings: Settings
}

const data = ref<Data | null>(null)

const fetch = async () => {
  const response = await sanityClient.fetch(indexQuery)
  data.value = response
}

if (!data.value) fetch()

onServerPrefetch(async () => {
  await fetch()
})

useHead({
  title: computed(() => data?.value?.settings.title.en),
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

<route lang="yaml">
meta:
  layout: home
</route>
