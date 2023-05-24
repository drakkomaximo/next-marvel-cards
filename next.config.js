/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "i.annihil.us",
        port: "",
        pathname: "",
      },
    ],
  },
  env: {
    apiKey: "fcf9da7007ab397d1dd911f5ec7946ab",
    hash: "8ba405d0ae4da0d5a1b6e087d9d308c0",
    marvelUrl: "https://gateway.marvel.com:443",
  },
};

module.exports = nextConfig;
