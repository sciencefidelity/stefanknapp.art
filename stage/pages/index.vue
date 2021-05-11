<template>
  <section id="site-main">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 logo">
          <div class="knapp-image">
            <SanityImage
              asset-id="image-4de47b5ccfc29bd8cca028380b854bb40a48828d-2000x2534-jpg"
              auto="format"
              w=1000
              h=1000
              fit="crop"
              crop="top,left"
            />
          </div>
          <div class="circle">
            <div class="title"><h1>Knapp</h1></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="spacer"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 footer">
          <p class="footer-text"><span class="top-row">Galerie Günther Franke München &bull; Maximilianstraße 22, Telefon 226420</span><br />
          <span class="bottom-row">2. Februar bis Ende Februar 1968, geöffnet Montag mit Samstag 9 bis 17 Uhr</span></p>
        </div>
      </div>
    </div>
  </section><!-- .site-main -->
</template>

<script lang="ts">
import Vue from 'vue'
import { groq } from '@nuxtjs/sanity'

const query = groq`{ "photography": *[_type == "photography"][0].title.en }`
console.log()

export default {
  asyncData({ $sanity }) {
    return $sanity.fetch(query)
  },
}

</script>

<style>

</style>
