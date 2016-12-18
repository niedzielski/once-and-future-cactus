SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "once-and-future-cactus/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "once-and-future-cactus": {
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "webfontloader": "npm:webfontloader@1.6.26"
  },
  packages: {}
});