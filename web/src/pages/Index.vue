<template>
  <layout>
    <section id="site-main">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 logo">
            <div class="knapp-image">
              <video-embed />
            </div>
            <div class="circle">
              <g-link v-if="$context.locale === 'en-gb'" to="/en/art/">
                <div class="title"><h1>Knapp</h1></div>
              </g-link>
              <g-link v-else to="/pl/art/">
                <div class="title"><h1>Knapp</h1></div>
              </g-link>
            </div>
          </div>
          <front-nav />
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="spacer"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 footer">
            <p class="footer-text">
              <span class="top-row">
                Galerie Günther Franke München &bull; Maximilianstraße 22, Telefon 226420
              </span><br />
              <span class="bottom-row">
                2. Februar bis Ende Februar 1968, geöffnet Montag mit Samstag 9 bis 17 Uhr
              </span>
            </p>
          </div>
          <div class="front-copy">
            <p>&copy; {{ copyright }}
              {{ $context.locale === "en-gb" ?
               'The Estate of Stefan Knapp' :
               'Posiadłość Stefana Knappa' }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>

<script lang="ts">
import Layout from '@/layouts/FrontPage.vue'
import VideoEmbed from '@/components/VideoEmbed.vue'
import FrontNav from '@/components/FrontNav.vue'

export default {
  name: 'Index',
  components: {
    Layout,
    VideoEmbed,
    FrontNav
  },
  data() {
    return {
      copyright: new Date().getFullYear()
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

#site-main {
  background: c.$grey-950;
  color: c.$sepia-150;
}

h1 {
  margin-bottom: 0px;
  font-size: 7.5vw;
  color: c.$grey-950;
  @include b.mq(lg) {
    font-size: 11vw;
  }
}

.logo {
  position: relative;
  padding-left: 0px;
  padding-right: 0px;
  @include b.mq(lg) {
    font-size: 1vw;
    padding: 4em 2em 0 2em;
  }
}

.circle {
  width: 100%;
  background: rgba(c.$sepia-650, 0.3);
  border-radius: 50%;
  position: relative;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
}

.knapp-image {
  position: absolute;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  @include b.mq(lg) {
    width: 96%;
  }
  video {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
}

.spacer {
  position: relative;
  width: 100%;
  &::after {
    content: "";
    display: block;
    padding-bottom: 40%;
    padding-bottom: max(40%, (calc(100vh - (4vh + 96vw + 6rem))));
  }
}

.title {
  text-transform: uppercase;
  text-align: right;
  position: absolute;
  right: 0.6em;
  bottom: 50%;
  line-height: 0;
  @include b.mq(lg) {
    font-size: 1vw;
    right: 0.5em;
  }
}

.footer-text {
  justify-content: flex-end;
  color: c.$sepia-150;
  font-size: 1.35vw;
  font-weight: 700;
  line-height: 1.5;
  white-space: nowrap;
  @include b.mq(lg) {
    font-size: max(1.9vw, 0.79rem);
  }
}

.top-row {
  letter-spacing: 0.029em;
}

.front-copy {
  margin: 0 auto;
  text-align: right;
  align-self: flex-end;
  p {
    font-size: clamp(1.4rem, 1.8vw, 1.9rem);
    margin: 0;
    @include b.mq(sm) {
      font-size: 1.2rem;
    }
  }
  @include b.mq(lg) {
    padding: 0.8rem;
    text-align: left;
    align-self: inherit;
  }
}

.footer {
  text-align: center;
  @include b.mq(lg) {
    padding-bottom: 1%;
  }
  p {
    margin: 0;
  }
}

</style>
