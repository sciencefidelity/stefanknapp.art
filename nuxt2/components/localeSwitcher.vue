<script lang="ts">
import { Vue, Options } from "vue-property-decorator"
// import ILocale from "~/types/vue/Locales"

@Options({
  name: "LocaleSwitcher",
})
export default class LocaleSwitcher extends Vue {
  get availableLocales() {
    return this.$i18n.locales.filter(l => l.code !== this.$i18n.locale)
  }
}
</script>

<template>
  <div>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      ><p class="language">{{ locale.name }}</p>
    </nuxt-link>
  </div>
</template>

<!-- prettier-ignore -->
<style lang="scss" scoped>
@use '../assets/css/colors' as c;
@use '../assets/css/breakpoints' as b;

.language {
  padding: 0.51em 0.7em;
  margin: 0;
  font-size: 1.9rem;
  font-weight: 400;
  text-align: left;
  background-color: c.$grey-000;
  transition: background-color 0.4s;
  @include b.mq(sm) {
    font-size: 1.5rem;
  }
}
</style>
