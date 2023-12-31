/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:'s3.amazonaws.com'
            }
        ]
       
    },
    experimental: {
        serverComponentsExternalPackages: ['mongoose', '@typegoose/typegoose']

    }
}

module.exports = nextConfig
