<template>
  <div class="layout">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "@/components/header.vue"
import Footer from "@/components/footer.vue"

export default {
  components: {
    Header,
    Footer
  }
}
</script>
