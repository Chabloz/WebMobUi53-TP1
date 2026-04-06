<script setup>
  const model = defineModel();
  defineProps({ label: String });
</script>

<template>
  <label>
    <span>{{ label }}</span>
    <input v-model.number="model" type="number">
  </label>
</template>

<style scoped>
  @import './base-input.css';
</style>
