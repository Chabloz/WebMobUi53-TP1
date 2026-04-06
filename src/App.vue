<script setup>
  import TheHeader from './components/TheHeader.vue';
  import TheNav from './components/TheNav.vue';
  import Home from './pages/Home.vue';
  import Temperature from './pages/Temperature.vue';
  import Byte from './pages/Byte.vue';

  import { useHashRoute } from './composables/useHashRoute';

  const routes = [
    { hash: '#home', label: 'Home', component: Home },
    { hash: '#temperature', label: 'Temper.', component: Temperature },
    { hash: '#byte', label: 'Byte', component: Byte },
  ];
  const { currentComponent, currentRoute } = useHashRoute(routes);

</script>

<template>
  <TheHeader>Converter App</TheHeader>
  <TheNav :routes="routes" :currentRoute="currentRoute" />
  <main>
    <KeepAlive>
      <component :is="currentComponent" />
    </KeepAlive>
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
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: auto;
      --label-width: 10rem;
      --input-width: 10rem;
    }
  }
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
