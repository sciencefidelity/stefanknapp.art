<template>
  <nav>
    <div class="nav">
      <div class="hamburger" @click="toggleMenu()">
        <span class="screen-reader-text">Main Menu</span>
        <div :class="[ showMenu ? 'hamburger__icon hamburger__icon--active' : 'hamburger__icon' ]"></div>
      </div>
      <div :class="[ showMenu ? 'nav__active' : 'nav__inactive' ]">
        <ul v-for="edge in $static.allSanityPage.edges" :key="edge.node.id">
          <li v-if="$context.locale === 'en-gb'">
            <g-link  :to="`/en/${edge.node.slug.current}/`">
              {{ edge.node.title.en }}
            </g-link>
          </li>
          <li v-else>
            <g-link :to="`/pl/${edge.node.slug.current}/`">
              {{ edge.node.title.pl }}
            </g-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<static-query>
  query {
    allSanityPage(sortBy:"_createdAt", order:ASC) {
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
  background: rgba(c.$grey-150, 0.3);
}

.nav {
  padding: 0 3.5rem 0 0;
  z-index: 1;
  @include b.mq(lg) {
    font: 1rem;
    top: 0;
    right: 0;
    padding: 0;
  }
  &__active,
  &__inactive {
    transition: clip-path 1s ease-in-out;
    z-index: -1;
    @include b.mq(lg) {
      position: absolute;
      top: 0;
      right: 0;
      background: rgba(c.$grey-000, 1);
      width: 100vw;
      height: 100vh;
    }
  }
  &__inactive {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  &__active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

a {
  display: inline;
  color: c.$grey-650;
  margin: auto;
  opacity: 0.7;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }
}

ul {
  display: inline;
  list-style: none;
  padding: 0 2.8rem 0 0;
  font-size: 4vw;
  font-weight: 300;
  line-height: 1.2;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: right;
  @include b.mq(lg) {
    font-size: 9.8vw;
    line-height: 11.2vw;
    padding: 1.4em 0.3em 0 0;
  }
  li {
    margin-left: auto;
    position: relative;
  }
}

.hamburger {
  font-size: 0.4vw;
  display: grid;
  cursor: pointer;
  height: 5.8em;
  width: 8em;
  margin: 5em 5.5em 3.5em auto;
  cursor: pointer;
  opacity: 0.7;
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
    font-size: 0.4vw;
    position: relative;
    z-index: 1;
    width: 8em;
    height: 0.4em;
    margin: 2.6em 0 3em;
    background-color: rgba(c.$grey-650, 1);
    transition: background-color 0s;
    transition-delay: 0.5s;
    &::before,
    &::after {
      position: absolute;
      content: "";
      display: block;
      background: c.$grey-600;
      width: 8em;
      height: 0.4em;
      transform: rotate(0);
      transition: transform 0.5s, top 0.5s;
      transition-delay: 0s, 0.5s;
      transition-property: transform, top;
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
    @include b.mq(lg) {
      font-size: 1.2vw;
    }
  }
}

</style>
