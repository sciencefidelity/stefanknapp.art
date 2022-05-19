# stefanknapp.art

[stefanknapp.art](https://stefanknapp.art/)

The Estate of Polish visual artist Stefan Knapp.

This was previously made with [Gridsome](https://gridsome.org/), there are two reasons I chose to move away from Gridsom, firstly, for the same reason I'm moving to Next.js from Gatsby, I no longer need or really want to work with GraphQL. For most sites I'm using [Sanity](https://sanity.io/) for the back end, I find that GROQ is much more suited to the API, and also writes more expressive and compact queries. Secondly, I would prefer to work with Vue 3, to take advantage of the much improved developer expreience that Vue 3 offers, and I need SSG. Currently neither Gridsome or Nuxt offer Vue 3 with SSG.

The site is mulitlingual with English and Polish, and only has 4 pages, so currently the site is build with [Astro](https://astro.build/), with does'nt have great i18n support, but does have great file base routing, so I've split the incoming Sanity data into different locales and created files for each path with each language which feed localized date to components. The advantage of this is that it's easy to create localised slugs.

I would like to bring this back to Vue, and continue to work on a version that uses Vite + Vue 3 + [Vite SSG](https://github.com/antfu/vite-ssg) and other great projects that help put together the experience of working with a framework like Nuxt. 

Made with [Astro](https://astro.build/) and [Sanity](https://sanity.io/).
