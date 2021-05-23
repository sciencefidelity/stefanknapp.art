<template>
  <nav :class="[ resizeNav ? 'nav--big' : 'nav--small' ]">
    <div class="container">
      <g-link v-if="$context.locale === 'en-gb'" to="/en/"><div>
        <span class="screen-reader-text">Estate of Stefan Knapp - home</span>
        <logo :resizeLogo="resizeNav"/>
      </div></g-link>
      <g-link  v-else to="/pl/"><div>
        <span class="screen-reader-text">Posiadłość Stefana Knappa - dom</span>
        <logo :resizeLogo="resizeNav"/>
      </div></g-link>
      <div>
        <ul :class="[ resizeNav ? 'menu--big' : 'menu--small' ]">
          <li v-if="$context.locale === 'en-gb'" class="art">
            <g-link
              to="/en/art/"
              :class="[ resizeNav ? 'link--big' : 'link--small' ]"
            >
              Art
            </g-link>
          </li>
          <li v-else class="art-pl">
            <g-link
              to="/pl/art/"
              :class="[ resizeNav ? 'link--big' : 'link--small' ]"
            >
              Sztuka
            </g-link>
          </li>
          <li v-if="$context.locale === 'en-gb'" class="life">
            <g-link
              to="/en/life/"
              :class="[ resizeNav ? 'link--big' : 'link--small' ]"
            >
              Life
            </g-link>
          </li>
          <li v-else class="life-pl">
            <g-link
              to="/pl/life/"
              :class="[ resizeNav ? 'link--big' : 'link--small' ]"
            >
              Życie
            </g-link>
          </li>
          <li v-if="$context.locale === 'en-gb'" class="estate">
            <g-link
              to="/en/estate/"
              :class="[ resizeNav ? 'link--big' : 'link--small' ]"
            >
              Estate
            </g-link>
          </li>
          <li v-else class="estate-pl">
            <g-link
              to="/pl/estate/"
              :class="[ resizeNav ? 'link--big' : 'link--small' ]"
            >
              Posiadłość
            </g-link>
          </li>
        </ul>
      </div>
      <div class="hamburger" @click="toggleMenu()">
        <span class="screen-reader-text">Main Menu</span>
        <div :class="[ resizeNav ? 'hamburger__icon--big' : 'hamburger__icon--small' ]">
        </div>
      </div>
      <div :class="[ showMenu ? 'mobile__nav mobile__nav--active' : 'mobile__nav' ]">
        <ul class="mobile__menu">
          <li v-if="$context.locale === 'en-gb'">
            <g-link to="/en/art/" class="mobile__link">Art</g-link>
          </li>
          <li v-else>
            <g-link to="/pl/art/" class="mobile__link">Sztuka</g-link>
          </li>
          <li v-if="$context.locale === 'en-gb'">
            <g-link to="/en/life/" class="mobile__link">Life</g-link>
          </li>
          <li v-else>
            <g-link to="/pl/life/" class="mobile__link">Życie</g-link>
          </li>
          <li v-if="$context.locale === 'en-gb'">
            <g-link to="/en/estate/" class="mobile__link">Estate</g-link>
          </li>
          <li v-else>
            <g-link to="/pl/estate/" class="mobile__link">Posiadłość</g-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Logo from '@/components/Logo.vue'

export default {
  name: 'Navigation',
  components: {
    Logo,
  },
  props: {
    resizeNav: false
  },
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

$transition: 1s ease-in-out;

.nav {
  &--big,
  &--small {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    z-index: 5;
    transition: height $transition, background-color $transition;
  }
  &--big {
    height: 18rem;
    background-color: rgba(c.$grey-950, 0.5);
    @include b.mq(sm) {
      height: 3.5em;
      background-color: rgba(c.$grey-950, 0.6);
    }
  }
  &--small {
    height: 8rem;
    background-color: rgba(c.$grey-050, 1);
    box-shadow: 0 5px 10px rgba(black, 0.1);
    @include b.mq(sm) {
      height:3.5em;
    }
  }
}

.container {
  width: min(100rem, 88%);
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include b.mq(sm) {
    padding-top: 0.65em;
    align-items: flex-start;
  }
}

.link {
  &--big,
  &--small {
    position: relative;
    z-index: 2;
    transition: color 0.4s;
    &:hover{
      transition: color 0.3s;
    }
  }
  &--big {
    color: c.$grey-350;
    &:hover{
      color: c.$grey-050;
    }
    &.active--exact {
      color: c.$grey-050;
    }
  }
  &--small {
    color: c.$grey-500;
    &:hover{
      color: c.$grey-950;
    }
    &.active--exact {
      color: c.$grey-950;
    }
  }
}

.menu {
  &--big,
  &--small {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.2;
    text-align: right;
    text-transform: uppercase;
    li {
      transition: transform $transition;
      padding: 0;
    }
    @include b.mq(sm) {
      display: none;
    }
  }
  &--small {
    .art {
      transform: translate(-21.2rem, 3.3rem);
      display: inline;
      z-index: 3;
    }
    .life {
      transform: translate(-12.6rem, -0.3rem);
      z-index: 2;
    }
    .estate {
      z-index: 1;
      transform: translate(0rem, -3.9rem);
    }
    .art-pl {
      z-index: 3;
      transform: translate(-32rem, 3.3rem);
    }
    .life-pl {
      z-index: 2;
      transform: translate(-21rem, -0.3rem);
    }
    .estate-pl {
      z-index: 1;
      transform: translate(0rem, -3.9rem);
    }
  }
}

.hamburger {
  display: none;
  position: absolute;
  top: 0em;
  right: 0em;
  display: grid;
  cursor: pointer;
  height: 2.3em;
  width: 3em;
  cursor: pointer;
  z-index: 4;
  @include b.mq(sm) {
    display: block;
    margin: 0.7em 0.7ex 0.7em auto;
  }
  &__icon {
    &--big,
    &--small {
      display: none;
      position: relative;
      z-index: 6;
      width: 2.1em;
      height: 0.15em;
      margin: 1em 0 3em;
      background-color: c.$grey-150;
      transition: background-color $transition;
      &::before,
      &::after {
        position: absolute;
        content: "";
        display: block;
        background: c.$grey-150;
        width: 2.1em;
        height: 0.15em;
        transition: background-color $transition;
      }
      &::before {
        top: -0.6em;
      }
      &::after {
        top: 0.6em;
      }
      @include b.mq(sm) {
        display: block;
      }
    }
    &--small {
      background-color: c.$grey-950;
      &::before,
      &::after {
        background-color: c.$grey-950;
      }
    }
  }
}

.mobile {
  &__nav {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    position: absolute;
    top: 3.5em;
    left: 0;
    width: 100vw;
    height: calc(100vh - 3.5em);
    background-color: rgba(c.$grey-950, 0.6);
    transition: clip-path 1s;
    &--active {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      transition: clip-path 1s;
    }
  }
  &__menu {
    position: absolute;
    top: 0.5em;
    right: 0.83em;
    list-style: none;
    padding: 0;
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.8;
    text-align: right;
    text-transform: uppercase;
    li {
      padding: 0;
    }
  }
  &__link {
    color: c.$grey-050;
    &.active--exact {
      text-decoration: underline;
      text-decoration-thickness: 0.1em;
    }
  }
}

</style>
