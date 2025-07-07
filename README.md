# Vue Router Dashboard

一个基于 Vue 3 + Vite 的现代化管理后台界面，完整重现 Any Router 管理面板的设计和功能。

## ✨ 特性

- 🌓 **深色/浅色主题切换** - 支持系统主题检测和手动切换
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🎨 **现代化UI** - 基于 Tailwind CSS 的精美界面
- 🔧 **模块化架构** - 组件化开发，易于维护和扩展
- 📊 **数据可视化** - 图表展示和统计分析
- ⚙️ **完整功能** - 包含所有管理后台常用功能

## 🚀 快速开始

1. 安装依赖：
\`\`\`bash
npm install
\`\`\`

2. 启动开发服务器：
\`\`\`bash
npm run dev
\`\`\`

3. 在浏览器中访问：http://localhost:3000

## 功能特性

- 🌓 深色/浅色主题切换
- 📱 响应式设计
- 📊 数据看板
- 🔗 API令牌管理
- 📋 使用日志
- 💰 钱包管理
- ⚙️ 个人设置

## 📁 项目结构

\`\`\`
src/
├── assets/           # 静态资源
│   └── styles/      # 样式文件
├── components/      # 公共组件
│   ├── common/     # 通用组件
│   ├── dashboard/  # 仪表板组件
│   ├── layout/     # 布局组件
│   └── modals/     # 弹窗组件
├── layouts/        # 页面布局
├── router/         # 路由配置
├── stores/         # 状态管理
├── utils/          # 工具函数
├── views/          # 页面组件
└── main.js         # 应用入口
\`\`\`

## 🎯 主要功能

### 页面模块

- **数据看板** - 统计概览、图表分析、系统公告
- **API令牌** - 令牌管理、搜索筛选、状态监控
- **使用日志** - 日志查询、实时监控、数据统计
- **钱包管理** - 余额查询、充值记录、邀请奖励
- **个人设置** - 账户绑定、通知设置、偏好配置

### 核心特性

- **主题系统** - 支持亮色/暗色主题，自动保存用户偏好
- **响应式布局** - 适配各种屏幕尺寸
- **组件化开发** - 高度模块化，便于维护
- **状态管理** - 使用 Pinia 进行状态管理
- **路由管理** - Vue Router 4 单页面应用

## 🛠️ 技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **路由**: Vue Router 4
- **状态管理**: Pinia
- **样式**: Tailwind CSS + SCSS
- **代码规范**: ESLint + Prettier

## 🎨 主题定制

项目支持完整的主题定制，可以通过修改 `src/assets/styles/variables.scss` 来自定义：

- 主色调和辅助色
- 背景色和文字色
- 边框和阴影样式
- 间距和圆角大小

## 📦 部署

### Vercel 部署

\`\`\`bash
npm run build
# 将 dist 目录部署到 Vercel
\`\`\`

### Netlify 部署

\`\`\`bash
npm run build
# 将 dist 目录部署到 Netlify
\`\`\`

### Docker 部署

\`\`\`dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
\`\`\`

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [Pinia](https://pinia.vuejs.org/) - Vue 状态管理库

## 使用说明

- 点击左侧导航菜单切换不同页面
- 点击右上角月亮/太阳图标切换主题
- 点击"使用指南"查看快速开始指南
- 在设置页面可以配置账户绑定和通知设置
