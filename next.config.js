/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: false,
	// output: "standalone",
	experimental: {
		appDocumentPreloading: false,
		esmExternals: true,
		outputFileTracingExcludes: {
			"*": [
				"@swc/core",
				"esbuild",
				"uglify-js",
				"watchpack",
				"webassemblyjs",
				"sharp",
			],
		},
		// ppr: true,
	},
	images: {
		remotePatterns: [{ protocol: "https", hostname: "loremflickr.com" }],
	},
	headers: () => [
		{
			source: "/product",
			headers: [
				{
					key: "x-custom-header",
					value: "my custom header value",
				},
			],
		},
		{
			source: "/product/:path",
			headers: [
				{
					key: "x-custom-:path",
					value: "this is the :path",
				},
			],
		},
	],
	rewrites: () => ({
		beforeFiles: [
			{
				source: "/shouldBeRewritten",
				destination: "/",
			},
			{
				source: "/shouldBeRewritten/:path",
				destination: "/:path",
			},
			{
				source: "/externalRewrite",
				destination: "https://google.com",
			},
			{
				source: "/externalRewriteLocal",
				destination: "https://d3ftyhzhpsmdwh.cloudfront.net",
			},
			{
				source: "/externalRewriteSsr",
				destination:
					"https://vdfyg7as4gotycai26sfhz2zme0dhyha.lambda-url.eu-west-1.on.aws/ssr",
			},
			{
				source: "/rewriteToPageSsr",
				destination: "/pageSsr",
			}
		],
		afterFiles: [
			{
				source: "/shouldBeRewrittenAfterFiles",
				destination: "/",
			},
			{
				source: "/shouldBeRewrittenWithPath/:path",
				destination: "https://www.github.com/:path",
			},
		],
		fallback: [
			{
				source: "/shouldBeRewrittenFallback",
				destination: "/",
			},
		],
	}),
	redirects: () => [
		{
			source: "/shouldBeRedirected",
			destination: "/",
			permanent: true,
		},
		{
			source: "/shouldBeRedirectedWithQuery",
			destination: "/",
			permanent: false,
			has: [
				{
					type: "query",
					key: "a",
					value: "a",
				},
			],
		},
		{
			source: "/externalRedirect",
			destination: "https://google.com",
			permanent: false,
		},
		{
			source: "/externalRedirectWithPath/:path",
			destination: "https://google.com/:path",
			permanent: false,
		},
	],
};

module.exports = nextConfig;

// Injected content via Sentry wizard below

// const { withSentryConfig } = require("@sentry/nextjs");

// module.exports = withSentryConfig(
// 	module.exports,
// 	{
// 		// For all available options, see:
// 		// https://github.com/getsentry/sentry-webpack-plugin#options

// 		// Suppresses source map uploading logs during build
// 		silent: true,
// 		org: "dorseuil-nicolas",
// 		project: "javascript-nextjs",
// 	},
// 	{
// 		// For all available options, see:
// 		// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// 		// Upload a larger set of source maps for prettier stack traces (increases build time)
// 		widenClientFileUpload: false,

// 		// Transpiles SDK to be compatible with IE11 (increases bundle size)
// 		transpileClientSDK: true,

// 		// Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
// 		tunnelRoute: "/monitoring",

// 		// Hides source maps from generated client bundles
// 		hideSourceMaps: true,

// 		// Automatically tree-shake Sentry logger statements to reduce bundle size
// 		disableLogger: true,

// 		// Enables automatic instrumentation of Vercel Cron Monitors.
// 		// See the following for more information:
// 		// https://docs.sentry.io/product/crons/
// 		// https://vercel.com/docs/cron-jobs
// 		automaticVercelMonitors: false,
// 	},
// );
