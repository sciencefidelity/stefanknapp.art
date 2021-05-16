<template>
  <Layout
    :title="$static.sanityPage.mainImage.caption.en"
    :link="$static.sanityPage.mainImage"
  >
    <main>
      <section class="art-section">
        <div class="container">
          <div class="art-image">
            <SanityImage
              :title="$static.sanityPhotography.mainImage.caption.en"
              :link="$static.sanityPhotography.mainImage"
              :width="$static.sanityPhotography.mainImage.asset.metadata.dimensions.width"
              :height="$static.sanityPhotography.mainImage.asset.metadata.dimensions.height"
            />
          </div>
          <div>
            <block-content
              class="post__content"
              :blocks="$static.sanityPage.body._rawEn"
              v-if="$static.sanityPage.body._rawEn"
            />
          </div>
        </div>
      </section>
    </main>
  </Layout>
</template>

<static-query>
  query {
    sanityPage(id: "e0fb01c9-f899-4469-bdd5-b9d270d78024") {
      title {
        en
        pl
      }
      body {
        _rawEn(resolveReferences: {maxDepth: 5})
        _rawPl(resolveReferences: {maxDepth: 5})
      }
      mainImage {
        caption {
          en
          pl
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
    sanityPhotography(id: "c001c0b0-8e97-4bc8-abe5-ab3cf72e4dad") {
      mainImage {
        caption {
          en
          pl
        }
        asset {
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
</static-query>

<script lang="ts">
import SanityImage from '../components/SanityImage'
import BlockContent from '../components/BlockContent'

export default {
  name: 'Estate',
  components: {
    SanityImage,
    BlockContent
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;

.art-section {
  position: relative;
  padding: 15rem 0 18rem;
  background: c.$slate-150;
  z-index: 0;
}

.video-embed {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.container {
  width: min(100rem, 88%);
  margin: auto;
  display: flex;
  div {
    padding-left: 6.5rem;
    &:first-child {
      padding-left: 0rem;
    }
  }
}

.art-image {
  border: 0.6rem solid c.$grey-050;
  width: 370rem;
  box-shadow: 3px 5px 15px rgba(black, 0.2);
  filter: grayscale(100%);
}

</style>
