<template>
  <h1>{{ data?.settings.title.en }}</h1>
</template>

<script lang="ts">

</script>

<script setup lang="ts">
import { ref, onServerPrefetch } from "vue"
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

// if (!data.value) fetch()

onServerPrefetch(async () => {
  await fetch()
})
</script>

<route lang="yaml">
meta:
  layout: home
</route>
