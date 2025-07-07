<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">控制台</h1>
    </div>

    <!-- 统计信息 -->
    <div class="flex items-center space-x-4 p-4 rounded-lg border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <span class="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded">消耗额度: $0.03</span>
      <span class="text-sm text-red-600 bg-red-50 px-3 py-1 rounded">RPM: 0</span>
      <span class="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded">TPM: 0</span>
    </div>

    <!-- 筛选区域 -->
    <LogFilters />

    <!-- 日志表格 -->
    <LogTable />
  </div>
</template>

<script setup>
import LogFilters from '@/components/usage-logs/LogFilters.vue'
import LogTable from '@/components/usage-logs/LogTable.vue'
</script>
