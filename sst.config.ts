import { SSTConfig } from "sst";
import {Config, NextjsSite} from "sst/constructs"

import type {OpenNextConfig} from "./open-next.config";

export default {
  config(_input) {
    return {
      name: "next-app-dir",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    
    app.stack(function Site({ stack }) {
      const site = new NextjsSite<OpenNextConfig>(stack, "site", {
        buildCommand: 
          "/mnt/ssd2/projects/open-next/packages/open-next/dist/index.js build",
        logging: "combined",
        waitForInvalidation: false,
        environment: {
          AWS_LAMBDA_RUNTIME_VERBOSE:"3"
        },
        cdk: {
        
        }
      });


      stack.addOutputs({
        SiteUrl: site.url || "http://localhost:3000",
      });
    });
  },
} satisfies SSTConfig;
