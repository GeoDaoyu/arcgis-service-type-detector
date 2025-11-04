import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create server instance
const server = new McpServer({
  name: "arcgis-service-type-detector",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

// Register tools
server.tool(
  "getLayerType",
  "Get ArcGIS Layer Type By ArcGIS Service URL",
  {
    url: z.string().describe("ArcGIS Service URL"),
  },
  async ({ url }) => {
    const response = await fetch(`${url}?f=json`);
    const serverInfo = await response.json();
    const text = `It is a ${serverInfo.tileInfo ? "TileLayer" : "MapImageLayer"}`;
    return {
      content: [
        {
          type: "text",
          text: text,
        },
      ],
    };
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
