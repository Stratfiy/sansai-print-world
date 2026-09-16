// craco.config.js — cleaned for Vercel (Emergent-only tooling removed)
const path = require("path");

// Keeps `yarn start` working locally with webpack-dev-server v5
function makeDevServerV5Compatible(devServerConfig) {
  const {
    https,
    onAfterSetupMiddleware,
    onBeforeSetupMiddleware,
    onListening,
    setupMiddlewares,
    ...compatibleConfig
  } = devServerConfig;

  compatibleConfig.server =
    typeof https === "object"
      ? { type: "https", options: https }
      : https
        ? "https"
        : "http";

  if (onBeforeSetupMiddleware || setupMiddlewares) {
    compatibleConfig.setupMiddlewares = (middlewares, devServer) => {
      if (onBeforeSetupMiddleware) onBeforeSetupMiddleware(devServer);
      return setupMiddlewares
        ? setupMiddlewares(middlewares, devServer)
        : middlewares;
    };
  }

  compatibleConfig.onListening = (devServer) => {
    devServer.close ??= (callback) => devServer.stopCallback(callback);
    if (onListening) onListening(devServer);
    if (onAfterSetupMiddleware) onAfterSetupMiddleware(devServer);
  };

  return compatibleConfig;
}

module.exports = {
  // react-scripts 5 bundles ESLint 8; this project ships ESLint 9, which breaks the build
  eslint: {
    enable: false,
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: (devServerConfig) => makeDevServerV5Compatible(devServerConfig),
};
