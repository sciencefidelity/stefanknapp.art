<template>
  <div class="layout">
    <Header />
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
    }
  }
</script>

<style scoped>
  body {
    color: red;
  }
</style>
