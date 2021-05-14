<template>
  <nav>
    <div class="container">
      <g-link to="/"><div>Logo goes here</div></g-link>
      <div>
        <ul>
          <g-link to="/art/"><li>Art</li></g-link>
          <g-link to="/life/"><li>Life</li></g-link>
          <g-link to="/estate/"><li>Estate</li></g-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<static-query>
  query {
    metadata {
      sanityOptions {
        projectId
        dataset
      }
    }
  }
</static-query>

<script>
export default {
  name: 'Navigation',
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;

nav {
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 13rem;
  background: rgba(black, 0.5);
}

.container {
  width: min(100rem, 88%);
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  color: c.$grey-050;
}

ul {
  list-style: none;
  padding: 0;
  text-align: right;
  text-transform: uppercase;
  font-size: 2rem;
}
</style>
