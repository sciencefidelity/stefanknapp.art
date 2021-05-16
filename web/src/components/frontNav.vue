<template>
  <nav>
    <div class="front-nav">
      <div id="hamburger-container" @click="toggleMenu()">
        <span class="screen-reader-text">Main Menu</span>
        <div :class="[ showMenu ? 'hamburger x-active' : 'hamburger' ]"></div>
      </div>
      <div :class="[ showMenu ? 'active' : 'inactive' ]">
        <ul>
          <g-link to="/en/art"><li data-fill="Art">Art</li></g-link>
          <g-link to="/en/life"><li data-fill="Life">Life</li></g-link>
          <g-link to="/en/estate"><li data-fill="Estate">Estate</li></g-link>
        </ul>
        <div class="front-title--container"><p class="front-title">The Estate of Stefan Knapp</p></div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo'

export default {
  name: 'FrontNav',
  el:"#hamburger-container",
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

::selection {
  background: rgba(c.$sepia-150, 0.3);
}

nav {
  z-index: 3;
  top: 0;
  left: 0;
  height: 18rem;
  margin-left: auto;
}

.front-nav {
  padding: 0 3.5rem 0 0;
  @include b.mq(lg) {
    display: none;
  }
}

a {
  color: transparent;
  transition: color 0.3s ease;
  &:hover{
    transition: color 0.3s ease;
  }
}

ul {
  list-style: none;
  // padding: 0 5rem 0 0;
  padding: 0 1.3rem 0 0;
  -webkit-text-stroke: 0.08rem c.$sepia-150;
  font-size: 4.45vw;
  // font-size: 6.4rem;
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
      transition-property: width;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-stroke-width: 0.015em;
      -webkit-text-stroke-color: c.$sepia-150;
      background-color: c.$sepia-150;
    }
  }
}

#hamburger-container {
  // font-size: 1rem;
  font-size: 0.7vw;
  display: grid;
  cursor: pointer;
  height: 5.8em;
  width: 8em;
  margin: 3.7em 1.5em 6.5em auto;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }
}

@keyframes beforeto {
  from { transform: translateY(-2.6em) rotate(0); }
  50% { transform: translateY(0) rotate(0); }
  to { transform: translateY(0) rotate(0.125turn); }
}

@keyframes afterto {
  from { transform: translateY(2.2em) rotate(0); }
  50% { transform: translateY(-0.4rem) rotate(0); }
  to { transform: translateY(-0.4rem) rotate(-0.125turn); }
}

@keyframes beforeback {
  from { transform: translateY(0) rotate(0.125turn); }
  50% { transform: translateY(0) rotate(0); }
  to { transform: translateY(-2.6em) rotate(0); }
}

@keyframes afterback {
  from { transform: translateY(-0.4rem) rotate(-0.125turn); }
  50% { transform: translateY(-0.4rem) rotate(0); }
  to { transform: translateY(2.2em) rotate(0); }
}

.hamburger,
.x-active {
  // font-size: 1rem;
  font-size: 0.7vw;
  position: relative;
  z-index: 1;
  width: 8em;
  height: 0.4em;
  margin: 2.6em 0 3em;
  &::before,
  &::after {
    content: "";
    display: block;
    background: c.$sepia-150;
    width: 8em;
    height: 0.4em;
  }
}

.hamburger {
  background-color: rgba(c.$sepia-150, 1);
  transition: background-color 0s;
  transition-delay: 0.5s;
  &::before {
    transform: translateY(-2.6em) rotate(0);
    animation-duration: 1s;
    animation-name: beforeback;
  }
  &::after {
    transform: translateY(2.2em) rotate(0);
    animation-duration: 1s;
    animation-name: afterback;
  }
  // &::before,
  // &::after {
    // transition: rotate 0.5s, transform 0.5s;
    // transition-property: rotate, transform;
    // transition-delay: 0s, 0.5s;
  // }
}

.x-active {
  background-color: rgba(c.$sepia-150, 0);
  transition: background-color 0s;
  transition-delay: 0.5s;
  &::before {
    transform: translateY(0) rotate(0.125turn);
    // rotate: 45deg;
    animation-duration: 1s;
    animation-name: beforeto;
  }
  &::after {
    transform: translateY(-0.4rem)  rotate(-0.125turn);
    // rotate: -45deg;
    animation-duration: 1s;
    animation-name: afterto;
  }
  // &::before,
  // &::after {
    // transition: transform 0.5s, rotate 0.5s;
    // transition-property: transform, rotate;
    // transition-delay: 0s, 0.5s;
  // }
}

.active,
.inactive {
  // height: 90rem;
  transition: clip-path 1s ease-in-out;
  // padding: 0 3.5rem 0 0;
}

.inactive {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}

.active {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.front-title--container {
  display: flex;
  width: 100%;
  justify-content: end;
  // padding: 5rem 3.5rem 0 0;
  padding-top: 5rem;
}

.front-title {
  font-size: 3.25vw;
  // font-size: 4.7rem;
  text-transform: uppercase;
  white-space: nowrap;
  writing-mode: vertical-lr;
}

</style>
