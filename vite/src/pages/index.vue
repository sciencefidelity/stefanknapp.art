<script lang="ts">
import { useSanityClient, useSanityFetcher } from "vue-sanity"
// import { indexQuery } from "../lib/queries"
// import { Navigation, Settings } from "../lib/interfaces"

export default {
  setup() {
    async useSanityClient({
      projectId: "0u3fubc7",
      dataset: "production",
      apiVersion: "2021-12-12",
      useCdn: true
    })
    const { data: title } = useSanityFetcher("*[_type == 'page'][0].title")
    return { title }
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
