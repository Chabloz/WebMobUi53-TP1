<script setup>
  import { ref } from 'vue';
  import BaseInputNumber from '@/components/BaseInputNumber.vue';

  const tempSi = ref(0); // Kelvin
  const decimalPlaces = 2;

  const tempKelvin = defineModel('kelvin', {
    get: () => Number(tempSi.value.toFixed(decimalPlaces)),
    set: (val) => tempSi.value = Number(val),
  });

  const tempCelsius = defineModel('celsius', {
    get: () => Number((tempSi.value - 273.15).toFixed(decimalPlaces)),
    set: (val) => tempSi.value = Number(val) + 273.15,
  });

  const tempFahrenheit = defineModel('fahrenheit', {
    get: () => Number(((tempSi.value - 273.15) * 9/5 + 32).toFixed(decimalPlaces)),
    set: (val) => tempSi.value = Number((val - 32) * 5/9 + 273.15),
  });
</script>

<template>
  <div>
    <BaseInputNumber v-model="tempKelvin" label="Kelvin"/>
    <BaseInputNumber v-model="tempCelsius" label="°Celsius"/>
    <BaseInputNumber v-model="tempFahrenheit" label="°Fahrenheit"/>
  </div>
</template>

<style scoped>

</style>
