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
    sanityPage(id: "07891a7c-d81e-49e7-b8d3-0b2b51aac12a") {
      title {
        en
        pl
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
    name: 'Art',
  }
</script>

<style scoped>

</style>
