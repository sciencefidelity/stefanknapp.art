<template>
  <footer>
    <div class="container">
      <p>&copy; {{ year }} The Estate of <b>Stefan Knapp</b></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}

</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;

footer {
  height: 4.4rem;
  background: c.$slate-100;
  display: flex;
}

.container {
  width: min(100rem, 88%);
  margin: auto;
  text-align: right;
  p {
    font-size: 1.9rem;
  }
}
</style>
