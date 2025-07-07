<template>
  <router-link
    :to="item.path"
    :class="[
      'w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-left transition-colors',
      item.active 
        ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
    ]"
  >
    <span>{{ item.icon }}</span>
    <span>{{ item.title }}</span>
  </router-link>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
