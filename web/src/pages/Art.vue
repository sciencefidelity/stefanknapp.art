<template>
  <Layout
    :title="$static.sanityPage.mainImage.caption.en"
    :link="$static.sanityPage.mainImage"
    :width="$static.sanityPage.mainImage.asset.metadata.dimensions.width"
    :height="$static.sanityPage.mainImage.asset.metadata.dimensions.height"
  >
    <main>
      <section class="art-section">
        <div class="container">
          <block-content
            class="post__content"
            :blocks="$static.sanityPage.body._rawEn"
            v-if="$static.sanityPage.body._rawEn"
          />
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
  }
</static-query>

<script>
import BlockContent from '../components/BlockContent'

export default {
  name: 'Art',
  components: {
    BlockContent
  }
}
</script>

<style scoped>
.art-section {
  height: 100vh;
}

.container {
  width: min(100rem, 88%);
  margin: auto;
}
</style>
