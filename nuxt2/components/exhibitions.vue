<script lang="ts">
import { Vue, Options } from "vue-property-decorator"
import sanityClient from "../sanityClient"
import { exhibitionQuery } from "../data/queries"
import { Exhibition } from "../generated/schema"

@Options({
  name: "Exhibitions",
  async fetch() {
    const exhibitionData: Exhibition = await sanityClient.fetch(exhibitionQuery)
    this.exhibitions = exhibitionData as Exhibition
  }
})
export default class Exhibitions extends Vue {}
</script>

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
