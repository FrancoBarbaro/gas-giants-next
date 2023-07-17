/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	redirects: async () => [
		{
			source: '/',
			destination: '/home',
			permanent: true,
		},
	],
};

module.exports = nextConfig;
