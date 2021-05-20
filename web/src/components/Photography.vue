<template>
  <div>
    <div class="gallery-container">
      <div v-for="(edge, index) in $static.photo.edges" :key="edge.node.id">
        <div @click="toggleModal(index)" >
          <sanity-image
            :title="edge.node.title.en"
            :link="edge.node.mainImage"
            :width="edge.node.mainImage.asset.metadata.dimensions.width"
            :height="edge.node.mainImage.asset.metadata.dimensions.height"
            w=442
            h=400
          />
        </div>
        <p v-if="$context.locale === 'en-gb'" class="caption">
          {{ edge.node.title.en }}, {{ edge.node.date }}
        </p>
        <p v-else class="caption">
          {{ edge.node.title.pl }}, {{ edge.node.date }}
        </p>
      </div>
    </div>
    <div v-show="showModal">
      <modal
        @closeModal="closeModal"
        @nextIndex="nextIndex"
        @prevIndex="prevIndex"
        :title="$page.photo.edges[currentIndex].node.title.en"
        :date="$page.photo.edges[currentIndex].node.date"
        :link="$page.photo.edges[currentIndex].node.mainImage"
        :width="$page.photo.edges[currentIndex].node.mainImage.asset.metadata.dimensions.width"
        :height="$page.photo.edges[currentIndex].node.mainImage.asset.metadata.dimensions.height"
      />
    </div>
  </div>
</template>

<static-query>
  query {
    photo: allSanityPhotography {
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

export default {
  name: 'Gallery',
  components: {
    SanityImage
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
      if (this.currentIndex + 1 >= this.$page.artwork.edges.length) {
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
    }
  }
}

</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

.gallery-container {
  width: min(100rem, 88%);
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  div {
    margin-bottom: 3rem;
  }
  @include b.mq(md) {
    grid-template-columns: 1fr 1fr;
  }
  @include b.mq(sm) {
    grid-template-columns: 1fr;
  }
}

.caption {
  margin-top: -3.2rem;
  text-align: right;
  font-size: 1.9rem;
}

</style>
