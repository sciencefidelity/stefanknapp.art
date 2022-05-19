<template>
  <main>
    <RouterView />
  </main>
  <footer class="footer flex w-full">
    <nav class="lang">
      <a :href="`/${locales[1]}`" class="outline">
        {{ languages[1].toUpperCase() }}
      </a>
    </nav>
    <div class="copy">&copy; {{ year }} {{ settings.title }}</div>
  </footer>
</template>
