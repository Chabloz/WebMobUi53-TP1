<script setup>
  const model = defineModel();
  defineProps({ label: String });
</script>

<template>
  <label>
    <span>{{ label }}</span>
    <input v-model="model" type="datetime-local" step="1">
  </label>
</template>

<style scoped>
  @import './base-input.css';
</style>
