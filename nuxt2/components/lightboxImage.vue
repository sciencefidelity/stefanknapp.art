<template>
  <div class="sanity-image" :width="width" :height="height">
    <VLazyImage
      :alt="title"
      :src="
        $urlFor(image)
          .width(600)
          .fit(fit)
          .crop(crop)
          .auto('format')
          .quality(70)
          .url()
      "
      decoding="async"
      loading="lazy"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import VLazyImage from "v-lazy-image"

export default Vue.extend({
  name: "LightboxImage",
  components: {
    VLazyImage
  },
  props: {
    image: Object,
    title: String,
    width: Number,
    height: Number,
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

<!-- prettier-ignore -->
<style lang="scss" scoped>
@use '../assets/css/breakpoints' as b;

.sanity-image {
  position: relative;
  display: grid;
  justify-content: center;
  object-fit: contain;
}

img {
  max-width: 70%;
  height: calc(100vh - 19.9rem);
  margin: auto;
  object-fit: contain;
  @include b.mq(sm) {
    width: 100%;
    max-width: 100%;
  }
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
