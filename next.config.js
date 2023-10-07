/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.example.com/:path*',
            },
        ]
    },
}


module.exports = nextConfig
