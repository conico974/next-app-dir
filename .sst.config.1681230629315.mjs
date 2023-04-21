import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// sst.config.ts
import { NextjsSite } from "sst/constructs";
var sst_config_default = {
  config(_input) {
    return {
      name: "next-app-dir",
      region: "us-east-1"
    };
  },
  stacks(app) {
    app.stack(/* @__PURE__ */ __name(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        buildCommand: "/mnt/ssd2/projects/open-next/packages/open-next/dist/index.js build",
        enableExperimentalCacheInterception: false,
        waitForInvalidation: false
      });
      stack.addOutputs({
        SiteUrl: site.url || "http://localhost:3000"
      });
    }, "Site"));
  }
};
export {
  sst_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3N0LmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgU1NUQ29uZmlnIH0gZnJvbSBcInNzdFwiO1xuaW1wb3J0IHsgTmV4dGpzU2l0ZSwgQnVja2V0IH0gZnJvbSBcInNzdC9jb25zdHJ1Y3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29uZmlnKF9pbnB1dCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBcIm5leHQtYXBwLWRpclwiLFxuICAgICAgcmVnaW9uOiBcInVzLWVhc3QtMVwiLFxuICAgIH07XG4gIH0sXG4gIHN0YWNrcyhhcHApIHtcbiAgICBhcHAuc3RhY2soZnVuY3Rpb24gU2l0ZSh7IHN0YWNrIH0pIHtcbiAgICAgIC8vIGNvbnN0IGNhY2hlQnVja2V0ID0gbmV3IEJ1Y2tldChzdGFjaywgXCJjYWNoZUJ1Y2tldFwiLCB7fSk7XG4gICAgICBjb25zdCBzaXRlID0gbmV3IE5leHRqc1NpdGUoc3RhY2ssIFwic2l0ZVwiLCB7XG4gICAgICAgIGJ1aWxkQ29tbWFuZDpcbiAgICAgICAgICBcIi9tbnQvc3NkMi9wcm9qZWN0cy9vcGVuLW5leHQvcGFja2FnZXMvb3Blbi1uZXh0L2Rpc3QvaW5kZXguanMgYnVpbGRcIixcbiAgICAgICAgZW5hYmxlRXhwZXJpbWVudGFsQ2FjaGVJbnRlcmNlcHRpb246IGZhbHNlLFxuICAgICAgICB3YWl0Rm9ySW52YWxpZGF0aW9uOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgLy8gc2l0ZS5hdHRhY2hQZXJtaXNzaW9ucyhbY2FjaGVCdWNrZXRdKTtcblxuICAgICAgc3RhY2suYWRkT3V0cHV0cyh7XG4gICAgICAgIFNpdGVVcmw6IHNpdGUudXJsIHx8IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbn0gc2F0aXNmaWVzIFNTVENvbmZpZztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7O0FBQ0EsU0FBUyxrQkFBMEI7QUFFbkMsSUFBTyxxQkFBUTtBQUFBLEVBQ2IsT0FBTyxRQUFRO0FBQ2IsV0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPLEtBQUs7QUFDVixRQUFJLE1BQU0sZ0NBQVMsS0FBSyxFQUFFLE1BQU0sR0FBRztBQUVqQyxZQUFNLE9BQU8sSUFBSSxXQUFXLE9BQU8sUUFBUTtBQUFBLFFBQ3pDLGNBQ0U7QUFBQSxRQUNGLHFDQUFxQztBQUFBLFFBQ3JDLHFCQUFxQjtBQUFBLE1BQ3ZCLENBQUM7QUFHRCxZQUFNLFdBQVc7QUFBQSxRQUNmLFNBQVMsS0FBSyxPQUFPO0FBQUEsTUFDdkIsQ0FBQztBQUFBLElBQ0gsR0FiVSxPQWFUO0FBQUEsRUFDSDtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
