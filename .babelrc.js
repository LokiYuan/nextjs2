module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['babel-plugin-styled-components'],
    ['module-resolver', {
      'alias': {
        'apis': './src/apis',
        'containers': './src/containers',
        'components': './src/components',
        'utils': './src/utils',
        'vender': './static/vender',
        'images': './static/images',
      }
    }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ],
};
