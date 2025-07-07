<template>
  <div class="min-h-screen flex" :class="isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'">
    <!-- 侧边栏 -->
    <div class="w-64 shadow-sm border-r" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
      <!-- Logo -->
      <div class="p-4 border-b" :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'">
        <div class="flex items-center space-x-2">
          <div class="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          <span class="font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Any Router</span>
        </div>
      </div>

      <!-- 导航菜单 -->
      <nav class="p-4 space-y-2">
        <div class="text-xs uppercase tracking-wide mb-3" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">控制台</div>
        
        <button @click="currentPage = 'dashboard'" 
           :class="[
             'w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-left',
             currentPage === 'dashboard' 
               ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
               : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
           ]">
          <span>📊</span>
          <span>数据看板</span>
        </button>
        
        <button @click="currentPage = 'api'" 
           :class="[
             'w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-left',
             currentPage === 'api' 
               ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
               : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
           ]">
          <span>🔗</span>
          <span>API令牌</span>
        </button>
        
        <button @click="currentPage = 'logs'" 
           :class="[
             'w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-left',
             currentPage === 'logs' 
               ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
               : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
           ]">
          <span>📋</span>
          <span>使用日志</span>
        </button>

        <div class="text-xs uppercase tracking-wide mb-3 mt-6" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">个人中心</div>
        
        <button @click="currentPage = 'wallet'" 
           :class="[
             'w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-left',
             currentPage === 'wallet' 
               ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
               : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
           ]">
          <span>💰</span>
          <span>钱包</span>
        </button>
        
        <button @click="currentPage = 'settings'" 
           :class="[
             'w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-left',
             currentPage === 'settings' 
               ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
               : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
           ]">
          <span>👤</span>
          <span>个人设置</span>
        </button>
      </nav>
    </div>

    <!-- 主内容区 -->
    <div class="flex-1">
      <!-- 顶部导航栏 -->
      <header class="border-b px-6 py-4" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">首页</span>
            <span :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">/</span>
            <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">控制台</span>
          </div>
          
          <div class="flex items-center space-x-4">
            <button :class="isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'" class="p-2">🔔</button>
            
            <!-- 主题切换按钮 -->
            <button @click="toggleTheme" :class="isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'" class="p-2">
              {{ isDarkMode ? '☀️' : '🌙' }}
            </button>
            
            <button :class="isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'" class="p-2">🌐</button>
            <button @click="showQuickStart = true" :class="isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'" class="p-2">
              使用指南
            </button>
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                G
              </div>
              <span class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">github_10414</span>
              <span :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">▼</span>
            </div>
          </div>
        </div>
      </header>

      <!-- 页面内容 -->
      <main class="p-6">
        <!-- 控制台页面 -->
        <div v-if="currentPage === 'dashboard'">
          <div class="mb-6">
            <h1 class="text-2xl font-semibold mb-2" :class="isDarkMode ? 'text-white' : 'text-gray-900'">👋早上好，github_10414</h1>
            <div class="flex items-center space-x-4 text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">
              <button class="p-1 hover:text-gray-700">🔍</button>
              <button class="p-1 hover:text-gray-700">🔄</button>
            </div>
          </div>

          <!-- 统计卡片 -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <!-- 账户数据 -->
            <div class="rounded-lg p-6 shadow-sm border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">账户数据</h3>
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span class="text-blue-600">👤</span>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">当前余额</span>
                  <span class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">$549.97</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">历史消耗</span>
                  <span class="text-sm text-purple-600">$0.03</span>
                </div>
              </div>
            </div>

            <!-- 使用统计 -->
            <div class="rounded-lg p-6 shadow-sm border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">使用统计</h3>
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span class="text-green-600">📊</span>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">请求次数</span>
                  <span class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">5</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">统计次数</span>
                  <span class="text-sm text-teal-600">5</span>
                </div>
              </div>
            </div>

            <!-- 资源消耗 -->
            <div class="rounded-lg p-6 shadow-sm border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">资源消耗</h3>
                <div class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span class="text-yellow-600">⚡</span>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">输入消耗</span>
                  <span class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">$0.03</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">输出Tokens</span>
                  <span class="text-sm text-red-600">455</span>
                </div>
              </div>
            </div>

            <!-- 性能指标 -->
            <div class="rounded-lg p-6 shadow-sm border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-sm font-medium" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">性能指标</h3>
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span class="text-purple-600">📈</span>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">平均RPM</span>
                  <span class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">0.003</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">平均TPM</span>
                  <span class="text-sm text-orange-600">0.303</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 图表和信息区域 -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <!-- 模型消耗分析 -->
            <div class="lg:col-span-2 rounded-lg p-6 shadow-sm border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">📊 模型数据分析</h3>
                <div class="flex space-x-2">
                  <button class="px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-md">📊 详情分布</button>
                  <button class="px-3 py-1 text-sm rounded-md" :class="isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-50'">📞 调用次数分布</button>
                </div>
              </div>
              
              <div class="mb-4">
                <div class="text-sm mb-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">模型消耗分析</div>
                <div class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">总计：$0.03</div>
              </div>
              
              <div class="h-64 rounded-lg flex items-end justify-center p-4" :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-50'">
                <div class="flex items-end space-x-8">
                  <div class="text-center">
                    <div class="w-16 h-32 bg-blue-200 rounded mb-2"></div>
                    <div class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">07-07 05:00</div>
                  </div>
                  <div class="text-center">
                    <div class="w-16 h-24 bg-blue-300 rounded mb-2"></div>
                    <div class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">07-07 06:00</div>
                  </div>
                  <div class="text-center">
                    <div class="w-16 h-40 bg-blue-400 rounded mb-2"></div>
                    <div class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">07-07 07:00</div>
                  </div>
                  <div class="text-center">
                    <div class="w-16 h-48 bg-blue-500 rounded mb-2"></div>
                    <div class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">07-07 11:00</div>
                  </div>
                </div>
              </div>
              
              <div class="mt-4 flex items-center space-x-4 text-xs">
                <div class="flex items-center space-x-1">
                  <div class="w-3 h-3 bg-blue-300 rounded"></div>
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">claude-sonnet-4-20250514</span>
                </div>
                <div class="flex items-center space-x-1">
                  <div class="w-3 h-3 bg-blue-500 rounded"></div>
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">claude-3-5-haiku-20241022</span>
                </div>
              </div>
            </div>

            <!-- API信息 -->
            <div class="rounded-lg p-6 shadow-sm border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">🔧 API信息</h3>
                <button class="p-1" :class="isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'">🔄</button>
              </div>
              <div class="text-center py-8">
                <div class="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center" :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-100'">
                  <span class="text-2xl">🔧</span>
                </div>
                <h4 class="font-medium mb-2" :class="isDarkMode ? 'text-white' : 'text-gray-900'">暂无API信息</h4>
                <p class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">请联系管理员在系统设置中配置API信息</p>
              </div>
            </div>
          </div>

          <!-- 底部信息区域 -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- 系统公告 -->
            <div class="rounded-lg p-6 shadow-sm border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">📢 系统公告</h3>
                <span class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">显示最新20条</span>
              </div>
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <div class="flex items-center space-x-1 text-xs">
                    <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span class="text-blue-600">默认</span>
                    <span class="text-green-600">进行中</span>
                    <span class="text-blue-600">应用</span>
                    <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">配置</span>
                    <span class="text-red-600">异常</span>
                  </div>
                </div>
                <div class="border-t pt-3" :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'">
                  <p class="text-sm mb-1" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">短时间内出现较多 403 错误，目前已经修复</p>
                  <p class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">20 小时前</p>
                </div>
              </div>
            </div>

            <!-- 常见问答 -->
            <div class="rounded-lg p-6 shadow-sm border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">❓ 常见问答</h3>
                <button class="p-1" :class="isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'">🔄</button>
              </div>
              <div class="text-center py-8">
                <div class="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center" :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-100'">
                  <span class="text-2xl">❓</span>
                </div>
                <h4 class="font-medium mb-2" :class="isDarkMode ? 'text-white' : 'text-gray-900'">暂无常见问答</h4>
                <p class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">请联系管理员在系统设置中配置常见问答</p>
              </div>
            </div>

            <!-- 监控数据 -->
            <div class="rounded-lg p-6 shadow-sm border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">🔍 服务可用性</h3>
                <button class="p-1" :class="isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'">🔄</button>
              </div>
              <div class="text-center py-8">
                <div class="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center" :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-100'">
                  <span class="text-2xl">📊</span>
                </div>
                <h4 class="font-medium mb-2" :class="isDarkMode ? 'text-white' : 'text-gray-900'">暂无监控数据</h4>
                <p class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">请联系管理员在系统设置中配置Uptime</p>
              </div>
            </div>
          </div>
        </div>

        <!-- API令牌页面 -->
        <div v-if="currentPage === 'api'" class="space-y-6">
          <div class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">控制台</h1>
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
          <div class="flex items-center space-x-4">
            <div class="flex-1 relative">
              <input type="text" placeholder="搜索关键字" class="w-full px-3 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'" />
              <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
            </div>
            <div class="relative">
              <input type="text" placeholder="密钥" class="px-3 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'" />
              <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
            </div>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">查询</button>
            <button class="px-4 py-2 border rounded-lg" :class="isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'">重置</button>
            <button class="p-2 border rounded-lg" :class="isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'">⚙️</button>
          </div>

          <!-- 令牌表格 -->
          <div class="rounded-lg shadow-sm border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
            <table class="w-full">
              <thead class="border-b" :class="isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'">
                <tr>
                  <th class="px-6 py-3 text-left">
                    <input type="checkbox" class="rounded border-gray-300" />
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">名称</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">状态</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">已用额度</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">剩余额度</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">创建时间</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">过期时间</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">操作</th>
                </tr>
              </thead>
              <tbody class="divide-y" :class="isDarkMode ? 'bg-gray-800 divide-gray-700' : 'bg-white divide-gray-200'">
                <tr>
                  <td class="px-6 py-4">
                    <input type="checkbox" class="rounded border-gray-300" />
                  </td>
                  <td class="px-6 py-4 text-sm font-medium" :class="isDarkMode ? 'text-white' : 'text-gray-900'">claude</td>
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
                  <td class="px-6 py-4 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-900'">💰 $0.03</td>
                  <td class="px-6 py-4 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-900'">💰 $0.97</td>
                  <td class="px-6 py-4 text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">2025-07-07 11:20:21</td>
                  <td class="px-6 py-4 text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">永不过期</td>
                  <td class="px-6 py-4 text-sm">
                    <div class="flex items-center space-x-2">
                      <select class="text-sm border rounded px-2 py-1" :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'">
                        <option>聊天</option>
                      </select>
                      <button class="px-3 py-1 bg-blue-600 text-white rounded text-xs">复制</button>
                      <button class="px-3 py-1 bg-blue-600 text-white rounded text-xs">编辑</button>
                      <button :class="isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'">⋯</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            
            <!-- 分页 -->
            <div class="px-6 py-3 border-t flex items-center justify-between" :class="isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'">
              <div class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">第 1 - 1 条，共 1 条</div>
              <div class="flex items-center space-x-2">
                <button class="p-1" :class="isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'">◀</button>
                <span class="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</span>
                <button class="p-1" :class="isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'">▶</button>
                <select class="text-sm border rounded px-2 py-1 ml-4" :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'">
                  <option>每页条数：10</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- 使用日志页面 -->
        <div v-if="currentPage === 'logs'" class="space-y-6">
          <div class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">控制台</h1>
          </div>

          <!-- 统计信息 -->
          <div class="flex items-center space-x-4 p-4 rounded-lg border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
            <span class="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded">消耗额度: $0.03</span>
            <span class="text-sm text-red-600 bg-red-50 px-3 py-1 rounded">RPM: 0</span>
            <span class="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded">TPM: 0</span>
          </div>

          <!-- 筛选区域 -->
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <input type="datetime-local" value="2025-07-07T00:00:00" class="border rounded-lg px-3 py-2 text-sm" 
                  :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'" />
                <span :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">-</span>
                <input type="datetime-local" value="2025-07-07T13:00:41" class="border rounded-lg px-3 py-2 text-sm" 
                  :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'" />
              </div>
              <button class="p-2 border rounded-lg" :class="isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'">📅</button>
              <div class="flex-1 relative">
                <input type="text" placeholder="令牌名称" class="w-full px-3 py-2 pl-10 border rounded-lg" 
                  :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'" />
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
              </div>
              <div class="relative">
                <input type="text" placeholder="模型名称" class="px-3 py-2 pl-10 border rounded-lg" 
                  :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'" />
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
              </div>
            </div>
            
            <div class="flex items-center space-x-4">
              <div class="relative">
                <input type="text" placeholder="分组" class="px-3 py-2 pl-10 border rounded-lg" 
                  :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'" />
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
              </div>
              <select class="border rounded-lg px-3 py-2" :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'">
                <option>全部</option>
              </select>
              <div class="flex space-x-2 ml-auto">
                <button class="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">直播</button>
                <button class="px-4 py-2 rounded-lg" :class="isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-50'">重置</button>
                <button class="p-2 border rounded-lg" :class="isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'">⚙️</button>
                <span class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">列设置</span>
              </div>
            </div>
          </div>

          <!-- 日志表格 -->
          <div class="rounded-lg shadow-sm border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
            <table class="w-full">
              <thead class="border-b" :class="isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">时间</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">令牌</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">分组</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">类型</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">模型</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">用时/耗字</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">提示</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">补全</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">花费</th>
                  <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" :class="isDarkMode ? 'text-gray-300' : 'text-gray-500'">详情</th>
                </tr>
              </thead>
              <tbody class="divide-y" :class="isDarkMode ? 'bg-gray-800 divide-gray-700' : 'bg-white divide-gray-200'">
                <!-- 系统日志 -->
                <tr v-for="i in 7" :key="i">
                  <td class="px-6 py-4 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-900'">2025-07-07 11:{{ 45 - i * 2 }}:{{ 25 + i * 5 }}</td>
                  <td class="px-6 py-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      系统
                    </span>
                  </td>
                  <td class="px-6 py-4 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-900'">-</td>
                  <td class="px-6 py-4 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-900'">-</td>
                  <td class="px-6 py-4 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-900'">-</td>
                  <td class="px-6 py-4 text-sm text-green-600">0 s</td>
                  <td class="px-6 py-4 text-sm text-purple-600">非流</td>
                  <td class="px-6 py-4 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-900'">-</td>
                  <td class="px-6 py-4 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-900'">-</td>
                  <td class="px-6 py-4 text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">透请用户隐藏 $ 50.000000 额度</td>
                </tr>
                
                <!-- 详细日志条目 -->
                <tr :class="isDarkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'">
                  <td class="px-6 py-4 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-900'">
                    <div class="flex items-center">
                      <span class="mr-2">▶</span>
                      2025-07-07 11:26:29
                    </div>
                  </td>
                  <td class="px-6 py-4 text-sm text-blue-600">claude</td>
                  <td class="px-6 py-4 text-sm text-blue-600">default</td>
                  <td class="px-6 py-4 text-sm text-green-600">消费</td>
                  <td class="px-6 py-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      🧠 claude-3-5-haiku-20241022
                    </span>
                  </td>
                  <td class="px-6 py-4 text-sm text-green-600">10 s</td>
                  <td class="px-6 py-4 text-sm text-red-600">10.5 s</td>
                  <td class="px-6 py-4 text-sm text-blue-600">流</td>
                  <td class="px-6 py-4 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-900'">86</td>
                  <td class="px-6 py-4 text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-900'">26</td>
                </tr>
              </tbody>
            </table>
            
            <!-- 分页 -->
            <div class="px-6 py-3 border-t flex items-center justify-between" :class="isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'">
              <div class="text-sm" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">第 1 - 10 条，共 16 条</div>
              <div class="flex items-center space-x-2">
                <button class="p-1" :class="isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'">◀</button>
                <span class="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</span>
                <span class="px-3 py-1 rounded text-sm cursor-pointer" :class="isDarkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-600 hover:bg-gray-100'">2</span>
                <button class="p-1" :class="isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'">▶</button>
                <select class="text-sm border rounded px-2 py-1 ml-4" :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'">
                  <option>每页条数：10</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- 钱包页面 -->
        <div v-if="currentPage === 'wallet'" class="space-y-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- 在线充值 -->
            <div class="rounded-lg p-6 shadow-sm border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span class="text-blue-600">💳</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">在线充值</h3>
                  <p class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">快速方便的充值方式</p>
                </div>
                <div class="ml-auto flex items-center space-x-2">
                  <span class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">👤 github_10414 (普通用户)</span>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="text-center">
                  <div class="text-2xl font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">$549.97</div>
                  <div class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">当前余额</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">$0.03</div>
                  <div class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">历史消耗</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">$0.00</div>
                  <div class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">待使用收益</div>
                  <button class="text-xs text-blue-600 hover:text-blue-800 mt-1">如何获得奖励</button>
                </div>
              </div>

              <div class="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-6" :class="isDarkMode ? 'bg-orange-900/20 border-orange-700' : ''">
                <div class="flex items-center space-x-2">
                  <span class="text-orange-600">⚠️</span>
                  <span class="text-sm" :class="isDarkMode ? 'text-orange-300' : 'text-orange-800'">限时免费期间暂不支持在线充值功能，您可以邀请注册获得更多额度</span>
                </div>
              </div>

              <div class="mb-6">
                <h4 class="text-sm font-medium mb-3" :class="isDarkMode ? 'text-white' : 'text-gray-900'">兑换码充值</h4>
                <div class="flex items-center space-x-3">
                  <div class="flex-1 relative">
                    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🎁</span>
                    <input type="text" placeholder="请输入兑换码" class="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'" />
                  </div>
                  <button class="px-4 py-2 rounded-lg" :class="isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'">兑换</button>
                </div>
              </div>
            </div>

            <!-- 邀请奖励 -->
            <div class="rounded-lg p-6 shadow-sm border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
              <div class="flex items-center space-x-3 mb-6">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span class="text-green-600">👥</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">邀请奖励</h3>
                  <p class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">邀请好友获得额外奖励</p>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="text-center">
                  <div class="text-2xl font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">$450.00</div>
                  <div class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">总收益</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">9</div>
                  <div class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">邀请人数</div>
                </div>
              </div>

              <div class="mb-6">
                <h4 class="text-sm font-medium mb-3" :class="isDarkMode ? 'text-white' : 'text-gray-900'">邀请链接</h4>
                <div class="flex items-center space-x-3">
                  <input type="text" value="https://anyrouter.top/register?aff=eUfZ" readonly class="flex-1 px-3 py-2 border rounded-lg text-sm" 
                    :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300'" />
                  <button class="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <span>📋</span>
                    <span>复制</span>
                  </button>
                </div>
              </div>

              <div class="text-sm space-y-2" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">
                <p>每邀请一位好友注册，您和好友都可获得额外 $50 Claude Code 额度的奖励</p>
                <p>通过邀请功能获得奖励额度收入到您的账户余额</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 个人设置页面 -->
        <div v-if="currentPage === 'settings'" class="space-y-6">
          <div class="rounded-lg shadow-sm border" :class="isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'">
            <!-- 用户信息 -->
            <div class="p-6 border-b" :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'">
              <div class="flex items-center space-x-4">
                <div class="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white text-xl font-medium">
                  GI
                </div>
                <div>
                  <h3 class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">github_10414</h3>
                  <p class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">普通用户 · ID: 10414</p>
                </div>
                <button class="ml-auto p-2" :class="isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'">👤</button>
              </div>

              <div class="mt-6 grid grid-cols-3 gap-6">
                <div>
                  <div class="text-2xl font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">$549.97</div>
                  <div class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">当前余额</div>
                </div>
                <div>
                  <div class="text-2xl font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">$0.03</div>
                  <div class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">历史消耗</div>
                </div>
                <div>
                  <div class="text-2xl font-bold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">5</div>
                  <div class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">请求次数</div>
                </div>
              </div>
            </div>

            <!-- 设置选项卡 -->
            <div class="border-b" :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'">
              <nav class="flex space-x-8 px-6">
                <button @click="settingsTab = 'account'" 
                  :class="[
                    'py-4 px-1 border-b-2 font-medium text-sm',
                    settingsTab === 'account' 
                      ? 'border-blue-500 text-blue-600' 
                      : isDarkMode ? 'border-transparent text-gray-400 hover:text-gray-300' : 'border-transparent text-gray-500 hover:text-gray-700'
                  ]">
                  👤 账户绑定
                </button>
                <button @click="settingsTab = 'notifications'" 
                  :class="[
                    'py-4 px-1 border-b-2 font-medium text-sm',
                    settingsTab === 'notifications' 
                      ? 'border-blue-500 text-blue-600' 
                      : isDarkMode ? 'border-transparent text-gray-400 hover:text-gray-300' : 'border-transparent text-gray-500 hover:text-gray-700'
                  ]">
                  🔔 通知设置
                </button>
              </nav>
            </div>

            <!-- 设置内容 -->
            <div class="p-6">
              <!-- 账户绑定 -->
              <div v-if="settingsTab === 'account'" class="space-y-4">
                <!-- 邮箱 -->
                <div class="flex items-center justify-between p-4 border rounded-lg" :class="isDarkMode ? 'border-gray-600' : 'border-gray-200'">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center" :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-100'">
                      <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">📧</span>
                    </div>
                    <div>
                      <div class="font-medium" :class="isDarkMode ? 'text-white' : 'text-gray-900'">邮箱</div>
                      <div class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">未绑定</div>
                    </div>
                  </div>
                  <button class="text-blue-600 hover:text-blue-800 text-sm">绑定</button>
                </div>

                <!-- GitHub -->
                <div class="flex items-center justify-between p-4 border rounded-lg" :class="isDarkMode ? 'border-gray-600' : 'border-gray-200'">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                      <span class="text-white">🐙</span>
                    </div>
                    <div>
                      <div class="font-medium" :class="isDarkMode ? 'text-white' : 'text-gray-900'">GitHub</div>
                      <div class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">BigLake</div>
                    </div>
                  </div>
                  <button class="text-blue-600 hover:text-blue-800 text-sm">绑定</button>
                </div>

                <!-- 微信 -->
                <div class="flex items-center justify-between p-4 border rounded-lg" :class="isDarkMode ? 'border-gray-600' : 'border-gray-200'">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span class="text-green-600">💬</span>
                    </div>
                    <div>
                      <div class="font-medium" :class="isDarkMode ? 'text-white' : 'text-gray-900'">微信</div>
                      <div class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">未绑定</div>
                    </div>
                  </div>
                  <span class="text-sm" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">未启用</span>
                </div>

                <!-- Telegram -->
                <div class="flex items-center justify-between p-4 border rounded-lg" :class="isDarkMode ? 'border-gray-600' : 'border-gray-200'">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span class="text-white">✈️</span>
                    </div>
                    <div>
                      <div class="font-medium" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Telegram</div>
                      <div class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">未绑定</div>
                    </div>
                  </div>
                  <span class="text-sm" :class="isDarkMode ? 'text-gray-500' : 'text-gray-400'">未启用</span>
                </div>

                <!-- LinuxDO -->
                <div class="flex items-center justify-between p-4 border rounded-lg" :class="isDarkMode ? 'border-gray-600' : 'border-gray-200'">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span class="text-orange-600">🐧</span>
                    </div>
                    <div>
                      <div class="font-medium" :class="isDarkMode ? 'text-white' : 'text-gray-900'">LinuxDO</div>
                      <div class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">未绑定</div>
                    </div>
                  </div>
                  <button class="text-blue-600 hover:text-blue-800 text-sm">绑定</button>
                </div>
              </div>

              <!-- 通知设置 -->
              <div v-if="settingsTab === 'notifications'" class="space-y-6">
                <div>
                  <h4 class="text-lg font-medium mb-4" :class="isDarkMode ? 'text-white' : 'text-gray-900'">通知设置</h4>
                  <p class="text-sm mb-6" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">价格设置</p>
                </div>

                <!-- 通知方式 -->
                <div>
                  <h5 class="text-sm font-medium mb-4" :class="isDarkMode ? 'text-white' : 'text-gray-900'">通知方式</h5>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- 邮件通知 -->
                    <div class="p-4 border rounded-lg" :class="[
                      isDarkMode ? 'border-gray-600' : 'border-gray-200',
                      notificationSettings.method === 'email' ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-700' : ''
                    ]">
                      <div class="flex items-center space-x-3 mb-3">
                        <input 
                          type="radio" 
                          id="email-notification" 
                          v-model="notificationSettings.method" 
                          value="email"
                          class="text-blue-600"
                        />
                        <label for="email-notification" class="flex items-center space-x-2 cursor-pointer">
                          <span>📧</span>
                          <span class="font-medium" :class="isDarkMode ? 'text-white' : 'text-gray-900'">邮件通知</span>
                        </label>
                      </div>
                      <p class="text-sm ml-6" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">通过邮件接收通知</p>
                    </div>

                    <!-- Webhook通知 -->
                    <div class="p-4 border rounded-lg" :class="[
                      isDarkMode ? 'border-gray-600' : 'border-gray-200',
                      notificationSettings.method === 'webhook' ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-700' : ''
                    ]">
                      <div class="flex items-center space-x-3 mb-3">
                        <input 
                          type="radio" 
                          id="webhook-notification" 
                          v-model="notificationSettings.method" 
                          value="webhook"
                          class="text-blue-600"
                        />
                        <label for="webhook-notification" class="flex items-center space-x-2 cursor-pointer">
                          <span>🔗</span>
                          <span class="font-medium" :class="isDarkMode ? 'text-white' : 'text-gray-900'">Webhook通知</span>
                        </label>
                      </div>
                      <p class="text-sm ml-6" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">通过HTTP请求接收通知</p>
                    </div>
                  </div>
                </div>

                <!-- 通知邮箱 -->
                <div>
                  <h5 class="text-sm font-medium mb-3" :class="isDarkMode ? 'text-white' : 'text-gray-900'">通知邮箱</h5>
                  <div class="flex items-center space-x-3">
                    <span class="text-gray-400">📧</span>
                    <input 
                      type="email" 
                      v-model="notificationSettings.email"
                      placeholder="留空则使用账号绑定的邮箱"
                      class="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'"
                    />
                  </div>
                  <p class="text-xs mt-2" :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'">
                    设置用于接收通知的邮箱地址，不填则使用账号绑定的邮箱
                  </p>
                </div>

                <!-- 阈值设置 -->
                <div>
                  <h5 class="text-sm font-medium mb-3" :class="isDarkMode ? 'text-white' : 'text-gray-900'">阈值预警阈值 | 等价金额: ${{ notificationSettings.threshold }}</h5>
                  <div class="flex items-center space-x-3">
                    <span class="text-gray-400">⚠️</span>
                    <input 
                      type="number" 
                      v-model="notificationSettings.thresholdValue"
                      step="100000"
                      min="0"
                      class="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      :class="isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'"
                    />
                  </div>
                  <p class="text-sm mt-2" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
                    当剩余额度低于此数值时，系统将通过选择的方式发送通知
                  </p>
                </div>

                <!-- 保存按钮 -->
                <div class="flex justify-end pt-4">
                  <button 
                    @click="saveNotificationSettings"
                    class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    💾 保存设置
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- 快速开始弹窗 -->
    <div v-if="showQuickStart" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" :class="isDarkMode ? 'bg-gray-800' : 'bg-white'">
        <div class="flex items-center justify-between p-6 border-b" :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'">
          <h3 class="text-lg font-semibold" :class="isDarkMode ? 'text-white' : 'text-gray-900'">系统公告</h3>
          <button @click="showQuickStart = false" :class="isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'">
            ❌
          </button>
        </div>
        
        <div class="p-6">
          <div class="text-center mb-6">
            <div class="text-2xl mb-2">🚀快速开始</div>
            <p :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">点击右上角 系统公告 可再次查看 | 完整内容更多参考使用文档</p>
          </div>

          <div class="space-y-6">
            <div>
              <h4 class="font-medium mb-2" :class="isDarkMode ? 'text-white' : 'text-gray-900'">❓FAQ</h4>
              <p class="text-sm mb-4" :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'">本站是基于官方 Claude Code 接口，无法体验 Claude Code 的 API 调用</p>
            </div>

            <div>
              <h4 class="font-medium mb-2" :class="isDarkMode ? 'text-white' : 'text-gray-900'">1️⃣安装 Node.js（已安装可跳过）</h4>
              <div class="rounded-lg p-3 text-sm font-mono" :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-100'">
                <p :class="isDarkMode ? 'text-gray-300' : ''">确保 Node.js 版本 ≥ 18.0</p>
                <p :class="isDarkMode ? 'text-gray-300' : ''">npm install -g @anthropic-ai/claude-code</p>
                <p :class="isDarkMode ? 'text-gray-300' : ''">claude --version</p>
              </div>
            </div>

            <div>
              <h4 class="font-medium mb-2" :class="isDarkMode ? 'text-white' : 'text-gray-900'">2️⃣开始使用</h4>
              <div class="rounded-lg p-3 text-sm font-mono" :class="isDarkMode ? 'bg-gray-700' : 'bg-gray-100'">
                <p :class="isDarkMode ? 'text-gray-300' : ''">export ANTHROPIC_AUTH_TOKEN=sk-xxx...</p>
                <p :class="isDarkMode ? 'text-gray-300' : ''">export ANTHROPIC_BASE_URL=https://anyrouter.top</p>
                <p :class="isDarkMode ? 'text-gray-300' : ''">claude</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-end space-x-3 p-6 border-t" :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'">
          <button @click="showQuickStart = false" :class="isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'" class="px-4 py-2">今日关闭</button>
          <button @click="showQuickStart = false" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">关闭公告</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentPage = ref('dashboard')
const showQuickStart = ref(false)
const settingsTab = ref('account')
const isDarkMode = ref(false)

// 通知设置
const notificationSettings = ref({
  method: 'email',
  email: '',
  threshold: 0.20,
  thresholdValue: 100000,
  emailEnabled: true,
  webhookEnabled: false
})

// 主题切换功能
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value.toString())
  
  // 更新HTML类名以支持Tailwind的dark模式
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// 保存通知设置
const saveNotificationSettings = () => {
  // 这里可以添加保存到后端的逻辑
  console.log('保存通知设置:', notificationSettings.value)
  alert('设置已保存！')
}

// 初始化主题
onMounted(() => {
  const savedTheme = localStorage.getItem('darkMode')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'true'
  } else {
    // 检测系统主题偏好
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  }
})
</script>

<style>
/* 确保dark模式样式正确应用 */
.dark {
  color-scheme: dark;
}
</style>
