<template>
  <header>
    <Navigation />
  </header>
</template>

<script lang="ts">
import Vue from "vue"
import Navigation from "@/components/navigation.vue"

export default Vue.extend({
  name: "Header",
  components: {
    Navigation
  }
})
</script>

<!-- prettier-ignore -->
<style lang="scss" scoped>
@use '../assets/css/colors' as c;

header {
  position: absolute;
  z-index: 10;
  width: 100%;
}
</style>
