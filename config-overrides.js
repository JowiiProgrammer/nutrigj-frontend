module.exports = function override(config, env) {
  if (!config.devServer) {
    config.devServer = {};
  }
  
  config.devServer.setupMiddlewares = (middlewares, devServer) => {
    if (!devServer) {
      throw new Error('webpack-dev-server is not defined');
    }

    // You can add your custom middlewares here
    // For example:
    // devServer.app.use(myCustomMiddleware());

    // Important: Return the modified middlewares array
    return middlewares;
  };

  return config;
};