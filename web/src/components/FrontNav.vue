<template>
  <nav>
    <div class="nav nav--front">
      <div class="hamburger" @click="toggleMenu()">
        <span class="screen-reader-text">Main Menu</span>
        <div :class="[ showMenu ? 'hamburger__icon hamburger__icon--active' : 'hamburger__icon' ]"></div>
      </div>
      <div :class="[ showMenu ? 'nav__active' : 'nav__inactive' ]">
        <ul v-for="edge in $static.allSanityPage.edges" :key="edge.node.id">
          <li v-if="$context.locale === 'en-gb'">
            <g-link  :to="`/en/${edge.node.slug.current}/`" :data-fill="edge.node.title.en">
              {{ edge.node.title.en }}
            </g-link>
          </li>
          <li v-else>
            <g-link :to="`/pl/${edge.node.slug.current}/`" :data-fill="edge.node.title.pl">
              {{ edge.node.title.pl }}
            </g-link>
          </li>
        </ul>
        <div class="nav__title-container">
          <p class="nav__title">
            {{ $context.locale === "en-gb" ?
             'The Estate of Stefan Knapp' :
             'Posiadłość Stefana Knappa' }}
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<static-query>
  query {
    allSanityPage(sortBy:"_createdAt", order: ASC) {
      edges {
        node {
          id
          title {
            en
            pl
          }
          slug {
            current
          }
        }
      }
    }
  }
</static-query>

<script lang="ts">

export default {
  name: 'FrontNav',
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

a {
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}

.nav {
  &--front {
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
  &__active,
  &__inactive {
    z-index: -1;
    @include b.mq(lg) {
      font-size: 9.8vw;
      position: absolute;
      padding: 1.2em 0 0 0;
      top: 0;
      right: 0;
      background: rgba(c.$grey-950, 0.8);
      width: 100vw;
      height: 100vh;
    }
  }
  &__inactive {
    visibility: hidden;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: clip-path 1s, visibility 0s;
    transition-delay: 0s, 1s;
    transition-property: clip-path, visibility;
    transition-timing-function: ease-out;
  }
  &__active {
    visibility: visible;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transition: clip-path 1s ease-in;
  }
  &__title-container {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding-top: 5rem;
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

a {
  display: inline;
  color: transparent;
  margin: auto;
}

ul {
  display: inline;
  list-style: none;
  padding: 0 1.3rem 0 0;
  -webkit-text-stroke: 0.08rem c.$sepia-150;
  font-size: 4.45vw;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: right;
  @include b.mq(lg) {
    font-size: 9.8vw;
    line-height: 12vw;
    padding: 0 0.3em 0 0;
  }
  li {
    margin-left: auto;
    position: relative;
    a {
      &:hover {
        text-decoration: none;
      }
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
        @include b.mq(sm) {
          width: 100%;
        }
      }
    }
  }
}

.hamburger {
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
  &__icon {
    font-size: 0.7vw;
    position: relative;
    z-index: 1;
    width: 8em;
    height: 0.4em;
    margin: 2.6em 0 3em;
    background-color: rgba(c.$sepia-150, 1);
    transition: background-color 0s;
    transition-delay: 0.5s;
    &::before,
    &::after {
      position: absolute;
      content: "";
      display: block;
      background: c.$sepia-150;
      width: 8em;
      height: 0.4em;
      transform: rotate(0);
      transition: transform 0.5s, top 0.5s;
      transition-delay: 0s, 0.5s;
      transition-property: transform, top;
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
    @include b.mq(lg) {
      font-size: 1.2vw;
    }
  }
}

</style>
