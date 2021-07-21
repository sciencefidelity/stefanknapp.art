<template>
  <footer>
    <div class="footer__container">
      <div class="footer__links">
        <div v-if="$context.locale === 'en-gb'" class="footer__btn">
          <g-link to="/en">
            <img
              alt="Link to home"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23262626'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/%3E%3C/svg%3E"
              loading="lazy"
            />
          </g-link>
        </div>
        <div v-else class="footer__btn">
          <g-link to="/pl">
            <img
              alt="Link to home"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23262626'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/%3E%3C/svg%3E"
              loading="lazy"
            />
          </g-link>
        </div>
        <locale-switcher />
      </div>
      <p v-if="$context.locale === 'en-gb'">
        &copy; {{ year }} The Estate of <g-link to="/en">Stefan Knapp</g-link>
      </p>
      <p v-else>
        &copy; {{ year }} Posiadłość <g-link to="/pl">Stefana Knappa</g-link>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
export default {
  name: 'Footer',
  components: {
    LocaleSwitcher
  },
  data() {
    return {
      year: new Date().getFullYear(),
    }
  }
}

</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

footer {
  position: relative;
  background: c.$grey-000;
  display: flex;
  z-index: 2;
}

.footer__container {
  width: min(100rem, 88%);
  margin: auto;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-content: center;
  p {
    font-size: 1.9rem;
    margin: 0;
    padding: 0.51em 0;
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
