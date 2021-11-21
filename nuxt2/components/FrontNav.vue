<template>
  <nav>
    <div class="nav nav--front">
      <div class="hamburger" @click="toggleMenu()">
        <span class="screen-reader-text">Main Menu</span>
        <div
          :class="[
            showMenu
              ? 'hamburger__icon hamburger__icon--active'
              : 'hamburger__icon'
          ]"
        ></div>
      </div>
      <div :class="[showMenu ? 'nav__active' : 'nav__inactive']">
        <ul>
          <li v-for="edge in $static.allSanityPage.edges" :key="edge.node.id">
            <NuxtLink
              :to="`/en/${edge.node.slug.current}/`"
              :data-fill="edge.node.title.en"
            >
              {{ edge.node.title.en }}
            </NuxtLink>
          </li>
        </ul>
        <div class="nav__title-container">
          <p class="nav__title">The Estate of Stefan Knapp</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "FrontNav",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu(): boolean {
      return (this.showMenu = !this.showMenu)
    }
  }
})
</script>

<style lang="scss" scoped>
@use "../assets/css/colors" as c;
@use "../assets/css/breakpoints" as b;

::selection {
  background: rgba(c.$sepia-150, 0.3);
}

nav {
  height: 18rem;
  left: 0;
  margin-left: auto;
  top: 0;
  z-index: 1;
}

.nav {
  &--front {
    padding: 0 3.5rem 0 0;
    z-index: 1;
    @include b.mq(lg) {
      font: 1rem;
      padding: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  &__active,
  &__inactive {
    z-index: -1;
    @include b.mq(lg) {
      background: rgba(c.$grey-950, 0.8);
      font-size: 9.8vw;
      height: 100vh;
      padding: 1.2em 0 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100vw;
    }
  }
  &__inactive {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: clip-path 1s, visibility 0s;
    transition-delay: 0s, 1s;
    transition-property: clip-path, visibility;
    transition-timing-function: ease-out;
    visibility: hidden;
  }
  &__active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transition: clip-path 1s ease-in;
    visibility: visible;
  }
  &__title-container {
    display: flex;
    justify-content: flex-end;
    padding-top: 5rem;
    width: 100%;
    @include b.mq(lg) {
      padding-top: 0;
    }
  }
  &__title {
    font-size: 3.25vw;
    text-transform: uppercase;
    white-space: nowrap;
    writing-mode: vertical-lr;
    @include b.mq(lg) {
      font-size: 5vw;
      padding: 2em 0.8em;
      writing-mode: lr;
    }
  }
}

ul {
  display: inline;
  display: flex;
  flex-direction: column;
  font-size: 4.45vw;
  font-weight: 600;
  justify-content: right;
  line-height: 1.2;
  list-style: none;
  padding: 0 1.3rem 0 0;
  -webkit-text-stroke: 0.08rem c.$sepia-150;
  text-transform: uppercase;
  @include b.mq(lg) {
    font-size: 9.8vw;
    line-height: 12vw;
    padding: 0 0.3em 0 0;
  }
  li {
    margin-left: auto;
    position: relative;
    a {
      color: transparent;
      display: inline;
      margin: auto;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
      &::before {
        background-clip: text;
        background-color: c.$sepia-150;
        content: attr(data-fill);
        display: inline;
        left: 0;
        position: absolute;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-color: c.$sepia-150;
        -webkit-text-stroke-width: 0.015em;
        top: 0;
        transition-delay: initial;
        transition-duration: 0.7s;
        transition-property: width;
        transition-timing-function: cubic-bezier(0.19, 1, 0.4, 1);
        width: 0%;
        @include b.mq(sm) {
          width: 100%;
        }
      }
      &:hover::before {
        width: 100%;
      }
    }
  }
}

.hamburger {
  cursor: pointer;
  display: grid;
  font-size: 0.7vw;
  height: 5.8em;
  margin: 3.7em 1.5em 6.5em auto;
  opacity: 0.5;
  transition: opacity 0.3s;
  width: 8em;
  z-index: 0;
  @include b.mq(lg) {
    font-size: 1.2vw;
    margin: 3.5em 2.5em 2em auto;
  }
  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }
  &__icon {
    background-color: rgba(c.$sepia-150, 1);
    font-size: 0.7vw;
    height: 0.4em;
    margin: 2.6em 0 3em;
    position: relative;
    transition: background-color 0s;
    transition-delay: 0.5s;
    width: 8em;
    z-index: 1;
    @include b.mq(lg) {
      font-size: 1.2vw;
    }
    &::before,
    &::after {
      background: c.$sepia-150;
      content: "";
      display: block;
      height: 0.4em;
      position: absolute;
      transform: rotate(0);
      transition: transform 0.5s, top 0.5s;
      transition-delay: 0s, 0.5s;
      transition-property: transform, top;
      width: 8em;
    }
    &::before {
      top: -2.6em;
    }
    &::after {
      top: 2.6em;
    }
    &--active {
      background-color: rgba(c.$sepia-150, 0);
      transition: background-color 0s;
      transition-delay: 0.5s;
      &::before,
      &::after {
        top: 0;
        transition: top 0.5s, transform 0.5s;
        transition-delay: 0s, 0.5s;
        transition-property: top, transform;
      }
      &::before {
        transform: rotate(0.125turn);
      }
      &::after {
        transform: rotate(-0.125turn);
      }
    }
  }
}
</style>
