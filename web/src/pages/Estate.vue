<template>
  <Layout>
    <div>
      This is the estate page
    </div>
  </Layout>
</template>

<static-query>
  query {
  sanityPage(id: "e0fb01c9-f899-4469-bdd5-b9d270d78024") {
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
  name: 'Estate'
}
</script>

<style scoped>

</style>
