<template>
  <layout
    :title="$static.sanityPhotography.mainImage.caption.en"
    :link="$static.sanityPhotography.mainImage"
    :width="$static.sanityPhotography.mainImage.asset.metadata.dimensions.width"
    :height="$static.sanityPhotography.mainImage.asset.metadata.dimensions.height"
  >
    <main>
      <section>
        <div class="four-oh-four">
          <h1>404: not found</h1>
          <p>You just hit a route that doesn't exist... the sadness.</p>
        </div>
      </section>
    </main>
  </layout>
</template>

<static-query>
  query {
    sanityPhotography(id: "c001c0b0-8e97-4bc8-abe5-ab3cf72e4dad") {
      mainImage {
        caption {
          en
          pl
        }
        asset {
          url
          metadata {
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  }
</static-query>

<script lang="ts">
export default {
  name: '404',
  metaInfo() {
    return {
      title: '404: not found',
      meta: [
        {
          name: 'description',
          content: 'You just hit a route that doesn\'t exist... the sadness.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/breakpoints' as b;

section {
  display: grid;
  place-content: center;
  position: absolute;
  background: transparent;
  z-index: 2;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
}

.four-oh-four {
  @include b.mq(sm) {
    padding-top: 10rem;
  }
}

h1,
p {
  display: block;
  background: white;
  padding: 0.2em 0.5em;
  text-align: center;
}

h1 {
  text-transform: uppercase;
  font-size: 5rem;
  @include b.mq(sm) {
    font-size: 2.5rem;
  }
}

p {
  padding: 0.5em 0.9em;
  font-size: 2.2rem;
  @include b.mq(sm) {
    font-size: 1.6rem;
  }
}

</style>
