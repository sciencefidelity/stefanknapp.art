<template>
  <div class="gallery">
    <Modal
      @nextIndex="nextIndex"
      @prevIndex="prevIndex"
      :title="artworks[currentIndex].title.en"
      :date="artworks[currentIndex].date"
      :medium="artworks[currentIndex].medium[0].title.en"
      :image="artworks[currentIndex].mainImage"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { groq } from "@nuxtjs/sanity"
import Modal from "@/components/modal.vue"

interface ArtworkProps {
  _id: string
  date: number
  mainImage: {
    _type: string
    asset: { _ref: string; _type: string }
  }
  medium: object[]
  title: string
}

const artworkQuery = groq`*[_type == "artwork" && display] | order(date) {
  _id, date, mainImage, medium, title
}`

export default Vue.extend({
  name: "Gallery",
  components: {
    Modal
  },
  data: () => ({
    artworks: [],
    currentIndex: 0
  }),
  async fetch() {
    const pageData: ArtworkProps = await this.$sanity.fetch(artworkQuery)
    this.artworks = artworkQuery
  },
  methods: {
    nextIndex() {
      if (this.currentIndex + 1 >= this.artworks.length) {
        this.currentIndex = 0
      } else {
        this.currentIndex += 1
      }
    },
    prevIndex() {
      if (this.currentIndex - 1 < 0) {
        this.currentIndex = this.artworks.length - 1
      } else {
        this.currentIndex -= 1
      }
    },
    onKeydown(e) {
      switch (e.key) {
        case "ArrowRight":
          this.nextIndex()
          break
        case "ArrowLeft":
          this.prevIndex()
          break
        case "ArrowDown":
        case "ArrowUp":
        case " ":
          e.preventDefault()
          break
      }
    },
    onTouchStart(e) {
      if (e.changedTouches.length !== 1) {
        return
      }
      const posXStart = e.changedTouches[0].clientX
      console.log("touched")
      window.addEventListener("touchend", e => this.onTouchEnd(e, posXStart), {
        once: true
      })
    },
    onTouchEnd(e, posXStart) {
      if (e.changedTouches.length !== 1) {
        return
      }
      const posXEnd = e.changedTouches[0].clientX
      if (posXStart < posXEnd) {
        this.prevIndex()
      } else if (posXStart > posXEnd) {
        this.nextIndex()
      }
      window.removeEventListener("touchend", this.onTouchStart)
    }
  },
  mounted() {
    window.addEventListener("keydown", this.onKeydown),
      window.addEventListener("touchstart", this.onTouchStart)
  },
  destroyed() {
    window.removeEventListener("keydown", this.onKeydown),
      window.removeEventListener("touchstart", this.onTouchStart)
  }
})
</script>

<!-- prettier-ignore -->
<style lang="scss">
.gallery {
  position: absolute;
  top: 7.5rem;
  width: 100%;
  height: calc(100vh - 11.9rem);
}
</style>
