<script setup>
 defineProps({
   type: { type: String, default: 'primary'},
 });
</script>

<template>
  <button :class="type">
    <slot></slot>
  </button>
</template>

<style scoped>
  button {
    padding: 0.5rem;
    margin: 0;
    border: none;
    color: var(--color-primary);
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid var(--color-border);
    min-width: 3.5rem;
  }

  .primary {
    background-color: var(--color-primary);
  }

  .secondary {
    background-color: var(--color-secondary);
  }
</style>