<script lang="ts">
import { Vue, Options } from "vue-property-decorator"

@Options({
  name: "Error"
})
export default class Error extends Vue {
  props: ["error"]
}
</script>

<template>
  <main>
    <section class="fourohfour">
      <div>
        <h1>
          {{ $i18n.locale === "en" ? "404: Not found" : "404 Nie Znaleziono" }}
        </h1>
        <p>
          {{
            $i18n.locale === "en"
              ? "You just hit a route that doesn't exist... the sadness."
              : "Po prostu trafiłeś na trasę, która nie istnieje ... smutek."
          }}
        </p>
        <p>
          <NuxtLink :to="localePath('index')">{{
            $i18n.locale === "en" ? "Home page" : "Strona główna"
          }}</NuxtLink>
        </p>
      </div>
    </section>
  </main>
</template>

<!-- prettier-ignore -->
<style lang="scss" scoped>
@use '../assets/css/colors' as c;
@use '../assets/css/breakpoints' as b;

.fourohfour {
  display: grid;
  place-content: center;
  height: calc(100vh - 4.4rem);
  background: c.$grey-000;
  @include b.mq(sm) {
    padding-top: 10rem;
  }
}

h1,
p {
  display: block;
  text-align: center;
}

h1 {
  font-size: 5rem;
  text-transform: uppercase;
  @include b.mq(sm) {
    font-size: 2.5rem;
  }
}

p {
  font-size: 2.2rem;
  @include b.mq(sm) {
    font-size: 1.6rem;
  }
}
</style>
