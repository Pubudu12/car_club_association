/** @type {import('next').NextConfig} */
const { redirect } = require('next/dist/server/api-utils');
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  async redirects() {
    return []
  }

}
// const withTM = require('next-transpile-modules')(['react-timezone-select']); // pass the modules you would like to see transpiled

module.exports = nextConfig
module.exports = {
  output: 'standalone',
};
