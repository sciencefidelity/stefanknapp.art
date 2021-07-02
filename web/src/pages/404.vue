<template>
  <layout>
    <main>
      <section class="fourohfour">
        <div v-if="$context.locale === 'en-gb'" class="fourohfour__text">
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn't exist... the sadness.</p>
        </div>
        <div v-else class="fourohfour__text">
          <h1>404 Nie Znaleziono</h1>
          <p>Po prostu trafiłeś na trasę, która nie istnieje ... smutek.</p>
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
import Hero from '@/components/Hero.vue'

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
  },
  components: {
    Hero,
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/colors' as c;
@use '../assets/scss/breakpoints' as b;

.fourohfour {
  display: grid;
  place-content: center;
  background: c.$grey-000;
  height: calc(100vh - 4.4rem);
  &__four-oh-four {
    @include b.mq(sm) {
      padding-top: 10rem;
    }
  }
}

h1,
p {
  display: block;
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
  font-size: 2.2rem;
  @include b.mq(sm) {
    font-size: 1.6rem;
  }
}

</style>
