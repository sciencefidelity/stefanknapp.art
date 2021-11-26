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
          <li v-for="page in pages" :key="page.id">
            <NuxtLink
              :to="localePath(`${page.slug.current}`)"
              :data-fill="page.title.en.toUpperCase()"
            >
              {{ page.title.en.toUpperCase() }}
            </NuxtLink>
          </li>
        </ul>
        <div class="nav__title-container">
          <p class="nav__title">{{ title.en.toUpperCase() }}</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { pageQuery, metaQuery } from "../data/queries"
import { Meta, Page } from "../generated/schema"

export default {
  name: "FrontNav",
  data: () => ({
    showMenu: false,
    pages: [],
    title: ""
  }),
  async fetch() {
    const pageData: Page = await this.$sanity.fetch(pageQuery)
    const metaData: Meta = await this.$sanity.fetch(metaQuery)

    this.pages = pageData
    this.title = metaData.title
  },
  methods: {
    toggleMenu() {
      return (this.showMenu = !this.showMenu) as boolean
    }
  }
}
</script>

<!-- prettier-ignore -->
<style lang="scss" scoped>
@use '../assets/css/colors' as c;
@use '../assets/css/breakpoints' as b;

::selection {
  background: rgba(c.$sepia-150, 0.3);
}

nav {
  top: 0;
  left: 0;
  z-index: 1;
  height: 18rem;
  margin-left: auto;
}

.nav {
  &--front {
    z-index: 1;
    padding: 0 3.5rem 0 0;
    @include b.mq(lg) {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0;
      font-size: 1rem;
    }
  }
  &__active,
  &__inactive {
    z-index: -1;
    @include b.mq(lg) {
      position: absolute;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      padding: 1.2em 0 0;
      font-size: 9.8vw;
      background: rgba(c.$grey-950, 0.8);
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
  &__title-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-top: 5rem;
    @include b.mq(lg) {
      padding-top: 0;
    }
  }
  &__title {
    font-size: 3.25vw;
    white-space: nowrap;
    writing-mode: vertical-lr;
    @include b.mq(lg) {
      padding: 2em 0.8em;
      font-size: 5vw;
      writing-mode: lr;
    }
  }
}

ul {
  display: inline;
  display: flex;
  flex-direction: column;
  justify-content: right;
  padding: 0 1.3rem 0 0;
  font-size: 4.45vw;
  font-weight: 600;
  line-height: 1.2;
  list-style: none;
  -webkit-text-stroke: 0.08rem c.$sepia-150;
  @include b.mq(lg) {
    padding: 0 0.3em 0 0;
    font-size: 9.8vw;
    line-height: 12vw;
  }
  li {
    position: relative;
    margin-left: auto;
    a {
      display: inline;
      margin: auto;
      color: transparent;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        display: inline;
        width: 0%;
        content: attr(data-fill);
        background-color: c.$sepia-150;
        background-clip: text;
        transition-delay: initial;
        transition-timing-function: cubic-bezier(0.19, 1, 0.4, 1);
        transition-duration: 0.7s;
        transition-property: width;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-color: transparent;
        -webkit-text-stroke-width: 0.015em;
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
  z-index: 0;
  display: grid;
  width: 8em;
  height: 5.8em;
  margin: 3.7em 1.5em 6.5em auto;
  font-size: 0.7vw;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s;
  @include b.mq(lg) {
    margin: 3.5em 2.5em 2em auto;
    font-size: 1.2vw;
  }
  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }
  &__icon {
    position: relative;
    z-index: 1;
    width: 8em;
    height: 0.4em;
    margin: 2.6em 0 3em;
    font-size: 0.7vw;
    background-color: rgba(c.$sepia-150, 1);
    transition: background-color 0s;
    transition-delay: 0.5s;
    @include b.mq(lg) {
      font-size: 1.2vw;
    }
    &::before,
    &::after {
      position: absolute;
      display: block;
      width: 8em;
      height: 0.4em;
      content: '';
      background: c.$sepia-150;
      transition: transform 0.5s, top 0.5s;
      transition-delay: 0s, 0.5s;
      transition-property: transform, top;
      transform: rotate(0);
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
