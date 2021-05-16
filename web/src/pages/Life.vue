<template>
  <Layout
    :title="$static.sanityPage.mainImage.caption.en"
    :link="$static.sanityPage.mainImage"
    crop="top"
    pos="top"
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
      <section class="gallery-section">
        <Photography captions:caption />
      </section>
      <section class="video-section">
        <div class="video-wrapper">
          <VideoEmbedLife />
        </div>
      </section>
    </main>
  </Layout>
</template>

<static-query>
  query {
    sanityPage(id: "33e2b96d-3119-4538-baa5-dfd930453eb8") {
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
    sanityPhotography(id: "9cc83967-cbb5-465c-96c0-36a6208a7a29") {
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
import Photography from '../components/Photography'
import VideoEmbedLife from '../components/VideoEmbedLife'

export default {
  name: 'Life',
  components: {
    SanityImage,
    BlockContent,
    Photography,
    VideoEmbedLife
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

.gallery-section {
  position: relative;
  display: grid;
  place-content: center;
  background: hsl(0,0%,99%);
  padding: 15rem 0 18rem;
  overflow: hidden;
}

.video-section {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.video-wrapper {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
