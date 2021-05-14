<template>
  <Layout
    :title="$static.sanityPage.mainImage.caption.en"
    :link="$static.sanityPage.mainImage"
    :width="$static.sanityPage.mainImage.asset.metadata.dimensions.width"
    :height="$static.sanityPage.mainImage.asset.metadata.dimensions.height"
  >
    <main>
      <InnerNav />
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
    sanityPage(id: "07891a7c-d81e-49e7-b8d3-0b2b51aac12a") {
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
    sanityPhotography(id: "de115ee8-e847-45f1-a4b9-e1d0fc69dffe") {
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

<script>
import SanityImage from '../components/SanityImage'
import InnerNav from '../components/InnerNav'
import BlockContent from '../components/BlockContent'

export default {
  name: 'Art',
  components: {
    SanityImage,
    InnerNav,
    BlockContent
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;

.art-section {
  position: relative;
  height: calc(100vh - 11.3rem);
  padding-top: 13rem;
  background: c.$slate-150;
  z-index: 0;
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
