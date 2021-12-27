<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator"
import LightboxImage from "@/components/lightboxImage.vue"

@Options({
  name: "Modal",
  components: {
    LightboxImage
  }
})
export default class Modal extends Vue {
  isHidden = false
  async nextIndex() {
    await setTimeout(() => {
      this.$emit("nextIndex")
    }, 200)
  }

  async prevIndex() {
    await setTimeout(() => {
      this.$emit("prevIndex")
    }, 200)
  }

  @Prop(Number) readonly date: number | undefined
  @Prop(Number) readonly height: number | undefined
  @Prop(Object) readonly image: object | undefined
  @Prop(Object) readonly medium: object | undefined
  @Prop(Object) readonly title: object | undefined
  @Prop(Number) readonly width: number | undefined
}
</script>

<template>
  <div class="modal">
    <div class="btn btn--prev" @click="prevIndex()">
      <img
        alt="Previous image"
        src="data:image/svg+xml,%3Csvg viewBox='0 0 54 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.15 52.05l48.1 48.1c.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0L.75 53.45c-.8-.8-.8-2.1 0-2.9L50.35.95c.8-.8 2.1-.8 2.9 0 .8.8.8 2.1 0 2.9l-48.1 48.1v.1z' fill='%23262626'/%3E%3C/svg%3E"
        loading="lazy"
      />
    </div>
    <div class="btn btn--next" @click="nextIndex()">
      <img
        alt="Next image"
        src="data:image/svg+xml,%3Csvg viewBox='0 0 54 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48.85 52.05l-48.1 48.1c-.8.8-.8 2.1 0 2.9.8.8 2.1.8 2.9 0l49.6-49.6c.8-.8.8-2.1 0-2.9L3.65.95c-.8-.8-2.1-.8-2.9 0-.8.8-.8 2.1 0 2.9l48.1 48.1v.1z' fill='%23262626'/%3E%3C/svg%3E"
      />
    </div>
    <div :class="{ hidden: isHidden }">
      <div class="modal__image">
        <LightboxImage
          :title="title"
          :image="image"
          :width="width"
          :height="height"
        />
        <p class="modal__caption">
          {{ $i18n.locale === "en" ? title.en : title.pl }} {{ `(${date})`
          }}<br />{{
            $i18n.locale === "en"
              ? medium.en.toLowerCase()
              : medium.pl.toLowerCase()
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<!-- prettier-ignore -->
<style lang="scss" scoped>
@use '../assets/css/colors' as c;
@use '../assets/css/breakpoints' as b;

.modal {
  font-size: 1rem;
  &__image {
    z-index: 7;
    width: 100%;
    height: calc(100vh - 11.9rem);
    margin: auto;
    font-size: 0.8vw;
    background-color: hsl(0, 0%, 100%);
    object-fit: contain;
  }
  &__caption {
    position: absolute;
    right: max(calc((100vw - 100rem) / 2), 6%);
    z-index: 7;
    margin: 1rem 0 0;
    font-size: 1.7rem;
    text-align: right;
    @include b.mq(sm) {
      right: 6%;
      bottom: 1rem;
      width: 100%;
      font-size: 1.5rem;
    }
  }
}

.btn {
  position: absolute;
  z-index: 9;
  width: 4rem;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  @include b.mq(sm) {
    display: none;
  }
  &:hover {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  &--next,
  &--prev {
    top: 50%;
    width: 2.5rem;
    transform: translateY(-50%);
  }
  &--next {
    right: 3em;
  }
  &--prev {
    left: 3em;
  }
}
</style>
