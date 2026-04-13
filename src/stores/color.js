import { readonly, watch } from 'vue';
import { useJsonStorage } from '@/composables/useJsonStorage.js';

const { data } = useJsonStorage('primary-color', import.meta.env.VITE_PRIMARY_COLOR || '#5d25c6');

watch(data,
  (value) => document.documentElement.style.setProperty('--color-primary', value),
  { immediate: true }
);

export function setPrimaryColor(color) {
  data.value = color;
}

export const primaryColor = readonly(data);
