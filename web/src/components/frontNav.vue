<template>
  <nav>
    <div class="front-nav">
      <div id="hamburger-container" @click="toggleMenu()">
        <span class="screen-reader-text">Main Menu</span>
        <div :class="[ showMenu ? 'hamburger x-active' : 'hamburger' ]"></div>
      </div>
      <div :class="[ showMenu ? 'active' : 'inactive' ]">
        <ul>
          <g-link
            v-if="$context.locale === 'en-gb'"
            to="/en/art"
          >
            <li data-fill="Art">
              Art
            </li>
          </g-link>
          <g-link v-else to="/pl/art">
            <li data-fill="Sztuka">
              Sztuka
            </li>
          </g-link>
          <g-link
            v-if="$context.locale === 'en-gb'"
            to="/en/life"
          >
            <li data-fill="Life">
              Life
            </li>
          </g-link>
          <g-link v-else to="/pl/life">
            <li data-fill="Życie">
              Życie
            </li>
          </g-link>
          <g-link
            v-if="$context.locale === 'en-gb'"
            to="/en/estate"
          >
            <li data-fill="Estate">
              Estate
            </li>
          </g-link>
          <g-link v-else to="/pl/estate">
            <li data-fill="Posiadłość">
              Posiadłość
            </li>
          </g-link>
        </ul>
        <div class="front-title--container">
          <p class="front-title">
            {{ $context.locale === "en-gb" ?
             'The Estate of Stefan Knapp' :
             'Posiadłość Stefana Knappa' }}
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'FrontNav',
  el: '#hamburger-container',
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
  z-index: 1;
  top: 0;
  left: 0;
  height: 18rem;
  margin-left: auto;
}

.front-nav {
  padding: 0 3.5rem 0 0;
  z-index: 1;
  @include b.mq(lg) {
    font: 1rem;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
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
  padding: 0 1.3rem 0 0;
  -webkit-text-stroke: 0.08rem c.$sepia-150;
  font-size: 4.45vw;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: right;
  display: flex;
  flex-direction: column;
  z-index: 10;
  @include b.mq(lg) {
    font-size: 10.5vw;
    line-height: 10.5vw;
    padding: 1.4em 0.3em 0 0;
  }
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
  font-size: 0.7vw;
  display: grid;
  cursor: pointer;
  height: 5.8em;
  width: 8em;
  margin: 3.7em 1.5em 6.5em auto;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s;
  z-index: 0;
  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }
  @include b.mq(lg) {
    font-size: 1.2vw;
    margin: 3.5em 2.5em 2em auto;
  }
}

// ******** animated hamburger ***********

@keyframes beforeto {
  from { transform: translateY(-2.6em) rotate(0); }
  50% { transform: translateY(0) rotate(0); }
  to { transform: translateY(0) rotate(0.125turn); }
}

@keyframes afterto {
  from { transform: translateY(2.2em) rotate(0); }
  50% { transform: translateY(-0.4em) rotate(0); }
  to { transform: translateY(-0.4em) rotate(-0.125turn); }
}

@keyframes beforeback {
  from { transform: translateY(0) rotate(0.125turn); }
  50% { transform: translateY(0) rotate(0); }
  to { transform: translateY(-2.6em) rotate(0); }
}

@keyframes afterback {
  from { transform: translateY(-0.4em) rotate(-0.125turn); }
  50% { transform: translateY(-0.4em) rotate(0); }
  to { transform: translateY(2.2em) rotate(0); }
}

.hamburger,
.x-active {
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
  @include b.mq(lg) {
    font-size: 1.2vw;

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
}

.x-active {
  background-color: rgba(c.$sepia-150, 0);
  transition: background-color 0s;
  transition-delay: 0.5s;
  &::before {
    transform: translateY(0) rotate(0.125turn);
    animation-duration: 1s;
    animation-name: beforeto;
  }
  &::after {
    transform: translateY(-0.4em)  rotate(-0.125turn);
    animation-duration: 1s;
    animation-name: afterto;
  }
}

.active,
.inactive {
  transition: clip-path 1s ease-in-out;
  z-index: -1;
  @include b.mq(lg) {
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(c.$grey-950, 0.8);
    width: 100vw;
    height: 100vw;
  }
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
  justify-content: flex-end;
  padding-top: 5rem;
  @include b.mq(lg) {
    padding-top: 0;
  }
}

.front-title {
  font-size: 3.25vw;
  text-transform: uppercase;
  white-space: nowrap;
  writing-mode: vertical-lr;
  @include b.mq(lg) {
    // display: none;
    font-size: 5vw;
    padding: 2.3em 0.8em;
    writing-mode: lr;
  }
}

</style>
