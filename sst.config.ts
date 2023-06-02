import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "next-app-dir",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        buildCommand: 
          "/mnt/ssd2/projects/open-next/packages/open-next/dist/index.js build",
        // enableExperimentalCacheInterception: true,
        // warm:10,
        waitForInvalidation: false,
      });
      // site.attachPermissions([cacheBucket]);

      stack.addOutputs({
        SiteUrl: site.url || "http://localhost:3000",
      });
    });
  },
} satisfies SSTConfig;
