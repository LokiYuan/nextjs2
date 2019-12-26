import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const nextConfig = { serverRuntimeConfig, publicRuntimeConfig };

export default nextConfig;
