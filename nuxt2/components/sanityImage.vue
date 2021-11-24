<template>
  <div class="sanity-image">
    <VLazyImage
      :alt="title"
      :src="
        $urlFor(image)
          .width(w)
          .height(h)
          .fit(fit)
          .crop(crop)
          .quality(80)
          .auto('format')
          .url()
      "
      decoding="async"
      loading="lazy"
      :width="width"
      :height="height"
      :style="{ 'object-position': pos }"
    />
    <img
      :alt="title"
      :src="
        $urlFor(image)
          .width(2)
          .height(2)
          .fit(fit)
          .crop(crop)
          .quality(10)
          .auto('format')
          .url()
      "
      decoding="async"
      loading="lazy"
      class="placeholder"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import VLazyImage from "v-lazy-image"

export default Vue.extend({
  name: "SanityImage",
  components: {
    VLazyImage
  },
  props: {
    title: String,
    image: Object,
    w: String,
    h: String,
    width: Number,
    height: Number,
    pos: {
      type: String,
      default: "50% 50%"
    },
    fit: {
      type: String,
      default: "crop"
    },
    crop: {
      type: String,
      default: "center"
    }
  }
})
</script>

<style lang="scss" scoped>
.sanity-image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.v-lazy-image {
  position: relative;
  z-index: 2;
  opacity: 0;
  transition: opacity 1s;
}

.v-lazy-image-loaded {
  opacity: 1;
}
</style>
