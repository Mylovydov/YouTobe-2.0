/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.NEXT_PUBLIC_URL,
		API_URL: process.env.NEXT_PUBLIC_API_URL
	},
	images: {
		domains: ['localhost']
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:${process.env.NEXT_PUBLIC_API_PORT}/api/:path*`
			},
			{
				source: '/uploads/:path*',
				destination: `http://localhost:${process.env.NEXT_PUBLIC_API_PORT}/uploads/:path*`
			}
		]
	}
}

module.exports = nextConfig
