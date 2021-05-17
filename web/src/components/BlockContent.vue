<template>
  <portable-text
    :blocks="blocks"
    :projectId="$static.metadata.sanityOptions.projectId"
    :dataset="$static.metadata.sanityOptions.dataset"
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

<script lang="ts">
import PortableText from 'sanity-blocks-vue-component'
export default {
  props: {
    blocks: Array
  },
  components: {
    PortableText
  },
}
</script>
