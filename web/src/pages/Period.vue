<template>
  <layout
    :title="$static.artwork.edges[0].node.title.en"
    :link="$static.artwork.edges[0].node.mainImage"
    :width="$static.artwork.edges[0].node.mainImage.asset.metadata.dimensions.width"
    :height="$static.artwork.edges[0].node.mainImage.asset.metadata.dimensions.height"
  >
    <main>
      <div class="gallery-container">
        <div v-for="edge in $static.artwork.edges" :key="edge.node.id">
          <sanity-image
            :title="edge.node.title.en"
            :link="edge.node.mainImage"
            :width="edge.node.mainImage.asset.metadata.dimensions.width"
            :height="edge.node.mainImage.asset.metadata.dimensions.height"
            w=442
            h=400
          />
          <p v-if="$context.locale === 'en-gb'" class="caption">
            {{ edge.node.title.en }},
            {{ edge.node.medium[0].title.en }},
            {{ edge.node.date }}
          </p>
          <p v-else class="caption">
            {{ edge.node.title.en }},
            {{ edge.node.medium[0].title.pl }},
            {{ edge.node.date }}
          </p>
        </div>
      </div>
    </main>
  </layout>
</template>

<static-query>
query {
  artwork: allSanityArtwork(sortBy: "date", order: DESC, filter: { date: { lte: 1946 }}) {
    edges {
      node {
        id
        title {
          en
          pl
        }
        date
        medium {
          title {
            en
            pl
          }
        }
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
  name: 'Period',
  components: {
    SanityImage,
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

main {
  background: c.$grey-000;
}

.gallery-container {
  width: min(130rem, 88%);
  margin: auto;
  padding: 14rem 0;
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
