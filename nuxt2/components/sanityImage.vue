<template>
  <div class="sanity-image">
    <VLazyImage
      :alt="alt=$i18n.locale === 'en' ? title.en : title.pl"
      :src="
        $urlFor(image)
          .fit('crop')
          .auto('format')
          .quality(80)
          .url()
      "
      decoding="async"
      loading="lazy"
      :width="width"
      :height="height"
    />
    <div class="placeholder" :style="{ 'background-color': color }" />
  </div>
</template>

<script lang="ts">
import VLazyImage from "v-lazy-image/v2"

export default {
  name: "SanityImage",
  components: {
    VLazyImage
  },
  props: {
    color: String,
    height: Number,
    image: Object,
    title: Object,
    width: Number
  }
}
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
