<script setup>
  import BaseButton from './BaseButton.vue';
  import { useJsonStorage } from '../composables/useJsonStorage';

  const { data : label } = useJsonStorage('theme', 'dark');

  function toggleTheme() {
    label.value = label.value === 'dark' ? 'light' : 'dark';
  }
</script>

<template>
  <header>
    <h1><slot></slot></h1>
    <BaseButton @click="toggleTheme" type="secondary">
      {{ label }}
    </BaseButton>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--color-primary);
    border-bottom: 1px solid var(--color-border);
  }
  h1 {
    color: var(--color-bg);
    margin: 0;
    padding: 0;
  }
</style>