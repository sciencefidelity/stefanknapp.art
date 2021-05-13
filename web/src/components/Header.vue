<template>
  <header>
    <SanityImage
      :title=title
      :link=link
    />
    <Navigation />
  </header>
</template>

<script>
import SanityImage from './SanityImage'
import Navigation from './Navigation'

export default {
  name: 'Header',
  components: {
    SanityImage,
    Navigation
  },
  props: {
    title: String,
    link: String,
  }
}

</script>

<style lang="scss" scoped>
header {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
