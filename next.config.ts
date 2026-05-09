import type { NextConfig } from 'next'

const basePath = '/expert-science';
// const basePath = '/si-education';

const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',
    trailingSlash: true,
    basePath,
    assetPrefix: basePath,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
}

export default nextConfig
