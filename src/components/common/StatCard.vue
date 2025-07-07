<template>
  <div class="rounded-lg p-6 shadow-sm border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-sm font-medium text-gray-600 dark:text-gray-300">{{ title }}</h3>
      <div class="w-10 h-10 rounded-lg flex items-center justify-center" :class="iconBgClass">
        <span :class="iconClass">{{ icon }}</span>
      </div>
    </div>
    <div class="space-y-2">
      <div class="flex justify-between">
        <span class="text-xs text-gray-500 dark:text-gray-400">{{ primaryLabel }}</span>
        <span class="text-lg font-semibold text-gray-900 dark:text-white">{{ primaryValue }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-xs text-gray-500 dark:text-gray-400">{{ secondaryLabel }}</span>
        <span class="text-sm" :class="secondaryValueClass">{{ secondaryValue }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String,
  iconBgClass: String,
  iconClass: String,
  primaryLabel: String,
  primaryValue: String,
  secondaryLabel: String,
  secondaryValue: String,
  secondaryValueClass: String
})
</script>
