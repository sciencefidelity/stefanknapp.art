<template>
  <layout
    :title="$page.page.mainImage.caption.en"
    :link="$page.page.mainImage"
    :width="$page.page.mainImage.asset.metadata.dimensions.width"
    :height="$page.page.mainImage.asset.metadata.dimensions.height"
  >
    <main>
      <section>
        <div class="container gallery">
          <div
            v-for="(edge, index) in $page.artwork.edges"
            :key="edge.node.id"
          >
            <div class="gallery__image" @click="toggleModal(index)">
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
              {{ edge.node.title.en }} ({{ edge.node.date }})<br />
              {{ edge.node.medium[0].title.en }}
            </p>
            <p v-else class="gallery__caption">
              {{ edge.node.title.en }},<br />
              {{ edge.node.medium[0].title.pl }}, {{ edge.node.date }}
            </p>
          </div>
        </div>
      </section>
      <section class="section--text">
        <div class="container text" v-if="$page.page.body">
          <h2>{{ $page.page.title.en }}</h2>
          <div>
            <block-content
              v-if="$context.locale === 'en-gb'"
              :blocks="$page.page.body._rawEn"
            />
            <block-content
              v-else
              :blocks="$page.page.body._rawPl"
            />
          </div>
        </div>
        <div class="text__links">
          <g-link v-if="$context.locale === 'en-gb'" to="/en/art/">Back to art</g-link>
          <g-link v-else to="/pl/art/">Powrót do sztuka</g-link>
          <g-link v-if="$context.next" :to="$context.next.slug.current">
            <div v-if="$context.locale === 'en-gb'">
              Next: {{ $context.next.title.en }} ({{ $context.next.yearFrom }}-{{ $context.next.yearTo }})
            </div>
            <div v-else>
              Kolejny: {{ $context.next.title.pl }} ({{ $context.next.yearFrom }}-{{ $context.next.yearTo }})
            </div>
          </g-link>
        </div>
      </section>
      <div v-show="showModal">
        <modal
          @closeModal="closeModal"
          @nextIndex="nextIndex"
          @prevIndex="prevIndex"
          :title="$page.artwork.edges[currentIndex].node.title.en"
          :date="$page.artwork.edges[currentIndex].node.date"
          :medium="$page.artwork.edges[currentIndex].node.medium[0].title.en"
          :link="$page.artwork.edges[currentIndex].node.mainImage"
          :width="$page.artwork.edges[currentIndex].node.mainImage.asset.metadata.dimensions.width"
          :height="$page.artwork.edges[currentIndex].node.mainImage.asset.metadata.dimensions.height"
        />
      </div>
    </main>
  </layout>
</template>

<page-query>
query Period ($id: ID!, $yearFrom: Float, $yearTo: Float) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  page: sanityPeriod(id: $id) {
    id
    title {
      en
    }
    body {
      _rawEn(resolveReferences: {maxDepth: 5})
      _rawPl(resolveReferences: {maxDepth: 5})
    }
    mainImage {
      caption {
        en
      }
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
  artwork: allSanityArtwork(sortBy: "date", order: ASC, filter: { date: { between: [$yearFrom, $yearTo] }}) {
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

</page-query>

<script lang="ts">
import SanityImage from '@/components/SanityImage.vue'
import BlockContent from '@/components/BlockContent.vue'
import Modal from '@/components/Modal.vue'

export default {
  components: {
    SanityImage,
    BlockContent,
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

main {
  background: c.$grey-000;
}

h2 {
  margin-bottom: 3rem;
}

.container {
  width: min(100rem, 88%);
  margin: auto;
}

// ***** gallery section *****

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
    transition: 0.4s opacity;
    &:hover {
      opacity: 90%;
      transition: 0.4s opacity;
    }
  }
  &__caption {
    text-align: right;
    font-size: 1.8rem;
  }
}

// ***** text section *****

.section--text {
  position: relative;
  padding: 15rem 0 15rem;
  background: c.$slate-050;
  z-index: 0;
}

.text {
  column-count: 2;
  column-gap: 4rem;
  column-width: min(53ch, 100%);
  @include b.mq(lg) {
    column-count: 1;
    width: min(53ch, 88%);
  }
  &__links {
    width: min(100rem, 88%);
    margin: 2em auto;
    display: flex;
    justify-content: space-between;
    a {
      display: block;
      padding: 0 0.5rem;
      background-color: c.$slate-050;
      transition: background-color 0.4s;
      &:hover {
        background-color: c.$grey-000;
        transition: background-color 0.4s;
      }
    }
  }
}

</style>
