/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //? Penggunaan Image dengan source dari link luar
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.tokopedia.net",
        port: "",
        pathname: "/**",
      }
    ]
  }
}

module.exports = nextConfig
