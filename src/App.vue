<script setup>
  import TheHeader from './components/TheHeader.vue';
  import TheNav from './components/TheNav.vue';
  import { routes } from './stores/routes';
  import { useHashRoute } from './composables/useHashRoute';
  import '@/stores/color.js';

  const { currentComponent, currentRoute } = useHashRoute(routes);
</script>

<template>
  <TheHeader>Converter App</TheHeader>
  <TheNav :routes="routes" :currentRoute="currentRoute" />
  <main>
    <Transition mode="out-in">
      <KeepAlive>
        <component :is="currentComponent" :key="currentRoute.hash" />
      </KeepAlive>
    </Transition>
  </main>
</template>

<style>
  /* Couleur par défaut définie dans .env : VITE_PRIMARY_COLOR */
  :root {
    --color-primary: #5d25c6;
    --color-bg: oklch(from var(--color-primary) 98% 0.01 h);
    --color-text: oklch(from var(--color-primary) 20% 0.02 h);
    --color-secondary: oklch(from var(--color-primary) calc(l + 0.28) c h);
    --color-border: oklch(from var(--color-primary) calc(l + 0.34) c h);
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: monospace, sans-serif;
  }
  body[data-theme="dark"] {
    --color-bg: oklch(from var(--color-primary) 15% 0.02 h);
    --color-text: oklch(from var(--color-primary) 95% 0.01 h);
  }
  body[data-theme="light"] {
    --color-bg: oklch(from var(--color-primary) 98% 0.01 h);
    --color-text: oklch(from var(--color-primary) 20% 0.02 h);
  }
  main {
    padding: 1rem;
  }

  main > * {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: max-content;
    max-width: 100dvw;
    margin: auto;
    --label-width: 14rem;
    --input-width: 14rem;
  }

  .v-enter-active, .v-leave-active { transition: opacity 0.16s ease }
  .v-enter-from, .v-leave-to { opacity: 0 }

  a {
    color: var(--color-primary);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a.active {
    text-decoration: underline;
    font-weight: bold;
    color: var(--color-primary);
  }
</style>
