<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator"
import VLazyImage from "v-lazy-image/v2"

@Options({
  name: "SanityImage",
  components: {
    VLazyImage
  }
})
export default class SanityImage extends Vue {
  @Prop(String) readonly color: string | undefined
  @Prop(Number) readonly height: number | undefined
  @Prop(Object) readonly image: object | undefined
  @Prop(Object) readonly title: object | undefined
  @Prop(Number) readonly width: number | undefined
}
</script>

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
