<template>
  <div class="layout">
    <Header
      :resizeNav="resizeNav"
    />
    <Hero
      :title=title
      :link=link
      :width=width
      :height=height
      :crop=crop
      :pos=pos
    />
    <div class="down-intersect"><Observer @intersect="downIntersect"/>
    </div>
    <div class="up-intersect"><Observer @intersect="upIntersect"/>
    </div>
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
import Observer from "@/components/Observer.vue"
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Observer,
    Header,
    Hero,
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
