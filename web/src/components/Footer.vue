<template>
  <footer>
    <div class="container-footer">
      <g-link to="/pl"><p class="language">PL</p></g-link>
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
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 4.4rem;
  background: c.$slate-100;
  display: flex;
  z-index: 5;
}

.container-footer {
  width: min(100rem, 88%);
  margin: auto;
  text-align: right;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 1.9rem;
  }
}

.language {
  text-align: left;
  font-weight: 600;
}
</style>
