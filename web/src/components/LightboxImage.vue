<template>
  <div class="sanity-image">
    <v-lazy-image
      :alt=title
      :src="$urlForImage(link, $static.metadata.sanityOptions)
        .quality(70)
        .width(600)
        .fit(fit)
        .crop(crop)
        .url()"
      decoding="async"
      loading="lazy"
      :width=width
      :height=height
    />
    <!-- <img
      :alt=title
      :src="$urlForImage(link, $static.metadata.sanityOptions)
        .auto('format')
        .quality(10)
        .fit(fit)
        .crop(crop)
        .height(2)
        .url()"
      decoding="async"
      loading="lazy"
      class="placeholder"
      :width=width
      :height=height
    /> -->
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
    pos: {
      type: String,
      default: '50% 50%',
    },
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
// .sanity-image {
//   position: relative;
// }

img {
  height: auto;
  width: auto;
  max-width: 70vw;
  max-height: calc(85vh - 4.4rem);
}

.placeholder {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
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
