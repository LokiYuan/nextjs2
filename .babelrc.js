module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['babel-plugin-styled-components'],
    ['module-resolver', {
      'alias': {
        'containers': './src/containers',
        'components': './src/components',
      }
    }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ],
};
