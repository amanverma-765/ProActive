import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// Setup Cloudflare bindings for local development
if (process.env.NODE_ENV === 'development') {
    setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.usegalileo.ai',
            }
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
