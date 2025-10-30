/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.ifro.edu.br',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;


// https://www.ifro.edu.br/img/logo-ifro-hotsite.png