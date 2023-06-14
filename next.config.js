const moduleExports = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/engagement-party/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};