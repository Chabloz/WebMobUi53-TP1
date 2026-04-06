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
  div {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  label {
    width: var(--label-width, auto);
    font-weight: bold;
  }

  input {
    width: min(100%, var(--input-width, 10rem));
  }
</style>
