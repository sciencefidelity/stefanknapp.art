<template>
  <Layout>
    <section id="site-main">
      <div class="container-fluid">
        <div class="row">
          <div class="col logo">
            <div class="circle">
              <NuxtLink to="/">
                <div class="title"><h1>Knapp</h1></div>
              </NuxtLink>
            </div>
          </div>
          <FrontNav />
        </div>
        <div class="row">
          <div class="col">
            <div class="spacer"></div>
          </div>
        </div>
        <div class="row">
          <div class="front-copy">
            <p>
              &copy; {{ new Date().getFullYear() }} The Estate of Stefan Knapp
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script lang="ts">
import { groq } from "@nuxtjs/sanity"
import Layout from "@/layouts/FrontPage.vue"
import FrontNav from "@/components/FrontNav.vue"

const query = groq`*[_type == 'meta']{
  title, description, ogTitle, ogDescription, ogImage
}`

export default {
  name: "Index",
  components: {
    Layout,
    FrontNav
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/css/colors' as c;
@use '../assets/css/breakpoints' as b;

::selection {
  background: rgba(c.$sepia-150, 0.3);
}

#site-main {
  min-height: 100vh;
  color: c.$sepia-150;
  background: c.$grey-950;
}

h1 {
  margin-bottom: 0;
  font-size: 7.5vw;
  color: c.$grey-950;
  @include b.mq(lg) {
    font-size: 11vw;
  }
}

.logo {
  position: relative;
  padding-right: 0;
  padding-left: 0;
  @include b.mq(lg) {
    padding: 4em 2em 0;
    font-size: 1vw;
  }
}

.circle {
  position: relative;
  width: 100%;
  background: c.$sepia-150;
  border-radius: 50%;
  &::after {
    display: block;
    padding-bottom: 100%;
    content: '';
  }
}

.spacer {
  position: relative;
  width: 100%;
  &::after {
    display: block;
    padding-bottom: 40%;
    padding-bottom: max(40%, (calc(100vh - (4vh + 96vw + 6rem))));
    content: '';
  }
}

.title {
  position: absolute;
  right: 0.6em;
  bottom: 50%;
  line-height: 0;
  text-align: right;
  text-transform: uppercase;
  @include b.mq(lg) {
    right: 0.5em;
    font-size: 1vw;
  }
}

.front-copy {
  padding: 0 5rem 0 0;
  margin: 0 0 0 auto;
  @include b.mq(lg) {
    align-self: inherit;
    padding: 0.8rem;
  }
  p {
    margin: 0;
    font-size: clamp(1.4rem, 1.8vw, 1.9rem);
    font-weight: 600;
    @include b.mq(sm) {
      font-size: 1.2rem;
    }
  }
}

.footer {
  @include b.mq(lg) {
    padding-bottom: 1%;
  }
}
</style>
