<template>
  <div class="flex items-center space-x-4">
    <div class="flex-1 relative">
      <input 
        type="text" 
        placeholder="搜索关键字" 
        class="w-full px-3 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400"
      />
      <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
    </div>
    <div class="relative">
      <input 
        type="text" 
        placeholder="密钥" 
        class="px-3 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400"
      />
      <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
    </div>
    <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">查询</button>
    <button class="px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
      重置
    </button>
    <button class="p-2 border rounded-lg border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
      ⚙️
    </button>
  </div>
</template>
