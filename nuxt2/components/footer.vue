<template>
  <footer>
    <div class="footer__container">
      <div class="footer__links">
        <div>
          <NuxtLink :to="localePath('index')">
            <img
              alt="Link to home"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23262626'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/%3E%3C/svg%3E"
              loading="lazy"
            />
          </NuxtLink>
        </div>
      </div>
      <p>
        &copy; {{ new Date().getFullYear() }} The Estate of
        <NuxtLink :to="localePath('index')">Stefan Knapp</NuxtLink>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer"
}
</script>

<!-- prettier-ignore -->
<style lang="scss" scoped>
@use '../assets/css/colors' as c;
@use '../assets/css/breakpoints' as b;

footer {
  position: relative;
  z-index: 2;
  display: flex;
  background: c.$grey-000;
}

.footer__container {
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: min(100rem, 88%);
  margin: auto;
  text-align: right;
  p {
    padding: 0.51em 0;
    margin: 0;
    font-size: 1.9rem;
    @include b.mq(sm) {
      font-size: 1.5rem;
    }
  }
}

.footer__links {
  display: flex;
}

.footer__btn {
  width: 3rem;
  padding: 1rem 0.7rem 1rem 0;
  @include b.mq(sm) {
    width: 2.7rem;
    padding: 0.7rem 0.7rem 1.3rem 0;
  }
}
</style>
