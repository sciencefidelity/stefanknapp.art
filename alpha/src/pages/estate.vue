<template>
  <Estate
    :labels="data?.labels.en"
    :page="data?.page.en"
    :photography="data?.photography.en"
    :settings="data?.settings.en"
    :locales="locales"
  />
</template>

<script setup lang="ts">
import { computed, onServerPrefetch, ref } from "vue"
import { useHead } from "@vueuse/head"
import sanityClient from "@/lib/sanityClient"
import { estateQuery } from "@/lib/queries"
// import FrontNav from "@/components/frontNav.vue"
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

const fetch = async () => {
  const response = await sanityClient.fetch(estateQuery)
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
