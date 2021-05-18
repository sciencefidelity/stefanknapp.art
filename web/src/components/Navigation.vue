/<template>
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
    resizeNav: Boolean
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

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
  @include b.mq(sm) {
    height: 30vw;
  }
}

.nav--small {
  height: 8rem;
  background-color: rgba(c.$grey-050, 1);
  @include b.mq(sm) {
    height:30vw;
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
    padding-top: 1em;
    align-items: flex-start;
  }
}

.link--big,
.link--small {
  position: relative;
  z-index: 2;
  transition: color 0.4s;
  &:hover{
    transition: color 0.3s;
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
  @include b.mq(sm) {
    font-size: 6vw;
  }
}

.menu--small {
  .art {
    transform: translate(-21.2rem, 3.3rem);
    @include b.mq(sm) {
      font-size: 100%;
      transform: translate(-12.9em, 2.2em);
    }
  }
  .life {
    transform: translate(-12.6rem, -0.3rem);
    @include b.mq(sm) {
      transform: translate(-7.1em, 1em);
    }
  }
  .estate {
    transform: translate(0rem, -3.9rem);
    @include b.mq(sm) {
      transform: translate(0em, -0.2em);
    }
  }
  .art-pl {
    transform: translate(-32rem, 3.3rem);
    @include b.mq(sm) {
      transform: translate(-11.2em, 2.2em);
    }
  }
  .life-pl {
    transform: translate(-21rem, -0.3rem);
    @include b.mq(sm) {
      transform: translate(-7.1em, 1em);
    }
  }
  .estate-pl {
    transform: translate(0rem, -3.9rem);
    @include b.mq(sm) {
      font-size: 100%;
      transform: translate(0em, -0.2em);
    }
  }
}

</style>
