// million-ignore
import type { BuildOptions } from 'open-next/types/open-next'
const config = {
  default: {
    override: {
      wrapper: "aws-lambda-streaming",
    },
    experimentalBundledNextServer: true,
  },
  // functions: {},
  functions: {
    ssr: {
      routes: ["app/api/isr/route", "app/api/sse/route", "app/api/revalidateTag/route"],
      patterns: ['api/isr', 'api/sse', 'api/revalidateTag'],
      override: {
        wrapper: "aws-lambda-streaming",
      },
      experimentalBundledNextServer: true
    },
    pageSsr: {
      routes: ["pages/pageSsr"],
      patterns: [ 'pageSsr', "_next/data/BUILD_ID/pageSsr.json"],
      experimentalBundledNextServer: true,
      override: {}
    },
    
  },
  // buildCommand: "echo 'hello world'"
} satisfies BuildOptions

module.exports = config
export type OpenNextConfig = typeof config
