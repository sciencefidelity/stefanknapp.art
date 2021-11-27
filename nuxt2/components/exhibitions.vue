<template>
  <div>
    <h3>
      {{ $i18n.locale === "en" ? "Selected exhibitions" : "Wybrane wystawy" }}
    </h3>
    <ul v-for="exhibition in exhibitions" :key="exhibition._id">
      <li class="exhibitions--list">
        <div>{{ exhibition.year }}</div>
        <div>
          {{ exhibition.gallery }},
          {{ $i18n.locale === "en" ? exhibition.location.en : exhibition.location.pl }}
          (solo)
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import sanityClient from "../sanityClient"
import { exhibitionQuery } from "../data/queries"
import { Exhibition } from "../generated/schema"

export default {
  name: "Exhibitions",
  data: () => ({
    exhibitions: []
  }),
  async fetch() {
    const exhibitionData: Exhibition = await sanityClient.fetch(exhibitionQuery)
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
