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

    },
    async headers(){
return [
    {
        source: "/api/:path",
        headers:[
            { key:"Access-Control-Allow-Credentials",value:"true" },
            { key: "Access-Control-Allow-Origin", value: process.env.NEXT_PUBLIC_URL ? `https://${process.env.NEXT_PUBLIC_URL}` : "http://localhost:3000" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
        
    }
]
    }
}

module.exports = nextConfig
