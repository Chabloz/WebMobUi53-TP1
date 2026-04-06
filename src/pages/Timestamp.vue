<script setup>
  import { computed, ref } from 'vue';
  import BaseInputDate from '@/components/BaseInputDate.vue';
  import BaseInputNumber from '@/components/BaseInputNumber.vue';

  const rawTimestampMs = ref(Date.now());

  const timestampSeconds = computed({
    get: () => Number((rawTimestampMs.value / 1000).toFixed(3)),
    set: (value) => rawTimestampMs.value = Number(value) * 1000,
  });

  const timestampMilliseconds = computed({
    get: () => Math.round(rawTimestampMs.value),
    set: (value) => rawTimestampMs.value = Number(value),
  });

  const currentDate = computed(() => {
    const date = new Date(Number(rawTimestampMs.value));
    return Number.isNaN(date.getTime()) ? null : date;
  });

  const localDateTimeInput = computed({
    get: () => {
      if (!currentDate.value) return '';
      const time = currentDate.value.getTime();
      const offset = currentDate.value.getTimezoneOffset() * 60000; // 60000 ms = 1 min
      return new Date(time - offset).toISOString().slice(0, 19);
    },
    set: (value) => {
      if (value === '') return;
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return;
      rawTimestampMs.value = date.getTime();
    },
  });

  const utcDateTimeInput = computed({
    get: () => currentDate.value?.toISOString().slice(0, 19) ?? '',
    set: (value) => {
      if (value === '') return;
      const date = new Date(`${value}Z`);
      if (Number.isNaN(date.getTime())) return;
      rawTimestampMs.value = date.getTime();
    },
  });
</script>

<template>
  <div>
    <BaseInputNumber v-model="timestampSeconds" label="Timestamp Unix (s)" />
    <BaseInputNumber v-model="timestampMilliseconds" label="Timestamp Unix (ms)" />
    <BaseInputDate v-model="localDateTimeInput" label="Date (locale)" />
    <BaseInputDate v-model="utcDateTimeInput" label="Date (UTC)" />
  </div>
</template>
