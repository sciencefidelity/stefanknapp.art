<template>
  <div>
    <h3 v-if="$context.locale === 'en-gb'">Selected exhibitions</h3>
    <h3 v-else>Wybrane wystawy</h3>
    <ul v-for="edge in $static.allSanityExhibition.edges" :key="edge.node.id">
      <li v-if="$context.locale === 'en-gb'" class="exhibitions--list">
        <div>{{ edge.node.year }}</div>
        <div>{{ edge.node.gallery }}, {{ edge.node.location.en }} (solo)</div>
      </li>
      <li v-else class="exhibitions--list">
        <div>{{ edge.node.year }}</div>
        <div>{{ edge.node.gallery }}, {{ edge.node.location.pl }} (solo)</div>
      </li>
    </ul>
  </div>
</template>

<static-query>
  query {
    allSanityExhibition(sortBy: "year", order: DESC) {
      edges {
        node {
          id
          gallery
          location {
            en
            pl
          }
          year
        }
      }
    }
  }
</static-query>

<script lang="ts">
export default {
  name: "Exhibitions"
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}

.exhibitions--list {
  display: flex;
  div:first-child {
    padding-right: 2rem;
  }
}
</style>
