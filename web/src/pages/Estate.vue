<template>
  <Layout
    :title="$static.sanityPage.mainImage.caption.en"
    :link="$static.sanityPage.mainImage"
  >
    <main>

    </main>
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
        caption {
          en
          pl
        }
        asset {
          _id
          url
        }
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
