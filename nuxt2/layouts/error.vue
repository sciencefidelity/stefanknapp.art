<template>
  <main>
    <section class="fourohfour">
      <div>
        <h1>404: not found</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
        <p><NuxtLink :to="localePath('index')">Home page</NuxtLink></p>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
export default {
  props: ["error"]
}
</script>

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
