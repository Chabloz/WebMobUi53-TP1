<script setup>
  const {routes, currentRoute} = defineProps({
    routes: Array,
    currentRoute: Object,
  });

  function getClass(route) {
    return route.hash === currentRoute.hash ? 'active' : '';
  }
</script>

<template>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route.hash">
        <a :href="route.hash" :class="getClass(route)">
          {{ route.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    padding: .5rem;
    margin: 0;
    border-bottom: 1px solid var(--color-border);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: var(--color-secondary);
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li {
    padding: 0 .5rem;
    display: inline-block;
  }
</style>
