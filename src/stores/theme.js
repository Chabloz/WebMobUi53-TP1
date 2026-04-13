import { readonly, watch } from 'vue';
import { useJsonStorage } from '@/composables/useJsonStorage.js';

const { data } = useJsonStorage('theme', 'dark');

watch(data,
  (value) => document.body.dataset.theme = value,
  { immediate: true }
);

export function toggleTheme() {
  data.value = data.value === 'dark' ? 'light' : 'dark';
}

export const theme = readonly(data);
