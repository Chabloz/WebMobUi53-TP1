import { watch } from 'vue';
import { useJsonStorage } from '@/composables/useJsonStorage.js';

const { data: theme } = useJsonStorage('theme', 'dark');

watch(theme,
  (value) => document.body.dataset.theme = value,
  { immediate: true }
);

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
}

export { theme, toggleTheme };
