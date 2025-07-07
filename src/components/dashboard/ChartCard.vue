<template>
  <div class="lg:col-span-2 rounded-lg p-6 shadow-sm border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">📊 模型数据分析</h3>
      <div class="flex space-x-2">
        <button class="px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-md">📊 详情分布</button>
        <button class="px-3 py-1 text-sm rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
          📞 调用次数分布
        </button>
      </div>
    </div>
    
    <div class="mb-4">
      <div class="text-sm mb-2 text-gray-600 dark:text-gray-300">模型消耗分析</div>
      <div class="text-xs text-gray-500 dark:text-gray-400">总计：$0.03</div>
    </div>
    
    <div class="h-64 rounded-lg flex items-end justify-center p-4 bg-gray-50 dark:bg-gray-700">
      <div class="flex items-end space-x-8">
        <div class="text-center">
          <div class="w-16 h-32 bg-blue-200 rounded mb-2"></div>
          <div class="text-xs text-gray-500 dark:text-gray-400">07-07 05:00</div>
        </div>
        <div class="text-center">
          <div class="w-16 h-24 bg-blue-300 rounded mb-2"></div>
          <div class="text-xs text-gray-500 dark:text-gray-400">07-07 06:00</div>
        </div>
        <div class="text-center">
          <div class="w-16 h-40 bg-blue-400 rounded mb-2"></div>
          <div class="text-xs text-gray-500 dark:text-gray-400">07-07 07:00</div>
        </div>
        <div class="text-center">
          <div class="w-16 h-48 bg-blue-500 rounded mb-2"></div>
          <div class="text-xs text-gray-500 dark:text-gray-400">07-07 11:00</div>
        </div>
      </div>
    </div>
    
    <div class="mt-4 flex items-center space-x-4 text-xs">
      <div class="flex items-center space-x-1">
        <div class="w-3 h-3 bg-blue-300 rounded"></div>
        <span class="text-gray-600 dark:text-gray-300">claude-sonnet-4-20250514</span>
      </div>
      <div class="flex items-center space-x-1">
        <div class="w-3 h-3 bg-blue-500 rounded"></div>
        <span class="text-gray-600 dark:text-gray-300">claude-3-5-haiku-20241022</span>
      </div>
    </div>
  </div>
</template>
