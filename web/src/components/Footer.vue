<template>
  <footer>
    <div class="container-footer">
      <LocaleChanger />
      <p v-if="$context.locale === 'en-gb'">
        &copy; {{ year }} The Estate of <b>Stefan Knapp</b>
      </p>
      <p v-else>
        &copy; {{ year }} Posiadłość <b>Stefana Knappa</b>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import LocaleChanger from './LocaleChanger'
export default {
  name: 'Footer',
  components: {
    LocaleChanger
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

footer {
  position: relative;
  height: 4.4rem;
  background: c.$slate-100;
  display: flex;
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
  }
}

.language {
  text-align: left;
  font-weight: 600;
}
</style>
