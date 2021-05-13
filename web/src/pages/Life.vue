<template>
  <Layout>
    <div>
      This is the life page
    </div>
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
  name: 'Life'
}
</script>

<style scoped>

</style>
