<template>
  <layout
    :title="$static.page.mainImage.caption.en"
    :link="$static.page.mainImage"
    :width="$static.page.mainImage.asset.metadata.dimensions.width"
    :height="$static.page.mainImage.asset.metadata.dimensions.height"
  >
    <main>
      <div class="gallery-container">
        <div v-for="edge in $static.artwork.edges" :key="edge.node.id" class="gallery-image">
          <sanity-image
            :title="edge.node.title.en"
            :link="edge.node.mainImage"
            :width="edge.node.mainImage.asset.metadata.dimensions.width"
            :height="edge.node.mainImage.asset.metadata.dimensions.height"
            w=400
            h=400
          />
          <p v-if="$context.locale === 'en-gb'" class="caption">
            {{ edge.node.title.en }} ({{ edge.node.date }})<br />
            {{ edge.node.medium[0].title.en }}
          </p>
          <p v-else class="caption">
            <span class="caption__line">{{ edge.node.title.en }},</span><br />
            <span class="caption__line">{{ edge.node.medium[0].title.pl }},</span>
            <span class="caption__line">{{ edge.node.date }}</span>
          </p>
        </div>
      </div>
      <section class="art-section">
        <div class="container">
        <h2>{{ $static.page.title.en }}</h2>
          <div>
            <block-content
              v-if="$context.locale === 'en-gb'"
              class="post__content"
              :blocks="$static.page.body._rawEn"
            />
            <block-content
              v-else
              class="post__content"
              :blocks="$static.page.body._rawPl"
            />
          </div>
        </div>
      </section>
    </main>
  </layout>
</template>

<static-query>
query {
  page: sanityPeriod(id: "87c31a8d-be84-4519-951d-488798e2955e") {
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
      en}
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
  artwork: allSanityArtwork(sortBy: "date", order: ASC, filter: { date: { lte: 1946 }}) {
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
import SanityImage from '@/components/SanityImage.vue'
import BlockContent from '@/components/BlockContent.vue'

export default {
  name: 'Period',
  components: {
    SanityImage,
    BlockContent
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

.gallery-container {
  width: min(100rem, 88%);
  margin: auto;
  padding: 14rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  div {
    margin-bottom: 1em;
  }
  p {
    margin-bottom: 0;
  }
  @include b.mq(md) {
    grid-template-columns: 1fr 1fr;
  }
  @include b.mq(sm) {
    grid-template-columns: 1fr;
  }
}

.gallery-image {
  aspect-ratio: 1 / 1;
  margin-bottom: 0.5em !important;
}

.caption {
  text-align: right;
  font-size: 1.8rem;
  &__line {
    white-space: nowrap;
  }
}

.art-section {
  position: relative;
  padding: 15rem 0 18rem;
  background: c.$slate-100;
  z-index: 0;

}

.container {
  column-count: 2;
  column-gap: 4rem;
  column-width: min(53ch, 100%);
  width: min(100rem, 88%);
  margin: auto;
  p:first-child {
    margin-top: 0;
  }
  @include b.mq(lg) {
    column-count: 1;
    width: min(53ch, 88%);
  }
}

</style>
