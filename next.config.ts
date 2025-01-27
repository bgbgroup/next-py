/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/papi/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5328/api/py/:path*'
            : '/api/py/:path*',
      },
    ]
  },
  experimental: {
		esmExternals: "loose",
	},
}

export default nextConfig