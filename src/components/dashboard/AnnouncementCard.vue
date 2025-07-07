<template>
  <div class="rounded-lg p-6 shadow-sm border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">📢 系统公告</h3>
      <span class="text-sm text-gray-500 dark:text-gray-400">显示最新20条</span>
    </div>
    <div class="space-y-3">
      <div class="flex items-start space-x-3">
        <div class="flex items-center space-x-1 text-xs">
          <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span class="text-blue-600">默认</span>
          <span class="text-green-600">进行中</span>
          <span class="text-blue-600">应用</span>
          <span class="text-gray-600 dark:text-gray-300">配置</span>
          <span class="text-red-600">异常</span>
        </div>
      </div>
      <div class="border-t pt-3 border-gray-200 dark:border-gray-700">
        <p class="text-sm mb-1 text-gray-700 dark:text-gray-300">
          短时间内出现较多 403 错误，目前已经修复
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">20 小时前</p>
      </div>
    </div>
  </div>
</template>
