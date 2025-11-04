# ArcGIS Service Type Detector
一个简单的 MCP (Model Context Protocol) 工具，通过分析 ArcGIS MapServer URL 来检测其图层类型。

## 功能特性

🚀 简单易用: 只需提供 ArcGIS MapServer URL 即可获取服务类型。

## 使用方法
该工具通过 MCP 协议提供以下功能：

**getLayerType 工具**

**描述:** 通过 ArcGIS 服务 URL 获取图层类型

**参数**:

+ url (string): ArcGIS 服务 URL

**返回结果**:

+ 图层类型：TileLayer 或 MapImageLayer

**测试示例地址**：

+ https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer
+ https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer

## 技术栈
+ Model Context Protocol (MCP) SDK

+ Zod - 用于参数验证

+ Node.js

## 开发目的
本项目主要作为 MCP 工具开发的练习和演示，展示了：

+ 如何创建基本的 MCP 服务器
+ 如何注册和使用 MCP 工具
+ 如何通过 stdio 传输与 MCP 客户端通信

## 项目结构
```text
arcgis-service-type-detector/
├── src/
│   └── index.js         # 主程序文件
├── package.json         # 项目配置和依赖
└── README.md            # 项目说明文档
```
## 注意事项
确保提供的 ArcGIS MapServer URL 可公开访问。

## 许可证
MIT License
