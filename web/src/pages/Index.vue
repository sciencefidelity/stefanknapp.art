<template>
  <Layout>
    <section id="site-main">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 logo">
            <div class="knapp-image">
              <VideoEmbed video="../../static/06-hc-sq.mp4"/>
            </div>
            <div class="circle">
              <g-link to="/art/">
                <div class="title"><h1>Knapp</h1></div>
              </g-link>
            </div>
          </div>
          <FrontNav />
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
            <p>&copy; {{ copyright }}</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from '../layouts/FrontPage'
import VideoEmbed from '../components/VideoEmbed'
import FrontNav from '../components/FrontNav'

export default {
  name: 'Index',
  components: {
    Layout,
    VideoEmbed,
    FrontNav
  },
  data() {
    return {
      copyright: new Date().getFullYear() + ' The Estate of Stefan Knapp',
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
    padding-top: 4%;
    padding-right: 2%;
    padding-left: 2%;
    padding-bottom: 0;
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
    right: 0.5em;
  }
}

.footer-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: c.$sepia-150;
  font-size: 1.35vw;
  font-weight: 700;
  line-height: 1.5;
  @include b.mq(lg) {
    font-size: 1.9vw;
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
    font-size: 1.9rem;
    margin: 0;
  }
  @include b.mq(lg) {
    padding: 0.8rem;
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
