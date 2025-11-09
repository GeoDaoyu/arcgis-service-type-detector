# ArcGIS Service Type Detector
A simple MCP (Model Context Protocol) tool that detects layer types by analyzing ArcGIS MapServer URLs.

## Features

🚀 Easy to use: Just provide an ArcGIS MapServer URL to get the service type.

## Usage
This tool provides the following functionality via the MCP protocol:

**getLayerType Tool**

**Description:** Get layer type from ArcGIS service URL

**Parameters:**

+ url (string): ArcGIS service URL

**Return Value:**

+ Layer type: TileLayer or MapImageLayer

**Test Example URLs:**

+ https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer
+ https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer

## Tech Stack
+ Model Context Protocol (MCP) SDK
+ Zod - for parameter validation
+ Node.js

## Development Purpose
This project serves as a practice and demonstration for MCP tool development, showcasing:

+ How to create a basic MCP server
+ How to register and use MCP tools
+ How to communicate with MCP clients via stdio

## Project Structure
```text
arcgis-service-type-detector/
├── src/
│   └── index.js         # Main program file
├── package.json         # Project configuration and dependencies
└── README.md            # Project documentation
```

## Notes
Ensure the provided ArcGIS MapServer URL is publicly accessible.

## License
MIT License
