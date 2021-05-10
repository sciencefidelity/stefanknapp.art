<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>

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
