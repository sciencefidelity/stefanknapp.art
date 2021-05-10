<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>

@font-face {
  font-family: Futura;
  src:  url('~assets/fonts/futuralt-bold-subset.woff2') format('woff2'),
        url('~assets/fonts/futuralt-bold-subset.woff') format('woff');
  font-weight: 700;
  font-size: normal;
  font-optical-sizing: auto;
  font-display: swap;
}

:root {
  --background: rgba(27,28,29,1);
  --foreground: rgba(224,220,207,1);
  --transparent: rgba(224,220,207,0.3);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 62.5%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  color: var(--foreground);
  background: var(--background);
}

</style>
