<template>
  <div class="gallery-container">
    <div>
      <SanityImage
        :title="$static.first.title.en"
        :link="$static.first.mainImage"
        :width="$static.first.mainImage.asset.metadata.dimensions.width"
        :height="$static.first.mainImage.asset.metadata.dimensions.height"
        w=442
        h=400
      />
      <p v-if="$context.locale === 'en-gb'" class="caption">{{ captionEn[0] }}</p>
      <p v-else class="caption">{{ captionPl[0] }}</p>
    </div>
    <div>
      <SanityImage
        :title="$static.second.title.en"
        :link="$static.second.mainImage"
        :width="$static.second.mainImage.asset.metadata.dimensions.width"
        :height="$static.second.mainImage.asset.metadata.dimensions.height"
        w=442
        h=400
      />
      <p v-if="$context.locale === 'en-gb'" class="caption">{{ captionEn[1] }}</p>
      <p v-else class="caption">{{ captionPl[1] }}</p>
    </div>
    <div>
      <SanityImage
        :title="$static.third.title.en"
        :link="$static.third.mainImage"
        :width="$static.third.mainImage.asset.metadata.dimensions.width"
        :height="$static.third.mainImage.asset.metadata.dimensions.height"
        w=442
        h=400
      />
      <p v-if="$context.locale === 'en-gb'" class="caption">{{ captionEn[2] }}</p>
      <p v-else class="caption">{{ captionPl[2] }}</p>
    </div>
    <div>
      <SanityImage
        :title="$static.forth.title.en"
        :link="$static.forth.mainImage"
        :width="$static.forth.mainImage.asset.metadata.dimensions.width"
        :height="$static.forth.mainImage.asset.metadata.dimensions.height"
        w=442
        h=400
      />
      <p v-if="$context.locale === 'en-gb'" class="caption">{{ captionEn[3] }}</p>
      <p v-else class="caption">{{ captionPl[3] }}</p>
    </div>
    <div>
      <SanityImage
        :title="$static.fifth.title.en"
        :link="$static.fifth.mainImage"
        :width="$static.fifth.mainImage.asset.metadata.dimensions.width"
        :height="$static.fifth.mainImage.asset.metadata.dimensions.height"
        w=442
        h=400
      />
      <p v-if="$context.locale === 'en-gb'" class="caption">{{ captionEn[4] }}</p>
      <p v-else class="caption">{{ captionPl[4] }}</p>
    </div>
    <div>
      <SanityImage
        :title="$static.sixth.title.en"
        :link="$static.sixth.mainImage"
        :width="$static.sixth.mainImage.asset.metadata.dimensions.width"
        :height="$static.sixth.mainImage.asset.metadata.dimensions.height"
        w=442
        h=400
      />
      <p v-if="$context.locale === 'en-gb'" class="caption">{{ captionEn[5] }}</p>
      <p v-else class="caption">{{ captionPl[5] }}</p>
    </div>
  </div>
</template>

<static-query>
  query {
    first: sanityArtwork(id: "53c23fd3-8d48-48ed-9915-e282a1699dcc") {
      title {
        en
      }
      id
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
    second: sanityArtwork(id: "a689ab42-e69c-409e-bcf6-e9bb0a12032c") {
      title {
        en
      }
      id
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
    third: sanityArtwork(id: "b8554a67-22dc-44de-8ce6-710d4581aca2") {
      title {
        en
      }
      id
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
    forth: sanityArtwork(id: "1f403a9c-0bfc-4df1-93cf-54cfaf45683e") {
      title {
        en
      }
      id
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
    fifth: sanityArtwork(id: "0cfd2c7f-f267-4759-beec-7e66dba09ed4") {
      title {
        en
      }
      id
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
    sixth: sanityArtwork(id: "244224ec-8fa1-42cb-9e33-6fea1f96e6f9") {
      title {
        en
      }
      id
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
</static-query>

<script lang="ts">
import SanityImage from './SanityImage'

export default {
  name: 'Gallery',
  components: {
    SanityImage,
  },
  data() {
    return {
      captionEn: [
        '1921-46 Beginnings',
        '1947-53 Early Phase',
        '1953-58 Success',
        '1958-72 A New Scale',
        '1973-82 Building on Success',
        '1982-96 Mature Years'
      ],
      captionPl: [
        '1921-46 Początki',
        '1947-53 Faza wczesna',
        '1953-58 Sukces',
        '1958-72 Nowa skala',
        '1973-82 Bazując na sukcesie',
        '1982-96 Dojrzałe lata'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

.gallery-container {
  width: min(130rem, 88%);
  margin: auto;
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
