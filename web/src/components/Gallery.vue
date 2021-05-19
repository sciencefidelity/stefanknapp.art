<template>
  <div class="gallery">
    <div v-for="edge in $static.allSanityPeriod.edges" :key="edge.node.id">
      <div class="gallery__image">
        <g-link :to="edge.node.slug.current" class="gallery__link">
          <sanity-image
            :title="edge.node.title.en"
            :link="edge.node.mainImage"
            :width="edge.node.mainImage.asset.metadata.dimensions.width"
            :height="edge.node.mainImage.asset.metadata.dimensions.height"
            w=400
            h=400
          />
        </g-link>
        <p v-if="$context.locale === 'en-gb'" class="gallery__caption">
          {{ edge.node.title.en }}
          ({{ edge.node.yearFrom }}-{{ edge.node.yearTo.toString() }})
        </p>
        <p v-else class="gallery__caption">
          {{ edge.node.title.en }}
          ({{ edge.node.yearFrom }}-{{ edge.node.yearTo.toString() }})
        </p>
      </div>
    </div>
  </div>
</template>

<static-query>
  query staticQuery {
    allSanityPeriod(sortBy: "yearFrom", order: ASC) {
      edges {
        node {
          title {
            en
          }
          id
          yearFrom
          yearTo
          slug {
            current
          }
          mainImage {
            asset {
              _id
              url
              metadata {
                dimensions {
                  width
                  height
                }
              }
            }
            caption {
              en
              pl
            }
          }
        }
      }
    }
  }
</static-query>

<script lang="ts">
import SanityImage from './SanityImage.vue'

export default {
  name: 'Gallery',
  components: {
    SanityImage
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

.gallery {
  width: min(100rem, 88%);
  margin: auto;
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

</style>
