<template>
  <div class="rounded-lg p-6 shadow-sm border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ title }}</h3>
      <button class="p-1 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
        🔄
      </button>
    </div>
    <div class="text-center py-8">
      <div class="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
        <span class="text-2xl">{{ icon }}</span>
      </div>
      <h4 class="font-medium mb-2 text-gray-900 dark:text-white">{{ emptyTitle }}</h4>
      <p class="text-sm text-gray-500 dark:text-gray-400">{{ emptyDescription }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String,
  emptyTitle: String,
  emptyDescription: String
})
</script>
