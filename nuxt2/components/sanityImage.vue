<template>
  <div class="sanity-image">
    <VLazyImage
      :alt="title"
      :src="
        $urlFor(image)
          .width()
          .height()
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
    <div class="placeholder" :style="{ 'background-color': color }" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import VLazyImage from "v-lazy-image/v2"

export default Vue.extend({
  name: "SanityImage",
  data: function () {
    return {
      w: this.width / 3,
      h: this.height / 3
    }
  },
  components: {
    VLazyImage
  },
  props: {
    title: String,
    image: Object,
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
    },
    color: String
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
