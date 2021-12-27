<script lang="ts">
import { Vue, Options } from "vue-property-decorator"
import Header from "@/components/header.vue"
import Footer from "@/components/footer.vue"

@Options({
  name: Default,
  components: {
    Header,
    Footer
  }
})
export default class Default extends Vue {}
</script>

<template>
  <div class="layout">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
