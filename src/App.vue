<script setup>
  import TheHeader from './components/TheHeader.vue';
  import TheNav from './components/TheNav.vue';
  import Home from './pages/Home.vue';
  import Temperature from './pages/Temperature.vue';
  import Byte from './pages/Byte.vue';
  import Timestamp from './pages/Timestamp.vue';

  import { useHashRoute } from './composables/useHashRoute';

  const routes = [
    { hash: '#home', label: 'Home', component: Home },
    { hash: '#temperature', label: 'Temp.', component: Temperature },
    { hash: '#byte', label: 'Byte', component: Byte },
    { hash: '#timestamp', label: 'Time', component: Timestamp },
  ];
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
  :root {
    --color-primary: #5d25c6;
    --color-bg: #fff;
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
    font-family: monospace, sans-serif;
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
