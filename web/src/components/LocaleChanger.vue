<template>
  <div>
    <g-link v-if="$context.locale === 'en-gb'" to="/pl"><p class="language">PL</p></g-link>
    <g-link v-else to="/en"><p class="language">EN</p></g-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "LocaleSwitcher"
}
</script>

<style lang="scss" scoped>

.language {
  font-size: 1.9rem;
  text-align: left;
  font-weight: 600;
  margin: 0;
}
</style>
