<template>
  <div class="rounded-lg shadow-sm border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
    <table class="w-full">
      <thead class="border-b bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
        <tr>
          <th class="px-6 py-3 text-left">
            <input type="checkbox" class="rounded border-gray-300" />
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">名称</th>
          <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">状态</th>
          <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">已用额度</th>
          <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">剩余额度</th>
          <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">创建时间</th>
          <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">过期时间</th>
          <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">操作</th>
        </tr>
      </thead>
      <tbody class="divide-y bg-white dark:bg-gray-800 divide-gray-200 dark:divide-gray-700">
        <tr>
          <td class="px-6 py-4">
            <input type="checkbox" class="rounded border-gray-300" />
          </td>
          <td class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">claude</td>
          <td class="px-6 py-4">
            <div class="flex items-center space-x-2">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                ✅ 已启用
              </span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                用户分组
              </span>
            </div>
          </td>
          <td class="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">💰 $0.03</td>
          <td class="px-6 py-4 text-sm text-gray-900 dark:text-gray-300">💰 $0.97</td>
          <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">2025-07-07 11:20:21</td>
          <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">永不过期</td>
          <td class="px-6 py-4 text-sm">
            <div class="flex items-center space-x-2">
              <select class="text-sm border rounded px-2 py-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                <option>聊天</option>
              </select>
              <button class="px-3 py-1 bg-blue-600 text-white rounded text-xs">复制</button>
              <button class="px-3 py-1 bg-blue-600 text-white rounded text-xs">编辑</button>
              <button class="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">⋯</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    
    <!-- 分页 -->
    <div class="px-6 py-3 border-t flex items-center justify-between bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
      <div class="text-sm text-gray-700 dark:text-gray-300">第 1 - 1 条，共 1 条</div>
      <div class="flex items-center space-x-2">
        <button class="p-1 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">◀</button>
        <span class="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</span>
        <button class="p-1 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">▶</button>
        <select class="text-sm border rounded px-2 py-1 ml-4 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
          <option>每页条数：10</option>
        </select>
      </div>
    </div>
  </div>
</template>
