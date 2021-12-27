<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator"
import VLazyImage from "v-lazy-image/v2"

@Options({
  name: "LightboxImage",
  components: {
    VLazyImage
  }
})
export default class LightboxImage extends Vue {
  @Prop(Number) readonly height: number | undefined
  @Prop(Object) readonly image: object | undefined
  @Prop(Object) readonly title: object | undefined
  @Prop(Number) readonly width: number | undefined
}
</script>

<template>
  <div class="sanity-image" :width="width" :height="height">
    <VLazyImage
      :alt="$i18n.locale === 'en' ? title.en : title.pl"
      :src="
        $urlFor(image)
          .width(600)
          .fit('crop')
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

<!-- prettier-ignore -->
<style lang="scss" scoped>
@use '../assets/css/breakpoints' as b;

.sanity-image {
  position: relative;
  display: grid;
  justify-content: center;
  object-fit: cover;
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

.placeholder {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 600px;
  margin: auto;
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
