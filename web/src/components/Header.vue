<template>
  <header>
    <Navigation
      :resizeNav="resizeNav"
    />
  </header>
</template>

<script>
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
