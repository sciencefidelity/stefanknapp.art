<template>
  <div class="layout">
    <Header />
    <Hero
      :title=title
      :link=link
      :width=width
      :height=height
      :crop=crop
      :pos=pos
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

<script>
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default {
  components: {
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
    pos: String,
  }
}
</script>
