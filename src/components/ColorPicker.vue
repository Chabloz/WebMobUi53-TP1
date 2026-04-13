<script setup>
  import { primaryColor, setPrimaryColor } from '@/stores/color.js';

  function handleColorChange(event) {
    setPrimaryColor(event.target.value);
  }
</script>

<template>
  <input
    type="color"
    :value="primaryColor"
    @input="handleColorChange"
    title="Choisir une couleur"
  />
</template>

<style scoped>
  input[type="color"] {
    width: 3rem;
    height: 2.5rem;
    border: 2px solid var(--color-border);
    border-radius: 0.25rem;
    cursor: pointer;
    background: none;
  }

  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: 0.125rem;
  }
</style>
