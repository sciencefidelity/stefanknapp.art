<template>
  <nav>
    <div class="front-nav">
      <ul>
        <g-link to="/en/art"><li data-fill="Art">Art</li></g-link>
        <g-link to="/en/life"><li data-fill="Life">Life</li></g-link>
        <g-link to="/en/estate"><li data-fill="Estate">Estate</li></g-link>
      </ul>
      <p class="front-title">The Estate of Stefan Knapp</p>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo'

export default {
  name: 'FrontNav',
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;

::selection {
  background: rgba(c.$sepia-150, 0.3);
}

nav {
  z-index: 3;
  // position: absolute;
  top: 0;
  left: 0;
  // width: 100%;
  height: 18rem;
  margin-left: auto;
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
  color: transparent;
  transition: color 0.3s ease;
  &:hover{
    // color: c.$sepia-150;
    transition: color 0.3s ease;
  }
}

ul {
  list-style: none;
  padding: 0 5rem 0 0;
  -webkit-text-stroke: 0.08rem c.$sepia-150;
  font-size: 6.5rem;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: right;
  display: flex;
  flex-direction: column;
  li {
    display: inline-block;
    position: relative;
    text-align: right;
    &:hover::before {
      width: 100%;
    }
    &::before {
      content: attr(data-fill);
      position: absolute;
      display: inline;
      top: 0;
      left: 0;
      width: 0%;
      transition-duration: 0.7s;
      transition-timing-function: cubic-bezier(0.19, 1, 0.4, 1);
      transition-delay: initial;
      transition-property: all;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-stroke-width: 0.015em;
      -webkit-text-stroke-color: c.$sepia-150;
      background-color: c.$sepia-150;
    }
  }
}

.front-title {
  position: absolute;
  right: -21rem;
  top: 67rem;
  transform: rotate(90deg);
  text-transform: uppercase;
  font-size: 4.7rem;
  white-space: nowrap;
}
</style>
