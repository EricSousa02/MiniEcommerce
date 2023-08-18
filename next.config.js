/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        remotePatterns: [
            {
            hostname: "images.unsplash.com"
            },
            {
            hostname: "lh3.googleusercontent.com"    
            },
            {
            hostname: "unsplash.com"    
            },
            {
            hostname: "www.google.com"    
            }
            
            
    ]
    }
}

module.exports = nextConfig
