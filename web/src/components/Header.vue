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
  },
  props: {
    resizeNav: false
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;

header {
  position: absolute;
  z-index: 20;
  // background: rgba(c.$grey-000, 0.6);
  width: 100%;
  height: 100vh;
}

</style>
