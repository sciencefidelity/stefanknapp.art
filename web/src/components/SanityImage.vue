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
      width: Number,
      height: Number,
      fit: {
        type: String,
        default: 'crop',
      },
      crop: {
        type: String,
        default: 'center',
      },
    }
  }
</script>
