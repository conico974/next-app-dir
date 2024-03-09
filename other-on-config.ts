// million-ignore
import type { OpenNextConfig as ONConfig } from "open-next/types/open-next";
const config = {
	default: {
		override: {
			wrapper: "aws-lambda-streaming",
			// wrapper: "node",
			// converter: "node",
      // generateDockerfile: true,
		},
		experimentalBundledNextServer: true,
	},
	// functions: {},
	functions: {
		edge: {
			runtime: "edge",
			// experimentalBundledNextServer: true,
			routes: ["app/api/testEdge/route"],
			patterns: ["api/testEdge"],
			
		},
		pageEdge: {
			runtime: "edge",
			// experimentalBundledNextServer: true,
			routes: ["app/ssr/page"],
			patterns: ["ssr"],
			
		},
	},
  dangerous: {
    // disableDynamoDBCache: true,
  },
	// middleware: {
	//   external: true,
	// 	override: {
	// 		wrapper: "cloudflare",
	// 		converter: "edge"
	// 	}
	// },
	// buildCommand: "echo 'hello world'"
} satisfies ONConfig;

export default config;
export type OpenNextConfig = typeof config;
