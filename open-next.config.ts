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
		ssr: {
			routes: [
				"app/api/isr/route",
				"app/api/sse/route",
				"app/api/revalidateTag/route",
			],
			patterns: ["api/isr", "api/revalidateTag", "api/sse"],
			override: {
				wrapper: "aws-lambda-streaming",
			},
			experimentalBundledNextServer: true,
		},
		pageSsr: {
			routes: ["pages/pageSsr"],
			patterns: ["pageSsr", "_next/data/BUILD_ID/pageSsr.json"],
			experimentalBundledNextServer: true,
			override: {},
		},
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
