<template>
  <header>
    <Navigation />
    <div class="hero-wrapper">
      <SanityImage
        :title=title
        :link=link
        :width=width
        :height=height
        :crop=crop
        :pos=pos
      />
    </div>
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
    width: Number,
    height: Number,
    crop: String,
    pos: String,
  }
}

</script>

<style lang="scss" scoped>
header {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.hero-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
