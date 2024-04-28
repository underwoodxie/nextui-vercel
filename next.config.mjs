/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        ACCESSKEYID: process.env.ACCESSKEYID,
        SECRETACCESSKEY: process.env.SECRETACCESSKEY,
      },
};

export default nextConfig;
