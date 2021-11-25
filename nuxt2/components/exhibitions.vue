<template>
  <div>
    <h3>Selected exhibitions</h3>
    <ul v-for="exhibition in exhibitions" :key="exhibition._id">
      <li class="exhibitions--list">
        <div>{{ exhibition.year }}</div>
        <div>{{ exhibition.gallery }}, {{ exhibition.location.en }} (solo)</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { groq } from "@nuxtjs/sanity"

interface ExhibitionProps {
  exhibition: [
    {
      _id: string
      gallery: string
      location: { _type: string; en: string; pl: string }
      solo: boolean
      year: number
    }
  ]
}

const exhibitionQuery = groq`*[_type == "exhibition"] | order(year) {
  _id, gallery, location, solo, year
}`

export default {
  name: "Exhibitions",
  data: () => ({
    exhibitions: []
  }),
  async fetch() {
    const exhibitionData: ExhibitionProps = await this.$sanity.fetch(
      exhibitionQuery
    )
    this.exhibitions = exhibitionData
  }
}
</script>

<!-- prettier-ignore -->
<style lang="scss" scoped>
ul {
  padding: 0;
  list-style: none;
}

.exhibitions--list {
  display: flex;
  div:first-child {
    padding-right: 2rem;
  }
}
</style>
