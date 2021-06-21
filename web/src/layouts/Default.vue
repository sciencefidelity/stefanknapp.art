<template>
  <div class="layout">
    <Header
      :resizeNav="resizeNav"
    />
    <slot />
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

<script lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  props: {
    title: String,
    link: Object,
    width: Number,
    height: Number,
    crop: String,
    pos: String
  },
  data() {
    return {
      resizeNav: Boolean
    }
  },
  methods: {
    downIntersect() {
      this.resizeNav = false
    },
    upIntersect() {
      this.resizeNav = true
    }
  },
  mounted() {
    if (document.body.scrollTop < 500 || document.documentElement.scrollTop < 500) {
      this.resizeNav = false
    }
  }
}
</script>

<style lang="scss" scoped>
.down-intersect {
  position: absolute;
  left:50%;
  top: 162vh;
  z-index: 20;
}
.up-intersect {
  position: absolute;
  left:50%;
  top: 50vh;
  z-index: 20;
}
</style>
