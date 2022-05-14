<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "components/HelloWorld.vue"
import { useSanityClient } from "vue-sanity"
</script>

<script lang="ts">
export default {
  name: "App",
  setup() {
    useSanityClient({
      projectId: "0u3fubc7",
      dataset: "production",
      apiVersion: "2021-12-12",
      useCdn: true
    })
  }
}
</script>

<template>
  <router-view />
</template>
