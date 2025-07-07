<template>
  <div class="flex items-center space-x-2">
    <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
      {{ appStore.currentUser.avatar }}
    </div>
    <span class="text-sm text-gray-700 dark:text-gray-300">
      {{ appStore.currentUser.username }}
    </span>
    <span class="text-gray-400 dark:text-gray-500">▼</span>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>
