/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
    @import "./src/styles/mixins.scss";
    @import "./src/styles/variables.scss";


    `,
  },
};

module.exports = nextConfig;
