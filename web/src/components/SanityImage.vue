<template>
  <div class="sanity-image">
    <v-lazy-image
      :alt=title
      :src="$urlForImage(link, $static.metadata.sanityOptions)
        .auto('format')
        .quality(80)
        .width(w)
        .height(h)
        .fit(fit)
        .crop(crop)
        .url()"
      decoding="async"
      loading="lazy"
      :width=width
      :height=height
      :style="{ 'object-position': pos }"
    />
    <img
      :alt=title
      :src="$urlForImage(link, $static.metadata.sanityOptions)
        .auto('format')
        .quality(10)
        .fit(fit)
        .crop(crop)
        .width(2)
        .height(2)
        .url()"
      decoding="async"
      loading="lazy"
      class="placeholder"
      :width=width
      :height=height
    />
  </div>
</template>

<static-query>
  query {
    metadata {
      sanityOptions {
        projectId
        dataset
      }
    }
  }
</static-query>

<script lang="ts">
import VLazyImage from "v-lazy-image";

export default {
  name: 'SanityImage',
  components: {
    VLazyImage
  },
  props: {
    title: String,
    link: Object,
    w: String,
    h: String,
    width: Number,
    height: Number,
    pos: String,
    fit: {
      type: String,
      default: 'crop',
    },
    crop: {
      type: String,
      default: 'center',
    },
  }
}
</script>

<style lang="scss" scoped>
.sanity-image {
  display: inline-block;
  position: relative;
  height: 100%;
  width: 100%;
}

img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.placeholder {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.v-lazy-image {
  position: relative;
  opacity: 0;
  transition: opacity 1s;
  z-index: 2;
}

.v-lazy-image-loaded {
  opacity: 1;
}
</style>
