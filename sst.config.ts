import { SSTConfig } from "sst";
import {  NextjsSite, toCdkDuration } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "next-app-dir",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    
    app.stack(function Site({ stack }) {
      // const testTable = new Table(stack, "testCacheTable2", {
      //   fields: {
      //     path: "string",
      //     tag: "string",
      //     revalidatedAt: "number",
      //   },
      //   primaryIndex: { partitionKey: "tag", sortKey: "path" },
      //   globalIndexes: {
      //     revalidate: { partitionKey: "path", sortKey: "revalidatedAt" },
      //   }
      // });
      // const script = new Script(stack, "script", {
      //   onUpdate: {
      //     handler: "script.handler",
      //     environment: {
      //       TABLE_NAME: testTable.tableName,
      //     },
      //     bind: [testTable],
      //     copyFiles: [
      //       {
      //         from: ".open-next/cache/dynamodb-cache.json",
      //         to: "dynamodb-cache.json",
      //       }
      //     ]
      //   }
      // })
      const site = new NextjsSite(stack, "site", {
        buildCommand: 
          "/mnt/ssd2/projects/open-next/packages/open-next/dist/index.js build",
          // "pnpx open-next@2.2.1 build",
        // enableExperimentalCacheInterception: true,
        experimental: {
          streaming: false,
        },
        waitForInvalidation: false,
        environment: {
          AWS_LAMBDA_RUNTIME_VERBOSE:"3"
        },
      });

      // site.attachPermissions([testTable]);
      stack.addOutputs({
        SiteUrl: site.url || "http://localhost:3000",
      });
    });
  },
} satisfies SSTConfig;
