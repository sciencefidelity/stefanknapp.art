<template>
  <footer>
    <div class="container-footer">
      <locale-switcher />
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

.container-footer {
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

.language {
  text-align: left;
  font-weight: 600;
}
</style>
