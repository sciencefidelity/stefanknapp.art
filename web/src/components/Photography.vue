<template>
  <div class="gallery-container">
    <div v-for="edge in $static.photo.edges" :key="edge.node.id">
      <SanityImage
        :title="edge.node.title.en"
        :link="edge.node.mainImage"
        :width="edge.node.mainImage.asset.metadata.dimensions.width"
        :height="edge.node.mainImage.asset.metadata.dimensions.height"
        w=442
        h=400
      />
      <p class="caption">{{ edge.node.title.en }}, {{ edge.node.date }}</p>
    </div>
  </div>
</template>

<static-query>
  query {
    photo: allSanityPhotography {
      edges {
        node {
          id
          title {
            en
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

<script>

import SanityImage from './SanityImage'

export default {
  name: 'Gallery',
  components: {
    SanityImage,
  },
  data() {
    return {
      caption: [
        '1921-46 Beginnings',
        '1947-53 Early Phase',
        '1953-58 Success',
        '1958-72 A New Scale',
        '1973-82 Building on Success',
        '1982-96 Mature Years'
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;

.gallery-container {
  width: min(130rem, 88%);
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  div {
    margin-bottom: 3rem;
  }
}

.caption {
  margin-top: -3.2rem;
  text-align: right;
  font-size: 1.9rem;
  // font-weight: 300;
}

</style>
