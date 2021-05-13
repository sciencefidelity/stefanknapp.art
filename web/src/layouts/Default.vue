<template>
  <div class="layout">
    <Header
      :title=title
      :link=link
    />
    <slot/>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'

  export default {
    components: {
      Header,
      Footer,
    },
    props: {
      title: String,
      link: String,
    }
  }
</script>

<style scoped>

</style>
