<script lang="ts">
import { Vue, Options } from "vue-property-decorator"
import Navigation from "@/components/navigation.vue"

@Options({
  name: "Header",
  components: {
    Navigation
  }
})
export default class Header extends Vue {}
</script>

<template>
  <header>
    <Navigation />
  </header>
</template>

<!-- prettier-ignore -->
<style lang="scss" scoped>
@use '../assets/css/colors' as c;

header {
  position: absolute;
  z-index: 10;
  width: 100%;
}
</style>
