const path = require('path');

module.exports = {
  // ... other webpack configurations
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // You can add your custom middlewares here
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      // Example of adding a custom middleware
      devServer.app.use((req, res, next) => {
        console.log('Time:', Date.now());
        next();
      });

      return middlewares;
    },
  },
};