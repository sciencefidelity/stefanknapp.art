<template>
  <img
    :alt=title
    :src="$urlForImage(link, $static.metadata.sanityOptions)
      .format('webp')
      .auto('format')
      .quality(75)
      .fit(fit)
      .crop(crop)
      .width(width)
      .height(height)
      .url()"
    :width=width
    :height=height
    loading="lazy"
  />
</template>

<static-query>
  query {
    metadata {
      sanityOptions {
        projectId
        dataset
      }
    }
  }
</static-query>

<script>
  export default {
    name: 'SanityImage',
    props: {
      title: String,
      link: String,
      width: String,
      height: String,
      fit: {
        type: String,
        default: 'clip',
      },
      crop: {
        type: String,
        default: 'center',
      },
    }
  }
</script>

<style lang="scss" scoped>
  img {
    object-fit: cover;
    width: 100%;
    height: 100vh;
  }
</style>
