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
    <div class="modal__image">
      <lightbox-image
        :title=title
        :link=link
        :width=width
        :height=height
      />
      <p class="modal__caption">
        {{ title }} {{ date }}<br />{{ medium.toLowerCase() }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import LightboxImage from '@/components/LightboxImage.vue'

export default {
  name: 'Modal',
  components: {
    LightboxImage,
  },
  props: {
    title: String,
    date: Number,
    medium: String,
    link: Object,
    width: Number,
    height: Number,
  },
  methods: {
    nextIndex() {
      this.$emit('nextIndex')
    },
    prevIndex() {
      this.$emit('prevIndex')
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

.modal {
  font-size: 1rem;
  &__image {
    font-size: 0.8vw;
    background: white;
    padding: max(2em, 2rem);
    margin: auto;
    display: inline-block;
    z-index: 7;
  }
  &__caption {
    margin: 1rem 0 0 0;
    font-size: 1.7rem;
    text-align: right;
    z-index: 7;
    @include b.mq(sm) {
      font-size: 1.5rem;
      margin-right: 2em;
    }
  }
}

.btn {
  width: 4rem;
  position: absolute;
  z-index: 9;
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
    transform: translateY(-50%);
    width: 2.5rem;
  }
  &--next {
    right: 3em;
  }
  &--prev {
    left: 3em;
  }
}

</style>
