<template>
  <div id="app" :class="{ 'dark': isDarkMode }">
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const isDarkMode = computed(() => themeStore.isDarkMode)
</script>
