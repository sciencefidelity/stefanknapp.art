<template>
  <div>
    <g-link
      v-if="$context.locale === 'en-gb'"
      :to="$tp(this.$route.path, this.availableLocales[1], true)"
    >
      <p class="language">PL</p>
    </g-link>
    <g-link
      v-else
      :to="$tp(this.$route.path, this.availableLocales[0], true) + '/'"
    >
      <p class="language">EN</p>
    </g-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "LocaleSwitcher",
  data: function () {
    return {
      availableLocales: this.$i18n.availableLocales
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

.language {
  font-size: 1.9rem;
  text-align: left;
  font-weight: 400;
  padding: 0.51em 0.7em;
  margin: 0;
  background-color: c.$grey-000;
  transition: background-color 0.4s;
  &:hover {
    background-color: c.$grey-100;
    transition: background-color 0.4s;
  }
  @include b.mq(sm) {
    font-size: 1.5rem;
  }
}

</style>
