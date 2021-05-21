<template>
  <div class="modal">
    <div class="btn btn--prev" @click="prevIndex()">
      <img
        alt="Previous image"
        src="data:image/svg+xml,%3Csvg viewBox='0 0 54 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.15 52.05l48.1 48.1c.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0L.75 53.45c-.8-.8-.8-2.1 0-2.9L50.35.95c.8-.8 2.1-.8 2.9 0 .8.8.8 2.1 0 2.9l-48.1 48.1v.1z' fill='%234C4C4C'/%3E%3C/svg%3E"
        loading="lazy"
      />
    </div>
    <div class="btn btn--next" @click="nextIndex()">
      <img
        alt="Next image"
        src="data:image/svg+xml,%3Csvg viewBox='0 0 54 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48.85 52.05l-48.1 48.1c-.8.8-.8 2.1 0 2.9.8.8 2.1.8 2.9 0l49.6-49.6c.8-.8.8-2.1 0-2.9L3.65.95c-.8-.8-2.1-.8-2.9 0-.8.8-.8 2.1 0 2.9l48.1 48.1v.1z' fill='%234C4C4C'/%3E%3C/svg%3E"
      />
    </div>
    <div class="close" @click="closeModal()"></div>
    <div class="btn btn--close" @click="closeModal()">
      <img
        alt="Close lightbox"
        src="data:image/svg+xml,%3Csvg viewBox='0 0 104 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M49.104 51.877L.949 3.722c-.8-.8-.8-2.1 0-2.9.8-.8 2.1-.8 2.9 0l48.1 48.1h.1l48.1-48.1c.8-.8 2.1-.8 2.9 0 .8.8.8 2.1 0 2.9L54.928 51.843l48.155 48.155c.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0l-48.1-48.1h-.1l-48.1 48.1c-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9l48.121-48.121z' fill='%234C4C4C'/%3E%3C/svg%3E"
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
        {{ title }} ({{ date }})
      </p>
      <p v-if="medium" class="modal__caption">
        {{ medium }}
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
    closeModal() {
      this.$emit('closeModal')
    },
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(white, 0.75);
  z-index: 7;
  overflow: auto;
  display: flex;
  font-size: 1rem;
  &__image {
    font-size: 0.8vw;
    background: white;
    padding: max(2em, 2rem);
    margin: auto;
    display: inline-block;
    z-index: 7;
    // width: max(65vh, 65vw);
  }
  &__caption {
    font-size: 1.8rem;
    margin-bottom: 0;
    text-align: right;
    z-index: 7;
    @include b.mq(sm) {
      font-size: 1.6rem;
    }
  }
}


.close {
  position: absolute;
  z-index: 8;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
}

.btn {
  width: 4rem;
  position: absolute;
  z-index: 9;
  cursor: pointer;
  opacity: 0.7;
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
  &--close {
    right: 3em;
    top: 2em;
  }
  &--next {
    right: 3em;
  }
  &--prev {
    left: 3em;
  }
}

</style>
