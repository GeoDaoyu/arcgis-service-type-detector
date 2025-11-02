# ArcGIS Service Type Detector
一个简单的 MCP (Model Context Protocol) 工具，用于检测 ArcGIS 服务类型。

## 项目简介
这是一个演示性的 MCP 工具项目，主要用于展示如何创建和使用 MCP 工具。该工具通过分析 ArcGIS 服务的 URL 来检测其图层类型。

## 功能特性

🚀 简单易用: 只需提供 URL 即可获取服务类型信息

## 安装依赖
```bash
npm install
```

## 使用方法
该工具通过 MCP 协议提供以下功能：

getLayerType 工具

描述: 通过 ArcGIS 服务 URL 获取图层类型

参数:

+ url (string): ArcGIS 服务 URL

返回结果:

+ 图层类型信息：TileLayer 或 MapImageLayer

## 技术栈
+ Model Context Protocol (MCP) SDK

+ Zod - 用于参数验证

+ Node.js

## 开发目的
本项目主要作为 MCP 工具开发的练习和演示，展示了：

+ 如何创建基本的 MCP 服务器

+ 如何注册和使用 MCP 工具

+ 如何通过 stdio 传输与 MCP 客户端通信

+ 基本的参数验证和错误处理

## 项目结构
```text
arcgis-service-type-detector/
├── src/
│   └── index.js         # 主程序文件
├── package.json         # 项目配置和依赖
└── README.md            # 项目说明文档
```
## 注意事项
本项目主要用于演示目的，实际功能较为简单

确保提供的 ArcGIS 服务 URL 可公开访问

工具目前仅支持区分 TileLayer 和 MapImageLayer 两种类型

## 许可证
MIT License
