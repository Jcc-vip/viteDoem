# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

# 一、技术架构

Vue3 + Vite + Typescript + element-plus

## 二、目录说明

```
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 项目固定静态资源（主要是图片）
│   ├── components             # 全局公用组件
│   ├── icons                  # 项目所有 svg icons
│   ├── layout                 # 主体布局组件
│   ├── views                  # 所有页面
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局 样式管理
│   ├── utils                  # 全局公用方法
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
├── .eslintignore              # 忽略 eslintrc 配置文件
├── .eslintrc.js               # eslintrc 配置文件
├── .gitignore                 # 忽略git管理配置文件
├── .prettierignore            # 忽略 prettierrc 配置文件
├── .prettierrc.js             # prettier 配置文件
├── index.html                 # html首页
├── package-lock.json          # package锁文件
├── package.json               # package.json
├── tsconfig.json              # TypeScript配置文件
├── tsconfig.node.json         # TypeScript配置附加文件
└── vite.config.ts             # vite配置文件
```

## Commit 日志规范

- 采用 git-cz 插件管理提交规范，通过 yarn gc 命令选择对应的 commit 类型
- fix：修复 xxx Bug
- feat：新增 xxx 功能
- test：调试 xxx 功能
- style：变更 xxx 代码格式或注释
- docs：变更 xxx 文档
- refactor：重构 xxx 功能或方法

```

```
