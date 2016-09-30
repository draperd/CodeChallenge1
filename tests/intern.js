define({
   capabilities: {
      "browserstack.selenium_version": "2.45.0"
   },

   environments: [
      { browserName: "chrome" }
   ],

   maxConcurrency: 1,

   tunnel: "NullTunnel",

   loaderOptions: {
      
   },

   suites: [],

   functionalSuites: [ "tests/functional/index" ],

   excludeInstrumentation: /^(?:tests|node_modules)\//
});
