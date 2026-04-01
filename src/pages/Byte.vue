<script setup>
  import { ref } from 'vue';
  import BaseInputNumber from '@/components/BaseInputNumber.vue';

  const rawBits = ref(0);
  const decimalPlaces = 8;

  const bits = defineModel('bits', {
    get: () => Number(rawBits.value.toFixed(decimalPlaces)),
    set: (val) => rawBits.value = Number(val),
  });

  const bytes = defineModel('bytes', {
    get: () => Number((rawBits.value / 8).toFixed(decimalPlaces)),
    set: (val) => rawBits.value = Number(val) * 8,
  });

  const kB = defineModel('kB', {
    get: () => Number((rawBits.value / 8 / 1000).toFixed(decimalPlaces)),
    set: (val) => rawBits.value = Number(val) * 8 * 1000,
  });

  const KiB = defineModel('KiB', {
    get: () => Number((rawBits.value / 8 / 1024).toFixed(decimalPlaces)),
    set: (val) => rawBits.value = Number(val) * 8 * 1024,
  });

  const MB = defineModel('MB', {
    get: () => Number((rawBits.value / 8 / 1000 / 1000).toFixed(decimalPlaces)),
    set: (val) => rawBits.value = Number(val) * 8 * 1000 * 1000,
  });

  const MiB = defineModel('MiB', {
    get: () => Number((rawBits.value / 8 / 1024 / 1024).toFixed(decimalPlaces)),
    set: (val) => rawBits.value = Number(val) * 8 * 1024 * 1024,
  });
</script>

<template>
  <div>
    <BaseInputNumber v-model="bits" label="Bits"/>
    <BaseInputNumber v-model="bytes" label="Bytes"/>
    <BaseInputNumber v-model="kB" label="kB (kilobyte)"/>
    <BaseInputNumber v-model="KiB" label="KiB (kibibyte)"/>
    <BaseInputNumber v-model="MB" label="MB (megabyte)"/>
    <BaseInputNumber v-model="MiB" label="MiB (mebibyte)"/>
  </div>
</template>

<style scoped>

</style>
