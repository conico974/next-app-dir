import { SSTConfig } from "sst";
import { Bucket, NextjsSite, Table } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "next-app-dir",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    
    app.stack(function Site({ stack }) {
      const testTable = new Table(stack, "testCacheTable2", {
        fields: {
          path: "string",
          tag: "string",
          revalidatedAt: "number",
        },
        primaryIndex: { partitionKey: "tag", sortKey: "path" },
        globalIndexes: {
          revalidate: { partitionKey: "path", sortKey: "revalidatedAt" },
        }
      });
      const site = new NextjsSite(stack, "site", {
        buildCommand: 
          "/mnt/ssd2/projects/open-next/packages/open-next/dist/index.js build && rm -rf .open-next/server-function/node_modules/next/dist/compiled && cp -r node_modules/next/dist/compiled .open-next/server-function/node_modules/next/dist/compiled  && cp -r .next/static .open-next/server-function/.next/static",
          // "pnpx open-next@2.0.5 build",
        // enableExperimentalCacheInterception: true,
        // warm:10,
        waitForInvalidation: false,
        environment: {
          CACHE_DYNAMO_TABLE: testTable.tableName,
        }
      });
      site.attachPermissions([testTable]);
      stack.addOutputs({
        SiteUrl: site.url || "http://localhost:3000",
      });
    });
  },
} satisfies SSTConfig;
