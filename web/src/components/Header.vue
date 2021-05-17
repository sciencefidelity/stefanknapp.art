<template>
  <header>
    <navigation
      :resizeNav="resizeNav"
    />
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
    resizeNav: Boolean
  }
}
</script>
