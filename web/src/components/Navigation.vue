<template>
  <nav>
    <div class="container">
      <g-link to="/en"><div><Logo /></div></g-link>
      <div>
        <ul>
          <g-link to="/en/art"><li>Art</li></g-link>
          <g-link to="/en/life"><li>Life</li></g-link>
          <g-link to="/en/estate"><li>Estate</li></g-link>
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
import Logo from './Logo'

export default {
  name: 'Navigation',
  components: {
    Logo,
  }
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
  height: 18rem;
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
  color: c.$grey-350;
  &:hover{
    color: c.$grey-050;
  }
}

.active--exact {
  color: c.$grey-050;
}

ul {
  list-style: none;
  padding: 0;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2;
  text-align: right;
  text-transform: uppercase;
}
</style>
