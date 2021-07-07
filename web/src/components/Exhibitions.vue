<template>
  <div>
    <h3 v-if="$context.locale === 'en-gb'">Selected exhibitions</h3>
    <h3 v-else>Wybrane wystawy</h3>
    <ul v-for="edge in $static.allSanityExhibition.edges" :key="edge.node.id">
      <li v-if="$context.locale === 'en-gb'">
        {{ edge.node.year }}&nbsp;&nbsp;&nbsp;&nbsp;{{ edge.node.gallery }}, {{ edge.node.location.en }} (solo)
      </li>
      <li v-else>
        <g-link :to="`/pl/${edge.node.slug.current}/`">
          {{ edge.node.year }}&nbsp;&nbsp;&nbsp;&nbsp;{{ edge.node.gallery }}, {{ edge.node.location.pl }} (solo)
        </g-link>
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
    name: 'Exhibitions'
  }
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}

</style>
