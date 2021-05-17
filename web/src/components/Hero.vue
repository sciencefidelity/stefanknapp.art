<template>
  <section class="hero-image">
    <sanity-image
      :title=title
      :link=link
      :width=width
      :height=height
      :crop=crop
      :pos=pos
    />
  </section>
</template>

<script lang="ts">
import SanityImage from '@/components/SanityImage.vue'

export default {
  name: 'Hero',
  components: {
    SanityImage,
  },
  props: {
    title: String,
    link: Object,
    width: Number,
    height: Number,
    crop: String,
    pos: String,
  }
}

</script>

<style lang="scss" scoped>
.hero-image {
  top: 0;
  width: 100vw;
  height: 100vh;
}
</style>
