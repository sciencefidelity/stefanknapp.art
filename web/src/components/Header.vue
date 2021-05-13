<template>
  <header>
    <SanityImage
      :title=title
      :link=link
    />
  </header>
</template>

<script>
  import SanityImage from './SanityImage'

  export default {
    name: 'Header',
    components: {
      SanityImage
    },
    props: {
      title: String,
      link: String,
    }
  }

</script>

<style scoped>
  header {
    width: 100vw;
    height: 100vh;
  }
</style>
