import { SSTConfig } from "sst";
import { Config, NextjsSite } from "sst/constructs"

import type { OpenNextConfig } from "./open-next.config";
import { OpenNextCdkReferenceImplementation } from "./openNextReferenceImplementation";

export default {
  config(_input) {
    return {
      name: "next-app-dir",
      region: "eu-west-1",
    };
  },
  stacks(app) {

    app.stack(function Site({ stack }) {
      //@ts-ignore
      const site = new NextjsSite<OpenNextConfig>(stack, "site", {
        // buildCommand:
        //   "/mnt/ssd2/projects/open-next/packages/open-next/dist/index.js build",
        buildCommand: "npx open-next@3.0.0-rc.6 build",
        logging: "combined",
        waitForInvalidation: false,
        environment: {
          AWS_LAMBDA_RUNTIME_VERBOSE: "3"
        },
        cdk: {
          servers: {
            pageSsr: {
              memorySize: 1536,
              warm: 5
              
            },
            ssr: {
              memorySize: 1536
            },
            edge: {
              timeout:2,
            }
          }
        }
      });
      const url = site.url;

      // const site = new OpenNextCdkReferenceImplementation(stack, "site", {
      //   openNextPath: ".open-next",
      // })
      // const url = site.distribution.distributionDomainName;


      stack.addOutputs({
        SiteUrl: url || "http://localhost:3000",
      });
    });
  },
} satisfies SSTConfig;
