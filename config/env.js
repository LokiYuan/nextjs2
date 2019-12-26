const env = process.env.ENV || 'development';

const configs = {
  development: {
    srcUrl: 'https://server.project-name.fontech.co',
    apiUrl: 'https://server.project-name.fontech.co/api',
    siteUrl: 'https://project-name.fontech.co',
  },
  staging: {
    srcUrl: 'https://server.project-name.fontech.co',
    apiUrl: 'https://server.project-name.fontech.co/api',
    siteUrl: 'https://project-name.fontech.co',
  },
  production: {
    srcUrl: 'https://server.project-name.com.tw',
    apiUrl: 'https://server.project-name.com.tw/api',
    siteUrl: 'https://project-name.com.tw',
  },
}[env];

module.exports = {
  srcUrl: configs.srcUrl,
  apiUrl: configs.apiUrl,
  siteUrl: configs.siteUrl,
  server: env,
};
