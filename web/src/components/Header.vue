<template>
  <header>
    <Navigation
      :resizeNav="resizeNav"
    />
  </header>
</template>

<script lang="ts">
import Navigation from './Navigation'

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
