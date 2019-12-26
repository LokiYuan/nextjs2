const env = require('./config/env.js');
// const serverRuntime = require('./config/serverRuntime.js');
// const publicRuntime = require('./config/publicRuntime.js');

module.exports = {
  webpack(config) {
    const copyConfig = config;
    const originalEntry = copyConfig.entry;
    copyConfig.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.js')) {
        entries['main.js'].unshift('./client/polyfills.js');
      }

      return entries;
    };

    return copyConfig;
  },
  target: 'serverless',
  env: {
    ...env,
  },
  // serverRuntimeConfig: {},
  // publicRuntimeConfig: {},
};
