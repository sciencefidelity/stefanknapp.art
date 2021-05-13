<template>
  <Layout>
    <div>
      This is the art page
    </div>
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
      _rawEn
      _rawPl
    }
    mainImage {
      asset {
        url
      }
    }
  }
</static-query>

<script>

export default {
  name: 'Art'
}
</script>

<style scoped>

</style>
