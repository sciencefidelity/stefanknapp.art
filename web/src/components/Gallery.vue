<template>
  <div class="gallery">
    <modal
      v-if="$context.locale === 'en-gb'"
      @nextIndex="nextIndex"
      @prevIndex="prevIndex"
      :title="$static.artwork.edges[currentIndex].node.title.en"
      :date="$static.artwork.edges[currentIndex].node.date"
      :medium="$static.artwork.edges[currentIndex].node.medium[0].title.en"
      :link="$static.artwork.edges[currentIndex].node.mainImage"
      :width="$static.artwork.edges[currentIndex].node.mainImage.asset.metadata.dimensions.width"
      :height="$static.artwork.edges[currentIndex].node.mainImage.asset.metadata.dimensions.height"
    />
    <modal
      v-else
      @nextIndex="nextIndex"
      @prevIndex="prevIndex"
      :title="$static.artwork.edges[currentIndex].node.title.pl"
      :date="$static.artwork.edges[currentIndex].node.date"
      :medium="$static.artwork.edges[currentIndex].node.medium[0].title.pl"
      :link="$static.artwork.edges[currentIndex].node.mainImage"
      :width="$static.artwork.edges[currentIndex].node.mainImage.asset.metadata.dimensions.width"
      :height="$static.artwork.edges[currentIndex].node.mainImage.asset.metadata.dimensions.height"
    />
  </div>
</template>

<static-query>
  query {
    artwork: allSanityArtwork(sortBy: "date", order: ASC) {
      edges {
        node {
          id
          title {
            en
            pl
          }
          medium {
            title {
              en
              pl
            }
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
import Modal from '@/components/Modal.vue'

export default {
  name: 'Gallery',
  components: {
    Modal
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    nextIndex() {
      if (this.currentIndex + 1 >= this.$static.artwork.edges.length) {
        this.currentIndex = 0
      } else {
        this.currentIndex += 1
      }
    },
    prevIndex() {
      if (this.currentIndex - 1 < 0) {
        this.currentIndex = this.$static.artwork.edges.length - 1
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
