<template>
  <nav>
    <div class="container">
      <g-link to="/en" class="logo-link"><div>
        <Logo logoSize="24rem" fill="hsl(0,0%, 05%)" />
      </div></g-link>
      <div>
        <ul>
          <g-link to="/en/art"><li>Art</li></g-link>
          <g-link to="/en/life"><li>Life</li></g-link>
          <g-link to="/en/estate"><li>Estate</li></g-link>
          <g-link to="/pl"><li class="language">Polski</li></g-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo'

export default {
  name: 'InnerNav',
  components: {
    Logo,
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;

nav {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 11.3rem;
  background: c.$grey-050;
  box-shadow: 0 5px 10px rgba(black, 0.1);
  z-index: 5;
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
  position: relative;
  color: c.$grey-600;
  z-index: 2;
  transition: color 0.3s ease;
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    width: 6.2rem;
    height: 6.2rem;
    border-radius: 50%;
    border: 0.08em solid c.$grey-950;;
    filter: blur(0.3em);
    display: block;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover{
    color: c.$grey-950;
    transition: color 0.3s ease;
  }
}

.active--exact {
  color: c.$grey-950;
  &::before {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
}

ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2;
  text-align: right;
  text-transform: uppercase;
  li {
    padding: 0 1.8rem;
  }
}

.language {
  text-transform: capitalize;
  font-weight: 400;
  color: c.$grey-750;
}
</style>
