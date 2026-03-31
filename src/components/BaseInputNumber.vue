<script setup>
  const model = defineModel();
  defineProps({ label: String });
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input v-model.number="model" type="number">
  </div>
</template>

<style scoped>
  label {
    width: var(--label-width, auto);
    font-weight: bold;
  }

  input {
    width: var(--input-width, 10rem);
  }
</style>
