<template>
  <header>
    <navigation />
  </header>
</template>

<script lang="ts">
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Header',
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;

header {
  position: absolute;
  z-index: 10;
  width: 100%;
}
</style>
