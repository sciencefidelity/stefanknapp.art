<template>
  <nav>
    <div class="nav">
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
    </div>
    <div :class="[showMenu ? 'nav__active' : 'nav__inactive']">
      <ul>
        <li v-for="page in pages" :key="page._id" @click="toggleMenu()">
          <NuxtLink :to="localePath(`${page.slug.current}`)">
            {{ page.title.en.toUpperCase() }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { pageQuery } from "../data/queries"
import { Page } from "../generated/schema"

export default {
  name: "Navigation",
  data: () => ({
    _id: "",
    pages: [],
    showMenu: false,
    slug: "",
    title: ""
  }),
  async fetch() {
    const pageData: Page = await this.$sanity.fetch(pageQuery)
    this.pages = pageData
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu as boolean
    }
  }
}
</script>

<!-- prettier-ignore -->
<style lang="scss" scoped>
@use '../assets/css/colors' as c;
@use '../assets/css/breakpoints' as b;

::selection {
  background: rgba(c.$grey-100, 0.3);
}

.nav {
  z-index: 3;
  @include b.mq(lg) {
    top: 0;
    right: 0;
    padding: 0;
    font-size: 10px;
  }
  &__active,
  &__inactive {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -2;
    width: 100vw;
    height: 100vh;
    padding: 5em 3.3em 0 0;
    background: rgba(c.$grey-000, 0.9);
    @include b.mq(lg) {
      padding: 5em 3em 0 0;
    }
    @include b.mq(sm) {
      padding: 5.4em 1.8em 0 0;
    }
  }
  &__inactive {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    visibility: hidden;
    transition: clip-path 1s, visibility 0s;
    transition-delay: 0s, 1s;
    transition-timing-function: ease-out;
    transition-property: clip-path, visibility;
  }
  &__active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    visibility: visible;
    transition: clip-path 1s ease-in;
  }
}

a {
  display: inline;
  margin: auto;
  color: c.$grey-850;
  opacity: 0.6;
  transition: opacity 0.3s;
  &:hover {
    text-decoration: none;
    opacity: 1;
    transition: opacity 0.3s;
  }
}

.nuxt-link-exact-active {
  color: c.$grey-850;
  opacity: 1;
  &:hover {
    cursor: default;
    opacity: 1;
  }
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: right;
  padding: 0;
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2;
  list-style: none;
  @include b.mq(lg) {
    font-size: 5.5rem;
  }
  @include b.mq(sm) {
    font-size: 5rem;
  }
  li {
    position: relative;
    margin-left: auto;
  }
}

.hamburger {
  display: grid;
  width: 8em;
  height: 5.8em;
  margin: 9em 15em 3.5em auto;
  font-size: 5px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s;
  @include b.mq(lg) {
    margin: 7em 8.5em 2em auto;
    font-size: 5.5px;
  }
  @include b.mq(sm) {
    margin: 5.5em 5em 2em auto;
    font-size: 5px;
  }
  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }
  &__icon {
    position: relative;
    width: 8em;
    height: 0.4em;
    margin: 2.6em 0 3em;
    font-size: 6px;
    background-color: rgba(c.$grey-850, 1);
    transition: background-color 0s;
    transition-delay: 0.5s;
    @include b.mq(lg) {
      font-size: 5.5px;
    }
    @include b.mq(sm) {
      font-size: 5px;
    }
    &::before,
    &::after {
      position: absolute;
      display: block;
      width: 8em;
      height: 0.4em;
      content: '';
      background: c.$grey-850;
      transition: transform 0.5s, top 0.5s;
      transition-delay: 0s, 0.5s;
      transition-property: transform, top;
      transform: rotate(0);
    }
    &::before {
      top: -2.3em;
    }
    &::after {
      top: 2.3em;
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
