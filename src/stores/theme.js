import { ref, watch } from 'vue';
import { getItem, setItem } from '@/utils/jsonStorage.js';

const theme = ref(getItem('theme', 'dark'));

watch(theme, (value) => {
  setItem('theme', value);
}, { immediate: true });

watch(theme,
  (value) => document.body.dataset.theme = value,
  { immediate: true }
);

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
}

export const themeStore = {
  theme,
  toggleTheme,
};
