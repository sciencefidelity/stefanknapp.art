<template>
  <div>
    <div class="container gallery">
      <div
        v-for="(edge, index) in $static.photo.edges"
        :key="edge.node.id"
      >
        <div class="gallery__image" @click="toggleModal(index)" >
          <sanity-image
            :title="edge.node.title.en"
            :link="edge.node.mainImage"
            :width="edge.node.mainImage.asset.metadata.dimensions.width"
            :height="edge.node.mainImage.asset.metadata.dimensions.height"
            w=400
            h=400
          />
        </div>
        <p v-if="$context.locale === 'en-gb'" class="gallery__caption">
          {{ edge.node.title.en }}, {{ edge.node.date }}
        </p>
        <p v-else class="gallery__caption">
          {{ edge.node.title.pl }}, {{ edge.node.date }}
        </p>
      </div>
    </div>
    <div v-show="showModal">
      <modal
        @closeModal="closeModal"
        @nextIndex="nextIndex"
        @prevIndex="prevIndex"
        :title="$static.photo.edges[currentIndex].node.title.en"
        :date="$static.photo.edges[currentIndex].node.date"
        :link="$static.photo.edges[currentIndex].node.mainImage"
        :width="$static.photo.edges[currentIndex].node.mainImage.asset.metadata.dimensions.width"
        :height="$static.photo.edges[currentIndex].node.mainImage.asset.metadata.dimensions.height"
      />
    </div>
  </div>
</template>

<static-query>
  query {
    photo: allSanityPhotography(sortBy: "date", order: ASC) {
      edges {
        node {
          id
          title {
            en
            pl
          }
          date
          mainImage {
            asset {
              _id
              url
              metadata {
                dimensions {
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
</static-query>

<script lang="ts">
import SanityImage from '@/components/SanityImage.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'Gallery',
  components: {
    SanityImage,
    Modal
  },
  data() {
    return {
      showModal: false,
      currentIndex: 0
    }
  },
  methods: {
    toggleModal(index) {
      this.currentIndex = index
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    nextIndex() {
      if (this.currentIndex + 1 >= this.$static.photo.edges.length) {
        this.showModal = false
      } else {
        this.currentIndex += 1
      }
    },
    prevIndex() {
      if (this.currentIndex - 1 < 0) {
        this.showModal = false
      } else {
        this.currentIndex -= 1
      }
    },
    onKeydown(e) {
      if (this.showModal) {
        switch (e.key) {
          case 'ArrowRight':
            this.nextIndex()
            break
          case 'ArrowLeft':
            this.prevIndex()
            break
          case 'ArrowDown':
          case 'ArrowUp':
          case ' ':
            e.preventDefault()
            break
          case 'Escape':
            this.closeModal()
            break
        }
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.onKeydown)
  },
  destroyed() {
    window.removeEventListener('keydown', this.onKeydown)
  }
}

</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

.container {
  width: min(100rem, 88%);
  margin: auto;
}

.gallery {
  padding: 14rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  @include b.mq(md) {
    grid-template-columns: 1fr 1fr;
  }
  @include b.mq(sm) {
    grid-template-columns: 1fr;
  }
  div {
    margin-bottom: 1em;
  }
  p {
    margin-bottom: 0;
  }
  &__image {
    margin-bottom: 0.5em !important;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    transition: opacity 0.4s;
    &:hover {
      opacity: 0.9;
      transition: opacity 0.4s;
    }
  }
  &__caption {
    text-align: right;
    font-size: 1.8rem;
  }
}

</style>
