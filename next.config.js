/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['makeup.p.rapidapi.com','cdn.shopify.com','s3.amazonaws.com']
    },
    experimental:{
        serverComponentsExternalPackages:['mongoose','@typegoose/typegoose']

    }
}

module.exports = nextConfig
