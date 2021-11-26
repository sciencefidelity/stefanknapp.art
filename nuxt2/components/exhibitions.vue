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
import { exhibitionQuery } from "../data/queries"
import { Exhibition } from "../generated/schema"

export default {
  name: "Exhibitions",
  data: () => ({
    exhibitions: []
  }),
  async fetch() {
    const exhibitionData: Exhibition = await this.$sanity.fetch(exhibitionQuery)
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
