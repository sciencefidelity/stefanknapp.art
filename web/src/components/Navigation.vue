<template>
  <nav :class="[ resizeNav ? 'nav--big' : 'nav--small' ]">
    <div class="container">
      <g-link to="/en"><div>
        <Logo :resizeLogo="resizeNav"/>
      </div></g-link>
      <div>
        <ul :class="[ resizeNav ? 'menu--big' : 'menu--small' ]">
          <g-link
            to="/en/art"
            :class="[ resizeNav ? 'link--big' : 'link--small' ]"
          >
            <li class="art">Art</li>
          </g-link>
          <g-link
            to="/en/life"
            :class="[ resizeNav ? 'link--big' : 'link--small' ]"
          >
            <li class="life">Life</li>
          </g-link>
          <g-link
            to="/en/estate"
            :class="[ resizeNav ? 'link--big' : 'link--small' ]"
          >
            <li class="estate">Estate</li>
          </g-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo'

export default {
  name: 'Navigation',
  components: {
    Logo,
  },
  props: {
    resizeNav: Boolean
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;

$transition: 1s ease-in-out;

.nav--big,
.nav--small {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 5px 10px rgba(black, 0.1);
  z-index: 5;
  transition: height $transition, background-color $transition;
}

.nav--big {
  height: 18rem;
  background-color: rgba(c.$grey-950, 0.5);
}

.nav--small {
  height: 8rem;
  background-color: rgba(c.$grey-050, 1);
}

.container {
  width: min(100rem, 88%);
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link--big,
.link--small {
  position: relative;
  z-index: 2;
  transition: color $transition;
  &:hover{
    transition: color $transition;
  }
}

.link--big {
  color: c.$grey-350;
  &:hover{
    color: c.$grey-050;
  }
}

.link--small {
  color: c.$grey-500;
  &:hover{
    color: c.$grey-950;
  }
}

.link--big.active--exact {
  color: c.$grey-050;
}

.link--small.active--exact {
  color: c.$grey-950;
}

.menu--big,
.menu--small {
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
}

.menu--small {
  .art {
    transform: translate(-21.2rem, 3.3rem);
  }
  .life {
    transform: translate(-12.6rem, -0.3rem);
  }
  .estate {
    transform: translate(0rem, -3.9rem);
  }
}

</style>
