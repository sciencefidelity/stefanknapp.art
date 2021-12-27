<script lang="ts">
import { Vue, Options } from "vue-property-decorator"
import sanityClient from "../sanityClient"
import { artQuery, artworkQuery, metaQuery } from "../data/queries"
import { Artwork, Meta, Page } from "../generated/schema"
import Modal from "@/components/modal.vue"

@Options({
  name: "Art",
  components: {
    Modal
  },
  nuxtI18n: {
    paths: {
      en: "/art",
      pl: "/sztuka"
    }
  },
  async fetch() {
    const artworkData: Artwork = await sanityClient.fetch(artworkQuery)
    const metaData: Meta = await sanityClient.fetch(metaQuery)
    const pageData: Page = await sanityClient.fetch(artQuery)

    this.mainImage = pageData.mainImage
    this.ogDescription = pageData.ogDescription
    this.ogTitle = pageData.ogTitle
    this.siteTitle = metaData.title
    this.title = pageData.title
    this.artworks = artworkData
  }
})
export default class Art extends Vue {
  currentIndex = 0
  head() {
    return {
      title:
        this.$i18n.locale === "en"
          ? `${this.title.en} | ${this.siteTitle.en}`
          : `${this.title.pl} | ${this.siteTitle.pl}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            this.$i18n.locale === "en"
              ? this.ogDescription.en
              : this.ogDescription.pl
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            this.$i18n.locale === "en" ? this.ogTitle.en : this.ogTitle.pl
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            this.$i18n.locale === "en"
              ? this.ogDescription.en
              : this.ogDescription.pl
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.$urlFor(this.mainImage)
            .width(1200)
            .height(630)
            .fit("crop")
            .auto("format")
            .quality(80)
            .url()
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content:
            this.$i18n.locale === "en" ? this.ogTitle.en : this.ogTitle.pl
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            this.$i18n.locale === "en"
              ? this.ogDescription.en
              : this.ogDescription.pl
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.$urlFor(this.mainImage)
            .width(1200)
            .height(628)
            .fit("crop")
            .auto("format")
            .quality(80)
            .url()
        }
      ]
    }
  }

  mounted() {
    window.addEventListener("keydown", this.onKeydown),
    window.addEventListener("touchstart", this.onTouchStart)
  }

  destroyed() {
    window.removeEventListener("keydown", this.onKeydown),
    window.removeEventListener("touchstart", this.onTouchStart)
  }

  nextIndex() {
    if (this.currentIndex + 1 >= this.artworks.length) {
      this.currentIndex = 0
    } else {
      this.currentIndex += 1
    }
  }

  prevIndex() {
    if (this.currentIndex - 1 < 0) {
      this.currentIndex = this.artworks.length - 1
    } else {
      this.currentIndex -= 1
    }
  }

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
  }

  onTouchStart(e) {
    if (e.changedTouches.length !== 1) {
      return
    }
    const posXStart = e.changedTouches[0].clientX
    console.log("touched")
    window.addEventListener("touchend", e => this.onTouchEnd(e, posXStart), {
      once: true
    })
  }

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
}

</script>

<template>
  <main>
    <section class="gallery-section">
      <div class="gallery">
        <Modal
          :image="artworks[currentIndex].mainImage"
          :title="artworks[currentIndex].title"
          :date="artworks[currentIndex].date"
          :width="artworks[currentIndex].meta.dimensions.width"
          :height="artworks[currentIndex].meta.dimensions.height"
          :medium="artworks[currentIndex].medium.title"
          @nextIndex="nextIndex"
          @prevIndex="prevIndex"
        />
      </div>
    </section>
  </main>
</template>

<!-- prettier-ignore -->
<style lang="scss" scoped>
@use '../assets/css/colors' as c;
@use '../assets/css/breakpoints' as b;

.gallery-section {
  position: relative;
  display: grid;
  place-content: center;
  height: calc(100vh - 4.4rem);
  background: c.$grey-000;
}

.gallery {
  position: absolute;
  top: 7.5rem;
  width: 100%;
  height: calc(100vh - 11.9rem);
}
</style>
