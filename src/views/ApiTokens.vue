<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">控制台</h1>
      <div class="flex space-x-3">
        <button class="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <span>➕</span>
          <span>添加令牌</span>
        </button>
        <button class="flex items-center space-x-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200">
          <span>🚀</span>
          <span>复制开始令牌到剪贴板</span>
        </button>
      </div>
    </div>

    <!-- 搜索区域 -->
    <SearchFilters />

    <!-- 令牌表格 -->
    <TokenTable />
  </div>
</template>

<script setup>
import SearchFilters from '@/components/api-tokens/SearchFilters.vue'
import TokenTable from '@/components/api-tokens/TokenTable.vue'
</script>
