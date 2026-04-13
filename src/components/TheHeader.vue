<script setup>
  import { theme, toggleTheme } from '@/stores/theme.js';
  import BaseButton from './BaseButton.vue';
  import ColorPicker from './ColorPicker.vue';
</script>

<template>
  <header>
    <h1><slot></slot></h1>
    <div class="controls">
      <ColorPicker />
      <BaseButton @click="toggleTheme" type="secondary">
        {{ theme }}
      </BaseButton>
    </div>
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
  .controls {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
</style>