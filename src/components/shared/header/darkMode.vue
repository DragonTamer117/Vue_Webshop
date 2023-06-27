<template>
  <button
      @click="toggleDark()"
      class="flex items-center justify-center rounded px-4 py-2 cursor-pointer border
      dark:text-yellow-700 dark:bg-yellow-400 dark:border-yellow-200 text-white bg-black border-black"
  >
    {{ isDark ? 'Light' : 'Dark' }}
  </button>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
  onChanged(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
});
const toggleDark = useToggle(isDark);
</script>

<style scoped>
/* Add your custom styles here */
</style>
